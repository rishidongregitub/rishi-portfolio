import { DEFAULT_RUNTIME_WEBPACK } from 'next/dist/shared/lib/constants';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container : {
		center:true,
		padding: "15px",
	},
	screen : {
		sm:"648px",
		md:"768px",
		lg:"968px",
		xl:"1200px"
	},
	fontFamily:{
		primary : ['Roboto Mono', 'monospace'],
	},
  	extend: {
  		colors: {
  			primary: "#1c1c22",
  			accent: {
				DEFAULT : "#00ff99",
				hover : "#00e187"
			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
