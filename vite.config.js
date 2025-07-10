import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// ✅ FIX: DaisyUI config must go here 👇
const tailwindOptions = {
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
      "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
      "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
      "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
      "nord", "sunset", "caramelatte", "abyss", "silk"
    ],
  }
};

export default defineConfig({
  plugins: [react(), tailwindcss(tailwindOptions)],
});
