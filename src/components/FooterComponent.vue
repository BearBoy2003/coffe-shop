<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<ul class="footer d-flex flex-wrap">
						<NavLinkItemComponent
							v-for="item in footerLinks"
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
import { mapGetters } from 'vuex'

export default {
	components: {
		NavLinkItemComponent
	},
	computed: {
		...mapGetters('links', ['footerLinks'])
	}
}
</script>
