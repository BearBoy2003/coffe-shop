<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<ul class="footer d-flex flex-wrap">
						<NavLinkItemComponent
							v-for="item in links"
							:key="item.link"
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
import footerLogo from '@/assets/logo/Logo_black.svg'
import { NAV_LINKS } from '@/constants/navigation'

const footerLinks = [
	{
		link: '/',
		icon: footerLogo,
		alt: 'Footer logo'
	},
	...NAV_LINKS
]

export default {
	components: {
		NavLinkItemComponent
	},
	computed: {
		links() {
			return footerLinks
		}
	}
}
</script>
