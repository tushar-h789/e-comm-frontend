# Aurel — E-commerce Product Catalog

A simple Next.js storefront that lists products from a public REST API and shows each item on its own details page.

## Project Overview

Aurel is a small, production-quality product catalog built for an internship assignment. It focuses on clean Next.js fundamentals: App Router pages, TypeScript, API integration, responsive UI, and thoughtful loading and error states.

## Features

- Product listing from a live REST API
- Client-side product search by name
- Product details page for each item
- Dynamic product attributes with inconsistent API data
- Responsive layout for mobile, tablet, and desktop
- Skeleton loading states
- Graceful error, empty, and not-found states

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React

## API

Product data comes from [Restful API](https://restful-api.dev/).

- Product list: `GET https://api.restful-api.dev/objects`
- Product details: `GET https://api.restful-api.dev/objects/{id}`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

No environment variables are required.

## Project Structure

```text
app/                 Routes, layout, loading, and error pages
components/layout/   Header, footer, and hero
components/products/ Product cards, search, grid, and details
components/ui/       Small shared UI pieces
lib/api.ts           API helpers
types/product.ts     Product types
utils/               Price, label, and product helpers
```

## Live Demo

Add the deployed URL here after publishing.

## Repository

Add the GitHub repository URL here after publishing.
