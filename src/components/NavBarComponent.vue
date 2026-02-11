<template>
	<header>
		<ul
			class="header d-flex justify-content-center justify-content-md-start"
		>
			<NavLinkItemComponent
				v-for="item in headerLinks"
				:key="item.id"
				:item="item"
				item-class="header__item"
			/>
		</ul>
	</header>
</template>

<script>
import NavLinkItemComponent from '@/components/NavLinkItemComponent.vue'
import { mapGetters } from 'vuex'

export default {
	components: {
		NavLinkItemComponent
	},
	computed: {
		...mapGetters('links', ['headerLinks'])
	}
}
</script>
