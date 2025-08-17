/* eslint-env node */
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

// Shared logic to produce the report text (server-side only)
async function generateReport(personalityType) {
  const google = createGoogleGenerativeAI({
    // Use Node env var. Do NOT use import.meta.env here.
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const customPrompt = `
      You are an expert personality analyst. A user has taken a personality test and their type is ${personalityType}.
      Generate a concise, friendly, and analytical report based on their type.
      The report should follow this structure exactly, using markdown for formatting:

      ## **${personalityType}** – The [Engaging Title]
      **Function Stack:** [Primary Functions]
      **Savior Functions:** [Two Main Functions]
      **Demon Functions:** [Two Lesser Functions]
      ---
      ### **Core Personality Snapshot**
      A paragraph summarizing the user's core personality.
      ---
      ### **Strengths to Leverage**
      - 3 key strengths.
      ---
      ### **Common Pitfalls**
      - 3 common challenges.
      ---
      ### **Action Plan for Growth**
      1. 4 actionable growth steps.
      ---
      ### **Quick Motivation Tip**
      A short, encouraging tip.
      ---
      Generate the report now based on the type: ${personalityType}.
    `;

  const result = await streamText({
    model: google('models/gemini-pro'),
    prompt: customPrompt,
  });

  return result;
}

// Node/Express-style handler for vite-plugin-vercel-api and Vercel Node functions
export default async function handler(req, res) {
  try {
    if (req.method === 'OPTIONS') {
      res.status(204).end();
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).send('Method Not Allowed');
      return;
    }

    const { prompt: personalityType } = req.body || {};
    if (!personalityType) {
      res.status(400).send('Error: prompt is missing in the request body.');
      return;
    }

    const result = await generateReport(personalityType);

    // Send non-streamed text for compatibility
    let fullText = '';
    for await (const delta of result.textStream) {
      fullText += delta;
    }
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(fullText);
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).send('An internal server error occurred.');
  }
}
