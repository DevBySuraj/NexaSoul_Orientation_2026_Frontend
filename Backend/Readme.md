# NexaSoul Orientation 2026 - Backend Service

This directory is designated for the backend service and server-side components of the NexaSoul Orientation platform.

## Overview

The NexaSoul ecosystem is designed to introduce students to professional full-stack development. This backend folder houses the core services, server configurations, and database integrations.

## Tech Stack & Architecture

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: Firebase Firestore / Cloud SQL (configurable based on environment setup)

## Setup & Running the Server

To initialize and run the backend environment:

1. Ensure dependencies are fully installed at the project root:
   ```bash
   npm install
   ```
2. Start the integrated dev server (Express + Vite) using:
   ```bash
   npm run dev
   ```

The application runs in a unified full-stack architecture where the Express server proxies front-end requests and hosts backend API endpoints under `/api/*`.
