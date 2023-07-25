/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{ 
        menuBg: '#8082C5',
        borderColor: '#E3E3E3',
        navColor:'#D5D5D5',
        iconBg:'#FCFCFC',
        navButton:'#FAFAFA',
        navButtonIcon: '#B2B2B2',
        watchBtnTypesBg: '#FCFCFC',
        videoListTextColor:'#4C4A55',
        videoListDetailColor:'#ECECEC',
        bgFavBtn:'#B1B1B1'
      }
    },
  },
  plugins: [],
}

