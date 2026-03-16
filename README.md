# Change Spot

A crowdsourced web application that helps parents and caregivers quickly find **bathrooms with baby changing tables nearby**.

The app displays nearby locations on a map and allows users to contribute new locations, confirm existing ones, or report outdated information. The goal is to make it easier for families to navigate public spaces with infants by sharing reliable, community-driven information.

This project is being built as a modern full-stack web application using **React, TypeScript, Node.js serverless APIs, and PostgreSQL with geospatial queries**.

---

# Why This Project Exists

Parents with infants often struggle to find bathrooms that include **baby changing tables** when out in public. While some places have them, they are rarely documented or easy to discover quickly.

This project aims to solve that problem by providing:

* A **map-based interface** showing nearby changing tables
* A **crowdsourced database** of locations
* A simple way for users to **add and verify locations**

Long-term, the goal is to create a reliable community-maintained map of changing table locations.

---

# Features (Planned)

## MVP Features

* View nearby locations with changing tables
* Map-based UI with markers
* Add new locations
* View location details
* Confirm or dispute the existence of a changing table

## Future Features

* Photo uploads
* Cleanliness ratings
* Family restroom indicators
* Accessibility indicators
* OpenStreetMap data integration
* Progressive Web App (installable mobile experience)
* Directions integration

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* TanStack Query
* MapLibre GL JS
* Axios

## Backend

* Node.js serverless functions
* Vercel API routes
* PostgreSQL

## Database

* PostgreSQL
* PostGIS (geospatial queries)

## Infrastructure

* Vercel (frontend + API hosting)
* Supabase or Neon (Postgres database)

---

# Project Structure

```
changing-table-map
│
├── api/                # Serverless API routes (Vercel)
│   ├── lib/
│   │   └── db.ts
│   └── locations.ts
│
├── web/                # React + TypeScript frontend
│   ├── src/
│   │   ├── components
│   │   ├── hooks
│   │   ├── services
│   │   ├── types
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── db/
│   └── schema.sql      # Database schema
│
├── package.json
└── README.md
```

---

# Getting Started

## Prerequisites

* Node.js 18+
* npm
* PostgreSQL database (Supabase recommended)

---

# 1. Clone the Repository

```
git clone https://github.com/yourusername/changing-table-map.git
cd changing-table-map
```

---

# 2. Install Dependencies

Install frontend dependencies:

```
cd web
npm install
```

Install backend dependencies from the root:

```
cd ..
npm install pg
```

---

# 3. Configure Environment Variables

Create a `.env.local` file in the project root.

```
DATABASE_URL=postgresql://username:password@host:port/database
```

This is the connection string used by the API to connect to PostgreSQL.

---

# 4. Setup the Database

Create a PostgreSQL database and run the schema located in:

```
db/schema.sql
```

Example tables include:

* `locations`
* `votes`

These tables store location data and user verification votes.

---

# 5. Run the Frontend Locally

```
cd web
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

# 6. API Routes

Serverless API routes live in the `/api` directory.

Example endpoint:

```
GET /api/locations
```

Example response:

```json
[
  {
    "id": "123",
    "name": "Starbucks",
    "latitude": 43.15,
    "longitude": -77.61,
    "hasChangingTable": true
  }
]
```

These endpoints will eventually support:

```
GET /api/locations
POST /api/locations
POST /api/votes
```

---

# Database Schema

## Locations

Stores places that may contain changing tables.

```
id
name
address
latitude
longitude
has_changing_table
notes
created_at
```

## Votes

Allows users to confirm or dispute location data.

```
id
location_id
vote_type (confirm | deny)
created_at
```

---

# Deployment

The application is designed to be deployed easily using **Vercel**.

## Deploy Steps

1. Push the repository to GitHub
2. Import the project into Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy

Vercel automatically handles:

* Frontend build
* Serverless API functions
* Routing

---

# Long Term Vision

The long-term goal of this project is to build a **reliable, crowdsourced database of baby changing table locations** that parents can rely on when navigating public spaces.

Potential future improvements include:

* Integration with OpenStreetMap data
* Community moderation
* Photo verification
* Mobile-first experience
* Native mobile apps

---

# Contributing

Contributions, ideas, and feedback are welcome.

Possible ways to contribute:

* Improving the UI
* Adding new features
* Enhancing geospatial queries
* Improving map performance
* Improving accessibility

---

# License

MIT License

