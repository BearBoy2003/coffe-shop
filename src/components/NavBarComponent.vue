<template>
	<header>
		<ul
			class="header d-flex justify-content-center justify-content-md-start flex-wrap"
		>
			<NavLinkItemComponent
				v-for="item in links"
				:key="item.id"
				:item="item"
				item-class="header__item"
			/>
		</ul>
	</header>
</template>

<script>
import NavLinkItemComponent from '@/components/NavLinkItemComponent.vue'

export default {
	components: {
		NavLinkItemComponent
	},
	data() {
		return {
			links: [
				{
					id: 0,
					link: '/',
					icon: require('@/assets/logo/Logo.svg')
				},
				{
					id: 1,
					text: 'Our coffee',
					link: '/our-coffee'
				},
				{
					id: 2,
					text: 'For your pleasure',
					link: '/for-your-pleasure'
				},
				{
					id: 3,
					text: 'Contact us',
					link: '/contact-us'
				}
			]
		}
	}
}
</script>
