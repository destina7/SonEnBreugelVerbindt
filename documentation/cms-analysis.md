# CMS Analysis — SonEnBreugelVerbindt

## Project Context

**SonEnBreugelVerbindt** is a community information website for the municipality of Son en Breugel. It is built as a client-side React SPA. A custom backend is currently in development.

**Current tech stack:**
- React 18 + Vite 5
- React Router v6 (client-side routing)
- Tailwind CSS v3
- Custom backend in development (Node.js + database, self-hosted)

**Current pages:** Home, AutoMaatjes, FietsMaatjes

**CMS requirements:**
1. Non-technical admins can create and manage pages without developer involvement
2. Admins can create new URL routes (e.g. `/dorpsgids`, `/contact`) without touching code
3. Minimal changes to the existing React codebase
4. Budget: up to €20/month — free is preferred where the features are sufficient
5. Self-hosted solutions are acceptable since a backend is already being built

---

## Integration Approach

Because the app is a pure SPA with client-side routing, the integration pattern is the same across all headless CMS options:

1. A developer adds a **catch-all route** (`/:slug`) to `App.jsx` — a single line of code
2. A `DynamicPage` component fetches content from the CMS API based on the URL slug
3. The CMS renders the page with content or blocks authored by the admin

The existing routes (`/`, `/automaatjes`, `/fietsmaatjes`) are defined before the catch-all and are never affected. React Router v6 always matches the most specific route first.

---

## CMS Comparison

### 1. Sanity.io

| | |
|---|---|
| **Type** | Hosted headless CMS |
| **Admin UI** | Sanity Studio — structured document editor |
| **Backend required** | No — Sanity hosts everything |
| **Free tier** | 20 users, 10,000 documents, 5M CDN API requests/month |

**Strengths:**
- Generous free tier — 20 editor seats suits a community team
- Flexible content schema (defined as code, fully version-controlled)
- Extremely fast CDN delivery via GROQ queries
- Excellent React/Vite documentation and community
- Public datasets require no authentication — ideal for public community sites
- Studio can be hosted by Sanity for free (separate URL) or embedded in the app

**Weaknesses:**
- Admin UI is a structured form editor, not visual — admins fill in fields (title, body text, image), they do not drag and drop layout blocks
- Page layout is controlled by developers; admins control content only
- Schema changes require a developer
- GROQ query language has a learning curve for developers

**Best for:** Content-heavy pages where admins write text and upload images, and the page layout is consistent across all CMS-managed pages.

---

### 2. Storyblok

| | |
|---|---|
| **Type** | Hosted headless CMS with visual editor |
| **Admin UI** | Visual editor — overlays the live site, edit-in-place |
| **Backend required** | No — Storyblok hosts everything |
| **Free tier** | 1 user only (Community plan); $99/month for more users |

**Strengths:**
- Visual editor shows the real website in an iframe — admins click on sections and edit them directly, or add/reorder "Bloks" from a sidebar
- Component-based ("Bloks") — developers register reusable components once, admins compose pages from them
- Good React SDK (`@storyblok/react`)
- Real-time preview as admins edit
- Strong documentation for Vite/React

**Weaknesses:**
- **Free tier allows only 1 user** — a hard blocker if multiple admins need access
- Admins must understand the concept of nested Bloks (components), which has a small learning curve
- Component library must be built by a developer before admins can use them — not truly zero-setup on day one
- Layout flexibility depends entirely on which Bloks the developer has registered

**Best for:** Projects where one admin manages all content, or where the budget allows the $99/month Growth plan for multi-user access.

---

### 3. Builder.io

| | |
|---|---|
| **Type** | Hosted visual page builder + headless CMS |
| **Admin UI** | Drag-and-drop canvas editor — no technical knowledge needed |
| **Backend required** | No — Builder.io hosts everything |
| **Free tier** | 5 users, unlimited pages |

**Strengths:**
- Purest drag-and-drop experience — admins drag blocks onto a canvas and see the result instantly, like Squarespace or Wix but outputting to a React app
- Admins create pages at any URL with zero developer involvement after initial setup
- 5-user free tier is practical for a small community team
- React SDK is mature and well-documented
- Supports custom React components registered as "Builder components" — admins can use your Tailwind-styled components visually

**Weaknesses:**
- Requires a developer to register React components as Builder components before admins can use them — the initial setup investment is higher than a pure content CMS
- The editor is optimised for marketing/landing pages; for long-form text content it is less ergonomic than a traditional CMS editor
- AI features on the free tier are credit-limited (may cause confusion with future pricing changes)
- Fetches all page content from the API on every load — slightly more complex caching strategy than a document-based CMS

**Best for:** Projects where admins need full control over page layout and composition, not just text content — particularly landing pages, event pages, or any page with a unique visual structure.

---

### 4. Contentful

| | |
|---|---|
| **Type** | Hosted headless CMS |
| **Admin UI** | Structured content editor (similar to Sanity) |
| **Backend required** | No — Contentful hosts everything |
| **Free tier** | 5 users, 25,000 combined records (documents + assets), 2 locales |

**Strengths:**
- Industry-standard headless CMS — very mature, large ecosystem
- Excellent React SDK and documentation
- Rich text editor for long-form content
- Webhooks and integrations with many third-party tools

**Weaknesses:**
- Free tier combines documents and assets into one 25,000 record limit — easy to hit with images
- 5-user limit vs Sanity's 20 on the free tier
- Content modeling interface is less flexible than Sanity's code-defined schemas
- No visual/block editor — purely form-based like Sanity

**Best for:** Teams already familiar with Contentful or projects that need deep third-party integrations (e-commerce, marketing tools).

---

### 5. Decap CMS (formerly Netlify CMS)

| | |
|---|---|
| **Type** | Git-based open source CMS |
| **Admin UI** | Form-based editor, content stored as Markdown files in the repo |
| **Backend required** | No server, but requires Git hosting + OAuth provider |
| **Free tier** | Completely free and open source |

**Strengths:**
- Fully open source — no vendor lock-in, no recurring cost
- Content lives in the Git repository alongside the code — full version history, rollback, branching
- Works with any static host (Netlify, Vercel, GitHub Pages)

**Weaknesses:**
- Admins cannot create new page routes — route definitions must still be added by a developer
- Requires configuring OAuth (GitHub/GitLab/Netlify Identity) — non-trivial initial setup
- Each page type must be pre-defined in `config.yml` by a developer
- Vite plugin (`vite-plugin-decap-cms`) is pre-1.0 and less stable
- Does not satisfy the core requirement of admin-created new pages

**Best for:** Developer-managed blogs or documentation sites where content is updated but the page structure never changes.

---

### 6. Strapi

| | |
|---|---|
| **Type** | Self-hosted open source headless CMS |
| **Admin UI** | Full-featured admin panel with content type builder |
| **Backend required** | Yes — runs on your own server alongside your custom backend |
| **Cost** | Free (Community Edition, MIT licence) — no monthly fee |

**Strengths:**
- **Runs on your own backend** — since a custom backend is already being built, Strapi can be deployed on the same server at zero additional infrastructure cost
- Completely free Community Edition — no monthly subscription needed
- Full control over content types, roles, and permissions — tailor exactly what admins can and cannot do
- Mature REST + GraphQL API — straightforward to consume in the React frontend
- Large community, extensive plugin ecosystem, regular updates
- Built-in media library for image and file management
- Role-based access control — different permission levels for different admin users

**Weaknesses:**
- Admin UI is form-based, not a visual drag-and-drop editor — admins fill structured fields, they do not move blocks around visually
- No built-in page preview showing how the content will look on the live site
- Requires the development team to maintain the Strapi instance (updates, security patches) alongside the custom backend
- Content type changes require a developer and a server restart in production

**Best for:** Projects with a backend already in place that want full control, zero ongoing cost, and a clean separation between content management and frontend presentation.

---

### 7. Directus

| | |
|---|---|
| **Type** | Self-hosted open source data platform + CMS |
| **Admin UI** | Data studio with content management |
| **Backend required** | Yes — runs on your own server alongside your custom backend |
| **Cost** | Free to self-host (MIT licence) |

**Strengths:**
- **Wraps your existing database directly** — if your custom backend already has a database, Directus can sit on top of it and expose it as a CMS without duplicating data storage
- MIT licensed — completely free with no user or request limits
- Extremely flexible data modelling — no constraints on how you structure content
- REST + GraphQL API out of the box
- Can serve as both the CMS and a general-purpose API for the entire backend

**Weaknesses:**
- More of a data platform than a purpose-built CMS — the admin UI feels like a database tool, which can be confusing for non-technical content editors
- No visual editor or page preview — admins work in a raw data interface
- Steeper learning curve than Strapi, both for developers setting it up and admins using it day to day
- Community support is smaller than Strapi's

**Best for:** Projects where the CMS and the application database are the same data source, or where maximum flexibility in data modelling is needed.

---

## Summary Comparison Table

| CMS | Works With Own Backend | Admin Creates New Pages | Visual Block Editor | Multi-User | Monthly Cost |
|---|:---:|:---:|:---:|:---:|---|
| **Strapi** | ✅ (runs on it) | ✅ | ❌ | ✅ unlimited | €0 |
| **Directus** | ✅ (wraps your DB) | ✅ | ❌ | ✅ unlimited | €0 |
| **Sanity.io** | ✅ (API fetch) | ✅ | ❌ | ✅ (20 free) | €0 |
| **Builder.io** | ✅ (API fetch) | ✅ | ✅ | ✅ (5 free) | €0 |
| **Contentful** | ✅ (API fetch) | ✅ | ❌ | ⚠️ (5 free) | €0 |
| **Storyblok** | ✅ (API fetch) | ✅ | ✅ | ❌ (1 free / $99 for more) | $99+ |
| **Decap CMS** | ⚠️ (Git only) | ❌ | ❌ | ✅ | €0 |

> Storyblok is the only option that exceeds the €20/month budget — it is included for completeness but is not recommended given the constraint.

---

## Recommendations

### Primary recommendation — **Strapi** (self-hosted, free)

Since a custom backend is already being built, Strapi is the strongest overall choice. It runs on the same server as the backend at no extra cost, has no monthly fee, and gives the development team complete control over content types, user roles, and data structure. The admin UI is clean and accessible for non-technical editors.

The trade-off is that admins work in a structured form editor rather than a visual canvas — they fill in fields (title, body, image) and publish, rather than dragging blocks around. For a community information website where content is primarily text and images, this is entirely sufficient.

**When to choose Strapi:** Backend infrastructure is confirmed, the team is comfortable with Node.js, and the priority is zero ongoing cost with full control.

---

### If admins must have drag-and-drop visual editing → **Builder.io** (free tier)

Builder.io is the only option within budget that offers a true visual block editor — admins see a canvas, drag blocks, and publish without any technical knowledge. The free tier supports 5 users, which covers a small admin team.

The one-time developer cost is higher: React components must be registered as Builder "components" before admins can use them. After that setup, admins are entirely self-sufficient and can create pages with unique layouts without involving a developer.

**When to choose Builder.io:** Admin experience is the top priority, the team wants drag-and-drop composition, and the budget stays at €0.

---

### If the backend timeline is uncertain → **Sanity.io** (free, hosted)

If the custom backend takes longer than expected, Sanity provides an immediately deployable hosted solution with the most generous free tier (20 users). It can be integrated in a day and replaced or supplemented with Strapi later — the React integration patterns are nearly identical.

**When to choose Sanity:** You need a CMS now and the backend is not yet ready, or you want to avoid any self-hosting burden long-term.

---

### Not recommended given current constraints

- **Storyblok** — $99/month for multi-user access exceeds the €20 budget
- **Directus** — technically valid but the admin UI is not optimised for non-technical content editors
- **Decap CMS** — admins cannot create new page routes; ruled out by core requirements
- **Contentful** — same capability as Sanity with a less generous free tier; no advantage here

---

*Document prepared June 2026. CMS pricing and free tier limits are subject to change — verify current plans before committing.*
