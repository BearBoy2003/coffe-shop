import headerLogo from '@/assets/logo/Logo.svg'
import footerLogo from '@/assets/logo/Logo_black.svg'

const state = () => ({
	commonLinks: [
		{ id: 1, text: 'Our coffee', link: '/our-coffee' },
		{ id: 2, text: 'For your pleasure', link: '/for-your-pleasure' },
		{ id: 3, text: 'Contact us', link: '/contact-us' }
	],
	headerLogoLink: {
		id: 0,
		link: '/',
		icon: headerLogo,
		alt: 'Main logo'
	},
	footerLogoLink: {
		id: 0,
		link: '/',
		icon: footerLogo,
		alt: 'Footer logo'
	}
})

const getters = {
	headerLinks: (state) => [state.headerLogoLink, ...state.commonLinks],
	footerLinks: (state) => [state.footerLogoLink, ...state.commonLinks]
}

export default {
	namespaced: true,
	state,
	getters
}
