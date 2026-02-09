<template>
	<header>
		<ul
			class="header d-flex justify-content-center justify-content-md-start flex-wrap"
		>
			<li
				v-for="item in links"
				:key="item.id"
				class="header__item"
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
	</header>
</template>

<script>
export default {
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
