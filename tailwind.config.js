/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0a0a0a',    
        'dark-secondary': '#1a1228',
        'gold-kusam': '#a88f58',     
        'gold-hover': '#c0a66f',        
        'abu-gelap': '#1e1e1e',         
        'teks-utama': '#f0e8d9',    
        'teks-sekunder': '#a09383',
      },
      fontFamily: {
        // Font bersih dan modern untuk body/UI
        sans: ['Inter', 'sans-serif'],
        // Font elegan dengan nuansa klasik untuk judul
        serif: ['Merriweather', 'serif'],
      },
      // Efek kabut menggunakan gradient
      backgroundImage: {
        'fog-gradient': 'radial-gradient(ellipse at bottom, rgba(76, 29, 149, 0.3) 0%, transparent 60%)',
      },
      // Efek blur untuk backdrop
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}