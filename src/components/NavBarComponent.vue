<template>
	<header>
		<ul
			class="header d-flex justify-content-center justify-content-md-start flex-wrap"
		>
			<NavLinkItemComponent
				v-for="item in links"
				:key="item.link"
				:item="item"
				item-class="header__item"
			/>
		</ul>
	</header>
</template>

<script>
import NavLinkItemComponent from '@/components/NavLinkItemComponent.vue'
import headerLogo from '@/assets/logo/Logo.svg'
import { NAV_LINKS } from '@/constants/navigation'

const headerLinks = [
	{
		link: '/',
		icon: headerLogo,
		alt: 'Main logo'
	},
	...NAV_LINKS
]

export default {
	components: {
		NavLinkItemComponent
	},
	computed: {
		links() {
			return headerLinks
		}
	}
}
</script>
