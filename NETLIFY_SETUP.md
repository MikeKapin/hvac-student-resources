# Netlify Setup Instructions

## AI Interpretation Feature Configuration

The CSA Code Search tool includes an AI interpretation feature powered by Anthropic's Claude API. To enable this feature, you need to configure your Anthropic API key in Netlify.

### Step 1: Get Your Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com/)
2. Sign in or create an account
3. Navigate to API Keys
4. Create a new API key or copy an existing one

### Step 2: Add API Key to Netlify

1. Log in to your Netlify dashboard
2. Select your `hvac-student-resources` site
3. Go to **Site settings** > **Environment variables**
4. Click **Add a variable**
5. Add the following:
   - **Key**: `ANTHROPIC_API_KEY`
   - **Value**: Your Anthropic API key (starts with `sk-ant-`)
   - **Scopes**: Select all scopes (Builds, Functions, Post-processing)
6. Click **Save**

### Step 3: Redeploy Your Site

After adding the environment variable:
1. Go to **Deploys** tab in Netlify
2. Click **Trigger deploy** > **Deploy site**
3. Wait for the deployment to complete

### Step 4: Test the AI Feature

1. Visit your site: https://hvac-student-resources.netlify.app/csa-code-search/
2. Search for any CSA code section
3. Click the "AI Explain" button (💡 icon)
4. You should see an AI-generated explanation

### Cost Estimates

The AI interpretation feature uses Claude 3.5 Sonnet with approximately 1,000-2,000 tokens per request:
- **Cost per interpretation**: ~$0.01-0.03 USD
- **Monthly estimate**: Depends on usage (10 interpretations = ~$0.10-0.30)

### Troubleshooting

**"AI service not configured" error:**
- Verify the environment variable name is exactly `ANTHROPIC_API_KEY`
- Ensure the API key is valid and starts with `sk-ant-`
- Redeploy the site after adding the variable

**404 error on /api/ai-interpreter:**
- Ensure the netlify/functions directory is committed to GitHub
- Check Netlify build logs for function deployment status
- Verify netlify.toml includes the functions configuration

**Slow responses:**
- First request may take 3-5 seconds (cold start)
- Subsequent requests are faster (~1-2 seconds)
- Responses are cached for 30 minutes

### Disabling the AI Feature

If you want to disable the AI interpretation feature:
1. Remove the `ANTHROPIC_API_KEY` environment variable from Netlify
2. The feature will show an error message instead of interpretations

### Security Notes

- Never commit your API key to GitHub
- Environment variables in Netlify are secure and encrypted
- The serverless function runs server-side, so your API key is never exposed to users
- Consider setting up usage limits in the Anthropic console to prevent unexpected charges
