# Futuristic Epoch to UTC/Local Time Converter

This is a deployable React (TypeScript) app that converts epoch time to UTC and your browser's local time, with a futuristic design.

## Quick Deploy: Vite

### 1. Clone or Create the Project

```sh
npm create vite@latest epoch-converter -- --template react-ts
cd epoch-converter
```

### 2. Replace Files

- Overwrite `src/App.tsx` and `src/main.tsx` with the provided files.
- Overwrite `index.html` at the project root.

### 3. Install Dependencies

```sh
npm install
```

### 4. Run Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view your app.

---

## Build for Deployment

```sh
npm run build
```

Your deployable static files will be in the `dist` directory.

---

## Deploy to Static Hosting

### GitHub Pages

1. Install gh-pages:
   ```sh
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://<yourusername>.github.io/<yourrepo>"
   ```
3. Add scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```sh
   npm run deploy
   ```

### Vercel/Netlify

- Push to GitHub.
- Import in [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
- Choose root as the project directory, and build command: `npm run build`, output directory: `dist`.

---

## Customization

- You can change the design in `src/App.tsx` CSS styles.
- The app is fully static and does not require a backend.

---

## Troubleshooting

- If you see a blank page, check the browser console for errors.
- Make sure you replaced all files and installed dependencies.

---

Enjoy your futuristic epoch time converter 🚀