<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<ul class="footer d-flex flex-wrap">
						<NavLinkItemComponent
							v-for="item in links"
							:key="item.id"
							:item="item"
							item-class="footer__item"
						/>
					</ul>
				</div>
			</div>
			<img
				class="beanslogo"
				src="@/assets/logo/Beans_logo_dark.svg"
				alt="Beans logo"
			/>
		</div>
	</footer>
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
					icon: require('@/assets/logo/Logo_black.svg')
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
