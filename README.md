---
# Olumide Silas – Portfolio

A modern, interactive portfolio built with React, Vite, and Tailwind CSS.
Showcases a custom analog clock, animated custom cursor, noise background, skill icons, and more.
---

## ✨ Features

- **Custom Cursor:**  
  A dual-layer animated cursor (dot + ring) that responds to mouse movement and clicks, replacing the default cursor for a unique UX.

- **Analog Clock:**  
  A live SVG analog clock floats at the top-right of the Home page.

- **Noise & Image Background:**  
  Subtle grayscale background image (`public/light.webp`) with a noise overlay (`public/noise.png`) for a tactile, modern feel.

- **Gradient Text:**  
  Headline uses a transparent-to-black gradient for a stylish look.

- **Skill Icons:**  
  A responsive row of technology icons (Next.js, TypeScript, React, Vite, Tailwind, Figma, and more).

- **Social Media Links:**  
  Social icons fixed at the bottom center, linking to your profiles.

- **Responsive Layout:**  
  Max width 1340px, mobile-friendly, and clean design.

- **Pages:**
  - Home: Hero, skills, analog clock, social links
  - About: Bio and skill progress bars
  - Projects: Project cards with tech tags and links
  - Contact: Contact form and info

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your portfolio.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [@fontsource-variable](https://fontsource.org/)
- Custom SVG, PNG assets

---

## 🖱️ Custom Cursor

- Implemented in [`src/components/CustomCursor.jsx`](src/components/CustomCursor.jsx)
- Hides the default cursor (`cursor: none` in `index.css`)
- Follows mouse, animates on click

---

## 🕒 Analog Clock

- SVG-based, updates every second
- See [`src/pages/Home.jsx`](src/pages/Home.jsx)

---

## 🎨 Design

- **Fonts:**
  - Headings: Bricolage Grotesque Variable
  - Body: Inter Variable
- **Colors:**
  - Accent: `#19BBA3`
  - Neutral: Gray/Black/White
- **Background:**
  - `public/light.webp` (main image)
  - `public/noise.png` (overlay)

---

## 📁 Project Structure

```
src/
  components/
    CustomCursor.jsx
    Layout.jsx
  pages/
    Home.jsx
    About.jsx
    Projects.jsx
    Contact.jsx
  index.css
public/
  light.webp
  noise.png
  vite.svg
```

---

## 📝 Customization

- **Update your name, bio, and social links** in `src/pages/Home.jsx`.
- **Add or edit projects** in `src/pages/Projects.jsx`.
- **Change skills or icons** in `Home.jsx` and `About.jsx`.
- **Replace background images** in `public/`.

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🧑‍💻 Author

Olumide Silas  
[GitHub](https://github.com/oxbryte) | [LinkedIn](https://linkedin.com/in/olumide-silas) | [Twitter](https://twitter.com/olumidesilas)

---

Feel free to further personalize this README!  
Ready to update your `README.md` with this content?
