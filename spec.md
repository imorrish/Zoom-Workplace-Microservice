Software Requirements Document (SRD)
Project: Zoom Stream Deck ➜ Node.js Web Service
Owner: Ian Morrish (Infrastructure & Cloud Practice Lead)
Date: 2026-02-06
Version: 1.0
1. Purpose & Goals
Convert the Stream Deck Zoom plugin logic (typically in src/index.ts|.js) into a standalone Node.js web service using Express.js. The service will accept HTTP requests (e.g., POST /api/audio/mute) and map them to Zoom actions (mute/unmute, camera toggle, etc.).
Key goals

Decouple from Elgato Stream Deck software; run as a local microservice.
Clean abstraction over how Zoom is controlled:

Zoom Meeting/App SDK (preferred for local A/V control when feasible).
Local plugin bridge / IPC (if the plugin exposes a local API).
REST OAuth (meeting management, not local mic/cam control).


Security by default (API key/JWT, rate limiting, input validation, CORS, Helmet).
Clear observability (structured logs, health/readiness checks, optional metrics).


Important feasibility note: Zoom’s REST API cannot control a user’s local client mic/camera. Local A/V controls typically require Meeting/App SDK (or OS-level automation) on the same machine as the Zoom client. Design the service with adapters and a capability matrix to make this explicit.


2. Scope
In Scope

Node.js 20 LTS + TypeScript.
Express.js REST API for Zoom actions.
Adapters:

AppSdkAdapter: Zoom Meeting/App SDK.
PluginIpcAdapter: communicate with an existing local plugin/bridge API if available.
RestApiAdapter: Zoom REST/OAuth for meeting mgmt (no local A/V control).


Authentication: API key or JWT for local API; OAuth for Zoom when required.
Configuration via environment variables; secrets via .env.
Logging (JSON), health checks, optional Prometheus metrics, OpenAPI docs.
Unit + integration tests; Dockerfile for packaging; nodemon dev run.

3. Architecture & Design
3.1 Components

API Layer (Express)
Routes, middleware, validation, error handling, OpenAPI.
Core Controller
ZoomController exposes high-level actions (mute, toggle video, leave meeting). Delegates to a selected adapter.
Adapters (Ports/Adapters pattern)

AppSdkAdapter: Integrates Zoom Meeting/App SDK.
PluginIpcAdapter: HTTP/WebSocket to an existing local plugin/bridge.
RestApiAdapter: Zoom REST API + OAuth token handling.


Infra
Config loader, logger (Winston/Pino), metrics, token store, security middleware.

3.2 Data Flow

HTTP request → API auth/validation → ZoomController.
Controller → selected adapter based on ADAPTER env var.
Adapter executes the action and returns standardized result/status.
API responds with consistent JSON.

If unsupported in the chosen adapter, return 400 with "code":"UNSUPPORTED_ACTION".


4. Functional Requirements
4.1 Endpoints

Health:

GET /healthz — liveness.
GET /readyz — readiness (adapter initialized, tokens present if needed).


Status:

GET /api/status — returns { audioMuted, videoOn, inMeeting, role, adapter } (best-effort).


Audio:

POST /api/audio/mute
POST /api/audio/unmute
POST /api/audio/toggle


Video:

POST /api/video/on
POST /api/video/off
POST /api/video/toggle


Meeting:

POST /api/meeting/leave
POST /api/recording/start (host-required)
POST /api/recording/stop


OAuth (if applicable to chosen adapter):

GET /auth/login (PKCE/start)
GET /auth/callback
POST /auth/logout (revoke/clear)