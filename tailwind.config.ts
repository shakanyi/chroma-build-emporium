p
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'accent-glow': 'var(--shadow-accent-glow)',
				'card': 'var(--shadow-card)',
				'hover': 'var(--shadow-hover)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'rgb-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(271 91% 65% / 0.5)'
					},
					'33%': { 
						boxShadow: '0 0 20px hsl(200 50% 45% / 0.5)'
					},
					'66%': { 
						boxShadow: '0 0 20px hsl(120 100% 50% / 0.5)'
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 30px hsl(var(--primary) / 0.3)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'rgb-pulse': 'rgb-pulse 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'slide-up': 'slide-up 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
