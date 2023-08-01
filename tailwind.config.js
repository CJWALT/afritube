/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors:  {
            
          'videoListDetailColor': '#EEEFEF',
          'bgCount' :'#6AC4FF',
          'bgGrad' :'#DEDEDE',
          'linkGray': '#898989',
          'bgNot' : '#F0F9FF'

        },
        fontFamily:{ 
          manrobe: ['Manrobe', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          belanosima: ['Belanosima', 'sans-serif']
        }
    },
  },
  plugins: [],
}

