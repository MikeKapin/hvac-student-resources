// Netlify serverless function for Gas Tech Tutor AI
// Uses Anthropic Claude API for conversational tutoring

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    console.log('Gas Tech Tutor function called');

    const { message, moduleId, conversationHistory } = JSON.parse(event.body);

    // Validate required fields
    if (!message) {
      console.error('Missing message in request');
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required field: message' })
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

    // Build the system prompt
    const systemPrompt = buildSystemPrompt(moduleId);

    // Build messages array with conversation history
    const messages = buildMessagesArray(message, conversationHistory);
    console.log('Built messages array with', messages.length, 'messages');

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
        model: 'claude-sonnet-4-5-20250929',
        max_tokens: 2048,
        system: systemPrompt,
        messages: messages
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
          error: 'AI tutor service error. Check function logs for details.'
        })
      };
    }

    const data = await response.json();
    console.log('Successfully received AI response');
    const tutorResponse = data.content[0].text;

    // Format response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        success: true,
        response: tutorResponse,
        responseType: moduleId ? 'module_specific' : 'general',
        moduleContext: moduleId ? getModuleContext(moduleId) : null
      })
    };

  } catch (error) {
    console.error('Gas Tech Tutor error:', error);
    console.error('Error stack:', error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Failed to process tutor request: ' + error.message
      })
    };
  }
};

function buildSystemPrompt(moduleId) {
  const basePrompt = `You are an expert Gas Technician AI Tutor specializing in TSSA G3 and G2 certification preparation. You help students understand Canadian gas codes (CSA B149.1 and B149.2), safety procedures, installation techniques, and exam preparation.

Your teaching style:
- Clear, concise explanations appropriate for students
- Use practical examples and real-world scenarios
- Reference specific CSA code sections when relevant
- Break down complex concepts into understandable parts
- Encourage safety-first thinking
- Provide exam tips and common pitfalls to avoid

You cover 9 main modules:
1. Safety (PPE & Safety Protocols)
2. Tools (Equipment & Testing)
3. Gas Properties (Handling & Properties)
4. Codes (Regulations & Acts)
5. Electricity (Basic Electrical)
6. Drawings (Technical Plans)
7. Relations (Customer Service)
8. Piping (Systems & Tubing)
9. Appliances (Gas Equipment)`;

  const modulePrompts = {
    1: '\n\nCurrent Focus: Module 1 - Safety. Emphasize PPE requirements, safety protocols, emergency procedures, and hazard identification.',
    2: '\n\nCurrent Focus: Module 2 - Tools. Cover gas testing equipment, pressure gauges, leak detectors, and proper tool usage.',
    3: '\n\nCurrent Focus: Module 3 - Gas Properties. Explain natural gas vs propane, pressure calculations, combustion characteristics, and safe handling.',
    4: '\n\nCurrent Focus: Module 4 - Codes. Focus on CSA B149.1 and B149.2 requirements, TSSA regulations, and code compliance.',
    5: '\n\nCurrent Focus: Module 5 - Electricity. Teach Ohm\'s law, electrical safety, circuit basics, and gas appliance electrical components.',
    6: '\n\nCurrent Focus: Module 6 - Drawings. Explain technical drawings, blueprints, symbols, and installation planning.',
    7: '\n\nCurrent Focus: Module 7 - Relations. Cover customer service, professional communication, and workplace relationships.',
    8: '\n\nCurrent Focus: Module 8 - Piping. Detail pipe sizing, materials, installation methods, pressure testing, and leak detection.',
    9: '\n\nCurrent Focus: Module 9 - Appliances. Discuss gas appliances, venting requirements, clearances, and installation procedures.'
  };

  return basePrompt + (moduleId ? (modulePrompts[moduleId] || '') : '');
}

function buildMessagesArray(currentMessage, conversationHistory) {
  const messages = [];

  // Add conversation history if provided (limit to last 10 messages for context)
  if (conversationHistory && Array.isArray(conversationHistory)) {
    const recentHistory = conversationHistory.slice(-10);
    recentHistory.forEach(msg => {
      if (msg.type === 'user') {
        messages.push({ role: 'user', content: msg.content });
      } else if (msg.type === 'bot') {
        messages.push({ role: 'assistant', content: msg.content });
      }
    });
  }

  // Add current user message
  messages.push({ role: 'user', content: currentMessage });

  return messages;
}

function getModuleContext(moduleId) {
  const moduleNames = {
    1: 'Safety',
    2: 'Tools',
    3: 'Gas Properties',
    4: 'Codes',
    5: 'Electricity',
    6: 'Drawings',
    7: 'Relations',
    8: 'Piping',
    9: 'Appliances'
  };

  return moduleNames[moduleId] || null;
}
