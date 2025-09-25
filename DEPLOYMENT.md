# Deployment Guide

This project uses GitHub Actions for CI/CD and deploys to Vercel automatically.

## Setup Instructions

### 1. Vercel Project Setup

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import your GitHub repository
3. Configure your project settings
4. Note down your Project ID and Organization ID

### 2. GitHub Secrets Configuration

Add the following secrets to your GitHub repository:

1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following repository secrets:

#### Required Secrets:

- **VERCEL_TOKEN**: Your Vercel API token
  - Go to Vercel Dashboard → Settings → Tokens
  - Create a new token with appropriate scope
  
- **VERCEL_ORG_ID**: Your Vercel organization ID
  - Found in your Vercel project settings
  - Or run `vercel org ls` in your terminal
  
- **VERCEL_PROJECT_ID**: Your Vercel project ID
  - Found in your Vercel project settings
  - Or run `vercel project ls` in your terminal

### 3. Workflow Triggers

The CI/CD pipeline will automatically run on:

- **Push to master branch**: Deploys to production
- **Push to develop branch**: Runs tests and builds
- **Pull requests to master**: Creates preview deployments

### 4. Pipeline Steps

1. **Build and Test** (runs on Node.js 18.x and 20.x):
   - Install dependencies
   - Run linter
   - Run type checking
   - Build the application
   - Run tests (if available)

2. **Deploy Preview** (for pull requests):
   - Creates a preview deployment on Vercel

3. **Deploy Production** (for master branch):
   - Deploys to production on Vercel

### 5. Getting Your Vercel IDs

If you need to find your Vercel Organization ID and Project ID:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# List organizations
vercel org ls

# List projects
vercel project ls

# Or check your project settings in Vercel dashboard
```

### 6. Manual Deployment

You can also deploy manually using:

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Troubleshooting

- Ensure all secrets are correctly set in GitHub
- Check that your Vercel token has the necessary permissions
- Verify your project is properly linked to the GitHub repository
- Check the Actions tab in GitHub for detailed error logs