import { serve } from 'bun';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

serve({
  port: 3000,
  fetch: (req) => {
    const html = renderToString(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  },
});