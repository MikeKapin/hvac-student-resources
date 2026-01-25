// Netlify serverless function for AI code interpretation
// Uses Anthropic Claude API to explain CSA code sections

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Log request for debugging
    console.log('AI interpreter function called');

    const { codeText, question, mode, context: codeContext } = JSON.parse(event.body);

    // Validate required fields
    if (!codeText) {
      console.error('Missing codeText in request');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required field: codeText' })
      };
    }

    // Get API key from environment variable
    const apiKey = process.env.ANTHROPIC_API_KEY;
    console.log('API key present:', apiKey ? 'YES' : 'NO');

    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY environment variable not set');
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: 'AI service not configured. Please add ANTHROPIC_API_KEY to Netlify environment variables and redeploy.'
        })
      };
    }

    // Build the prompt based on mode
    const prompt = buildPrompt(codeText, mode, question, codeContext);
    console.log('Prompt built, mode:', mode);

    // Call Anthropic API
    console.log('Calling Anthropic API...');
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    });

    console.log('Anthropic API response status:', response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error response:', errorData);
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: 'AI interpretation service error. Check function logs for details.'
        })
      };
    }

    const data = await response.json();
    console.log('Successfully received AI response');
    const explanation = data.content[0].text;

    // Format response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        interpretation: {
          mode: mode || 'explain',
          explanation: explanation,
          codeSection: codeText,
          confidence: 0.95
        }
      })
    };

  } catch (error) {
    console.error('AI interpreter error:', error);
    console.error('Error stack:', error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Failed to process interpretation request: ' + error.message
      })
    };
  }
};

function buildPrompt(codeText, mode, question, codeContext) {
  const baseContext = `You are an expert in Canadian gas codes (CSA B149.1 and B149.2). Provide clear, practical explanations for HVAC technicians studying for TSSA certification.

Code Section:
${codeText}

${codeContext ? `Additional Context: ${codeContext}` : ''}`;

  const modePrompts = {
    explain: `${baseContext}

Please provide a clear, concise explanation of this code section. Focus on:
- What the code requires
- Why this requirement exists
- Key measurements or specifications to remember

Keep it practical and exam-focused. Use 2-3 paragraphs maximum.`,

    practical: `${baseContext}

Please provide practical field implementation guidance. Focus on:
- Step-by-step installation considerations
- Common mistakes to avoid
- Real-world application tips
- What inspectors typically look for

Keep it actionable and field-focused. Use 2-3 paragraphs maximum.`,

    safety: `${baseContext}

Please analyze the safety aspects of this code section. Focus on:
- Safety hazards this requirement prevents
- Critical safety considerations
- Consequences of non-compliance
- Safety best practices

Keep it safety-focused and clear. Use 2-3 paragraphs maximum.`,

    compare: `${baseContext}

Please compare this code section with related requirements. Focus on:
- How it relates to other code sections
- Key differences to remember
- When each requirement applies
- Common points of confusion

Keep it comparative and exam-focused. Use 2-3 paragraphs maximum.`
  };

  let prompt = modePrompts[mode] || modePrompts.explain;

  // Add user question if provided
  if (question) {
    prompt += `\n\nSpecific Question: ${question}`;
  }

  return prompt;
}
