import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ['class', "class"], 
	theme: {
    	extend: {
    		colors: {
    			text: 'var(--text-color)',
    			background: 'var(--background-color)',
    			primary: {
    				'100': 'var(--primary-100)',
    				'200': 'var(--primary-200)',
    				'300': 'var(--primary-300)',
    				'400': 'var(--primary-400)',
    				'500': 'var(--primary-500)',
    				'600': 'var(--primary-600)',
    				'700': 'var(--primary-700)',
    				'800': 'var(--primary-800)',
    				'900': 'var(--primary-900)',
    				DEFAULT: 'var(--primary-color)',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'var(--secondary-color)',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			accent: {
    				DEFAULT: 'var(--accent-color)',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		fontFamily: {
    			sans: ['Inter', 'sans-serif']
    		},
    		fontSize: {
    			'4xl': ['2.25rem', '2.5rem'],
    			'3xl': ['1.875rem', '2.25rem'],
    			'2xl': ['1.5rem', '2rem'],
    			xl: ['1.25rem', '1.75rem'],
    			lg: ['1.125rem', '1.5rem'],
    			base: ['1rem', '1.5rem'],
    			sm: ['0.875rem', '1.25rem'],
    			xs: ['0.75rem', '1rem']
    		},
    		screens: {
    			xs: '480px',
    			sm: '640px',
    			md: '768px',
    			lg: '1024px',
    			xl: '1280px',
    			'2xl': '1536px',
    			'3xl': '1836px'
    		},
    		boxShadow: {
    			DEFAULT: '0 2px 10px rgba(0, 0, 0, 0.1)',
    			lg: '0 4px 20px rgba(0, 0, 0, 0.1)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
