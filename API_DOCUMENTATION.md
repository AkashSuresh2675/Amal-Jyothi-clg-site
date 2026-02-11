# API Documentation

This file documents the public REST endpoints (summary).

- `GET /api/departments` - List departments
- `GET /api/faculty` - List faculty members
- `POST /api/contact` - Submit contact form (validate input)

Authentication
- Uses JWT in `Authorization: Bearer <token>` header for protected routes.

For full API reference, check server controllers in `server/controllers` and routes in `server/routes`.
