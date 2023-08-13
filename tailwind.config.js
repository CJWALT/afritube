/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lt: '350px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        "max-w-xl": "1080px",
      },

      colors: {
        primary: '#6AC4FF',
        secBlue: '#F0F9FF',
          
        'videoListDetailColor': '#EEEFEF',
        'bgCount' :'#6AC4FF',
        'bgGrad' :'#DEDEDE',
        'linkGray': '#898989',
        'bgNot' : '#F0F9FF'
    },
    },
  },
  plugins: [],
}