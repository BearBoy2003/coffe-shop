<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3">
					<ul class="footer d-flex flex-wrap">
						<li
							v-for="item in links"
							:key="item.id"
							class="footer__item"
						>
							<router-link :to="item.link">
								<img
									v-if="item.icon"
									:src="item.icon"
									alt="logo"
								/>
								<span v-else>{{ item.text }}</span>
							</router-link>
						</li>
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
export default {
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
