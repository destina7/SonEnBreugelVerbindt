# Son en Breugel Verbindt

React + Tailwind implementatie van de eerste drie pagina's: Home, AutoMaatjes en FietsMaatjes.

## Starten

```bash
npm install
npm run dev
```

## Structuur

```
src/
  components/
    Navbar.jsx       # Sticky header met nav links, zoekbalk, Profiel + Vrijwilliger CTA
    Footer.jsx       # Blauwe footer met gele accentrand en link kolommen
    HowItWorks.jsx   # Herbruikbare 3-stappen sectie (props: title, subtitle, steps)
  pages/
    Home.jsx         # Hero met foto, zoekbalk, stats, Snelle Toegang kaarten, Hulp Nodig banner
    AutoMaatjes.jsx
    FietsMaatjes.jsx
  assets/            # Foto's en logo
```

## Brand tokens (tailwind.config.js)

- `sky` #2EA7DF, `navy` #16235A, `sun` #F6B91E, `cloud` #F3F5F9, `line` #E5E9F0, `ink` #44506B
- Font: Plus Jakarta Sans (Google Fonts, geladen in index.html)

## Routes

`/`, `/automaatjes`, `/fietsmaatjes` zijn gebouwd. Overige nav links (Nieuws, Dorpsgids, Groepen, Activiteiten) verwijzen alvast naar routes die nog gemaakt moeten worden.
