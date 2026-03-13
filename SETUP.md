# Buckets — Dev Setup Guide

## Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- [Git](https://git-scm.com)
- [GitHub CLI](https://cli.github.com)

## 1. Clone the repo

```bash
git clone https://github.com/goodmorningnelson/Buckets.git
cd Buckets
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 4. Authenticate with GitHub (first time only)

```bash
brew install gh
gh auth login
```

Follow the prompts:
1. GitHub.com
2. HTTPS
3. Login with a web browser

## 5. Push changes

```bash
git add .
git commit -m "your message"
git push
```

## 6. Deploy

The repo is connected to Vercel — every push to `main` auto-deploys.

To set up Vercel on a new account:
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project** → select `Buckets`
3. Leave all settings as-is (Vite is auto-detected)
4. Click **Deploy**
