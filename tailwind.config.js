/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Son en Breugel Verbindt brand colors
        sky: {
          DEFAULT: '#2EA7DF', // primary bright blue (buttons, footer)
          light: '#BFE3F5',   // icon tile backgrounds
          soft: '#EAF6FC',
        },
        navy: {
          DEFAULT: '#16235A', // dark navy (headings, dark buttons)
          soft: '#2A3A8C',
        },
        sun: {
          DEFAULT: '#F6B91E', // brand yellow
          soft: '#FDF3D7',
        },
        cloud: '#F3F5F9',     // light section background
        line: '#E5E9F0',      // card borders
        ink: '#44506B',       // body text
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(22, 35, 90, 0.06), 0 8px 24px rgba(22, 35, 90, 0.06)',
        cta: '0 12px 32px rgba(46, 167, 223, 0.35)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
