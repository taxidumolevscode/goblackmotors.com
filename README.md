# Go Black Motors

Site Next.js construit à partir de la template `lukasz-milwosz`, adapté pour la vente de motos cross électriques et accessoires.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Fichiers principaux

- `components/siteData.js` : marque, téléphone, email, navigation, textes et contenus.
- `pages/index.jsx` : page d'accueil.
- `components/sections/` : sections visuelles de la template.
- `public/goblackmotors-moto-cross.jpeg` : image principale du site.

## À personnaliser avant publication

Dans `components/siteData.js`, remplacer :

- `+33 0 00 00 00 00`
- `tel:+33000000000`
- `https://wa.me/33000000000`
- `contact@goblackmotors.com`

## Build production

```bash
npm run build
npm start
```
