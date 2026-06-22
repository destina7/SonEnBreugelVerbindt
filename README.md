# Son en Breugel Verbindt

React + Tailwind implementatie van het digitale dorpsplein voor de gemeente Son en Breugel. Een community-platform dat inwoners verbindt met lokale diensten, groepen, nieuws en vrijwilligersinitiatieven.

## Starten

```bash
npm install
npm run dev      # start de dev-server (Vite) op http://localhost:5173
npm run build    # productie-build naar /dist
npm run preview  # serveer de productie-build lokaal
```

## Tech stack

- **React 18** + **Vite 5** (`@vitejs/plugin-react`)
- **React Router v6** (client-side routing, `BrowserRouter` in `main.jsx`)
- **Tailwind CSS v3** (+ PostCSS, Autoprefixer)
- **lucide-react** voor iconen
- **Plus Jakarta Sans** (Google Fonts, geladen in `index.html`)

Taal: Nederlands (`<html lang="nl">`), formele aanspreekvorm ("u/uw").

## Structuur

```
src/
  components/
    Navbar.jsx                # Sticky header met nav links, zoekbalk, Profiel + Vrijwilliger CTA
    Footer.jsx                # Blauwe footer met gele accentrand en link kolommen
    HowItWorks.jsx            # Herbruikbare 3-stappen sectie (props: title, subtitle, steps)
    OrganisatieCard.jsx       # Kaart in de Dorpsgids (icoon, badge, adres, contact, knoppen)
    OrganisatieModal.jsx      # Formulier-modal om een organisatie toe te voegen
    OrganisatieDetailModal.jsx# Detailoverlay van een organisatie
    SuccesPopup.jsx           # Bevestigingspopup na verzenden
    GroepCard.jsx             # Kaart op de Groepen-pagina (foto/gradient, badge, actieknoppen)
  pages/
    Home.jsx                  # Hero met foto, zoekbalk, stats, Snelle Toegang kaarten, Hulp Nodig banner
    Nieuws.jsx                # Nieuws en TV: uitgelicht artikel, TV-archief, alle nieuws, sidebar
    AutoMaatjes.jsx           # Vrijwillige autodienst: hero + HowItWorks
    RitAanvragen.jsx          # Rit-aanvraagformulier (gekoppeld aan de AutoMaatjes-knop)
    FietsMaatjes.jsx          # Duofiets-dienst: hero + HowItWorks
    Dorpsgids.jsx             # Filterbare kaartenlijst van lokale organisaties
    Groepen.jsx               # Lokale groepen: filters, sorteren, paginering, nieuwsbrief
  services/
    organisaties.js           # Statische data + categorie-metadata voor de Dorpsgids
    groepen.js                # Statische data + categorie-/sorteer-metadata voor Groepen
    nieuws.js                 # Statische data voor de Nieuws-pagina
  hooks/
    useFilters.js             # Filterstate voor de Dorpsgids
    useOrganisatieModal.js    # Modal-/popupstate voor de Dorpsgids
  assets/                     # Foto's en logo
  App.jsx                     # Layout (Navbar + Footer) en routedefinities
  main.jsx                    # Entry point, BrowserRouter
  index.css                   # Tailwind-lagen + globale basisstijlen
```

> **Architectuur:** data staat in `services/` (statisch, nog geen backend), presentatie in `components/` en `pages/`, herbruikbare logica in `hooks/`. Formulieren gebruiken `onSubmit` met `preventDefault` en bevatten een `// TODO: wire to backend`.

## Brand tokens (`tailwind.config.js`)

Kleuren (uitbreiding van Tailwind):

- `sky` #2EA7DF (primair, knoppen/links/footer) — varianten `sky.light` #BFE3F5, `sky.soft` #EAF6FC
- `navy` #16235A (koppen, donkere knoppen) — variant `navy.soft` #2A3A8C
- `sun` #F6B91E (geel accent / secundaire CTA) — variant `sun.soft` #FDF3D7
- `cloud` #F3F5F9 (lichte sectie-achtergrond), `line` #E5E9F0 (randen), `ink` #44506B (bodytekst)

Overige tokens:

- Font: `font-sans` → Plus Jakarta Sans
- Schaduwen: `shadow-card` (zachte kaartelevatie), `shadow-cta` (blauwe gloed onder CTA's)
- Radius: `rounded-2.5xl` (1.25rem) voor grote panelen

## Routes

Gebouwd:

| Route | Pagina |
|---|---|
| `/` | Home |
| `/nieuws` | Nieuws en TV |
| `/automaatjes` | AutoMaatjes |
| `/automaatjes/rit-aanvragen` | Rit Aanvragen (formulier) |
| `/fietsmaatjes` | FietsMaatjes |
| `/dorpsgids` | Dorpsgids |
| `/groepen` | Groepen |

Nog te bouwen (nav-/footerlinks verwijzen er alvast naar): `/activiteiten`, `/contact`, `/profiel`, `/vrijwilligers`, en `/fietsmaatjes/rit-aanvragen` (de FietsMaatjes-knop verwijst naar een route die nog niet bestaat).

