export default defineNuxtConfig({
	css: ['~/assets/global.sass'],
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts', 'nuxt-icon', '@nuxtseo/module', '@nuxt/image'],
	app: {
		head: {
			templateParams: {
			  separator: '•',
			},
		  },
	},
	colorMode: {
		preference: 'dark',
		fallback: 'dark',
		classSuffix: '',
	},
	googleFonts: {
		families: {
			'Open+Sans': [500, 700],
			'Raleway': [500, 700],
			'Poppins': [500, 700],
		},
	},
	site: {
		url: 'https://karinebarbosa.com/',
		name: 'Karine Barbosa',
		description: 'Administração & Estética',
		defaultLocale: 'pt',
		twitter: '@netunando',
		identity: {
			type: 'Person',
		},
	},
	linkChecker: {
		enabled: false,
	},
	devtools: {
		enabled: true,
	},
})
