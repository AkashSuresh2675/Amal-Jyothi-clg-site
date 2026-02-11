# Testing Guide

This document describes basic testing steps.

Frontend
- Run `cd client && npm run dev` and test UI in Chrome/Firefox/Edge/Safari.
- Use responsive devtools for mobile/tablet sizes.

Backend
- Run `cd server && npm run dev` and test API endpoints with Postman or curl.
- Check rate limiting, input validation, and error responses.

Accessibility
- Use Lighthouse, axe, or NVDA/VoiceOver to validate ARIA, keyboard navigation and color contrast.
