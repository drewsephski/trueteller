import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

export default async function POST(req) {
  console.log('API route hit. Request body:', req.body);
  console.log('API key present:', !!process.env.GOOGLE_API_KEY);

  try {
    const { prompt: personalityType } = req.body;

    if (!personalityType) {
      return new Response('Error: prompt is missing in the request body.', { status: 400 });
    }

    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_API_KEY,
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

    console.log('Successfully streamed response from AI.');
    return new StreamingTextResponse(result.toReadableStream());

  } catch (error) {
    console.error('Error in API route:', error);
    return new Response('An internal server error occurred.', { status: 500 });
  }
}
