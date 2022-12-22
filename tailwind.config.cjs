const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		minHeight: {
			'50': '50vh',
			'80': '80vh',
		  },
		extend: {
			colors: {
				primary: colors.pink,
				secondary: colors.blue,
				'sanctuaries': {
					lighter: '#dde0dd',
					light: '#bec3bc',
					medium: '#9ea69d',
					dark: '#818a7f',
					DEFAULT: '#374236',
				  },
	
			},
			fontFamily: {
				sans: ["'Roboto'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	plugins: [require("daisyui")],
	darkMode: 'class',
	 // daisyUI config (optional)
	 daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
	  },
	  daisyui: {
		themes: [
		  {
			mytheme: {
			
   "primary": "#ffc8c8",
			
   "secondary": "#374236",
			
   "accent": "#37CDBE",
			
   "neutral": "#bec3bc",
			
   "base-100": "#dde0dd",
			
   "info": "#00B4EC",
			
   "success": "#2fac66",
			
   "warning": "#fcea10",
			
   "error": "#ea592b",
			},
		  },
		],
	  },  

	
};

/* 

  Alternative tailwind.config.js
  
  NOTE: Add this fonts to <head>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
*/

// module.exports = {
//   content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.cyan,
//         secondary: colors.lime,
//       },
//       fontFamily: {
//         sans: ["'Nunito'", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/typography")],
//   darkMode: "class",
// };
