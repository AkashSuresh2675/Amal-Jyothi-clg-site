# Deployment Guide

This document gives concise steps to deploy frontend and backend.

Frontend (Vite)
- Build: `cd client && npm run build`
- Serve static build on Netlify/Vercel or host on S3 + CloudFront.

Backend (Express)
- Ensure `NODE_ENV=production` and environment variables set.
- Install deps: `npm install`
- Start: `npm start` or use a process manager like PM2.

Recommended: Use Vercel/Netlify for frontend and Render/Railway for backend. Configure environment variables and CORS to allow frontend origin.
