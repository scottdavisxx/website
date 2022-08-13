module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'prim': '#1F4899',
      'prim-light': '#415D95',
      'prim-lighter': '#7383A2',
      'prim-dark': '#0C3584',
      'prim-darker': '#062B74',
      'comp': '#E59F1A',
      'comp-light': '#DFAF53',
      'comp-lighter': '#F3D8A4',
      'comp-dark': '#C68100',
      'comp-darker': '#AE7200',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      hero: ['Audiowide', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl':'14rem'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
