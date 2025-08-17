import React from 'react';
import { useCompletion } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';

export default function AIReportPage() {
  const {
    completion,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useCompletion({
    api: '/api/generate',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>AI Personality Report Generator</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a personality type (e.g., INTP)"
          style={{ flexGrow: 1, padding: '0.5rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: isLoading ? '#ccc' : '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          {isLoading ? 'Generating...' : 'Generate Report'}
        </button>
      </form>
      
      <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
        Note: This feature requires a Google API key to be configured in the environment variables.
      </div>

      {error && (
        <div style={{ color: 'red', border: '1px solid red', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
          <p>An error occurred:</p>
          <pre>{error.message}</pre>
        </div>
      )}

      {completion && (
        <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1.5rem', whiteSpace: 'pre-wrap' }}>
          <ReactMarkdown>{completion}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
