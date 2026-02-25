export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Fix help requires OPENAI_API_KEY to be set on the server.' });
  }

  try {
    const { code, language, errorOutput } = req.body || {};
    if (!code || typeof code !== 'string') {
      return res.status(400).json({ error: 'No code provided.' });
    }

    const userMessage = errorOutput
      ? `Language: ${language || 'unknown'}\n\nCode:\n\`\`\`\n${code}\n\`\`\`\n\nError output:\n\`\`\`\n${errorOutput}\n\`\`\`\n\nSuggest a fix.`
      : `Language: ${language || 'unknown'}\n\nCode:\n\`\`\`\n${code}\n\`\`\`\n\nReview this code and suggest any fixes for bugs or errors.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a code-fix assistant. You ONLY suggest fixes for bugs and errors in existing code. You never write new code from scratch. Give minimal, targeted changes. Explain what was wrong in 1–2 sentences. Stay concise.',
          },
          { role: 'user', content: userMessage },
        ],
        max_tokens: 500,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ error: data.error.message || 'OpenAI API error' });
    }

    const fix = data.choices?.[0]?.message?.content?.trim() || 'No suggestion returned.';
    return res.status(200).json({ fix });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Failed to get fix suggestion.' });
  }
}
