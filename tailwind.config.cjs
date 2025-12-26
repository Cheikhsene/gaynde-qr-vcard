/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			// Palette de couleurs Senegalaise - inspiree du drapeau et de la culture
			colors: {
				// Vert Senegal - couleur principale (vert du drapeau)
				senegal: {
					50: '#ECFDF5',
					100: '#D1FAE5',
					200: '#A7F3D0',
					300: '#6EE7B7',
					400: '#34D399',
					500: '#00853F', // Vert officiel du drapeau
					600: '#047857',
					700: '#065F46',
					800: '#064E3B',
					900: '#022C22',
					950: '#011714',
				},
				// Or/Jaune - etoile du drapeau et richesse africaine
				gold: {
					50: '#FFFEF7',
					100: '#FEFCE8',
					200: '#FEF9C3',
					300: '#FEF08A',
					400: '#FBBF24',
					500: '#FDEF42', // Jaune du drapeau
					600: '#EAB308',
					700: '#CA8A04',
					800: '#A16207',
					900: '#854D0E',
					950: '#713F12',
				},
				// Rouge Senegal - passion et energie
				teranga: {
					50: '#FEF2F2',
					100: '#FEE2E2',
					200: '#FECACA',
					300: '#FCA5A5',
					400: '#F87171',
					500: '#E31B23', // Rouge du drapeau
					600: '#DC2626',
					700: '#B91C1C',
					800: '#991B1B',
					900: '#7F1D1D',
					950: '#450A0A',
				},
				// Tons de terre - inspiration africaine
				earth: {
					50: '#FDF8F6',
					100: '#F7E8E2',
					200: '#EDD4C9',
					300: '#DEB8A5',
					400: '#CB957C',
					500: '#B8755A',
					600: '#A5634B',
					700: '#8A513F',
					800: '#724538',
					900: '#5F3C31',
					950: '#321E18',
				},
				// Surface sombre chaude
				baobab: {
					50: '#F9F7F4',
					100: '#F1EDE6',
					200: '#E3DDD0',
					300: '#D0C4AF',
					400: '#B9A48A',
					500: '#A38A6E',
					600: '#8C7259',
					700: '#735D49',
					800: '#604E3E',
					900: '#2D251E', // Fond principal
					950: '#1A1613',
				}
			},
			// Typographie africaine moderne
			fontFamily: {
				'display': ['Clash Display', 'system-ui', 'sans-serif'],
				'body': ['Satoshi', 'system-ui', 'sans-serif'],
			},
			// Animations
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out forwards',
				'slide-up': 'slideUp 0.5s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'shimmer': 'shimmer 2s linear infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			},
			// Ombres personnalisees
			boxShadow: {
				'glow-green': '0 0 30px rgba(0, 133, 63, 0.3)',
				'glow-gold': '0 0 30px rgba(253, 239, 66, 0.25)',
				'inner-warm': 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
			},
			// Border radius africain (plus doux)
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
			// Background patterns africains
			backgroundImage: {
				'african-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FDEF42' fill-opacity='0.03'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0zm0 10L10 30l20 20l20-20L30 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				'kente-pattern': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300853F' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
};

module.exports = config;
