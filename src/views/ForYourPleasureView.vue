<template>
	<CatalogPageComponent
		title="For your pleasure"
		banner-class="goodspage-banner"
		:about-image="aboutImage"
		:products="pleasureProducts"
		details-route-name="goods"
	/>
</template>

<script>
import { mapGetters } from 'vuex'

import CatalogPageComponent from '@/components/CatalogPageComponent.vue'
import coffeeGoods from '@/assets/img/coffee_goods.jpg'

export default {
	components: {
		CatalogPageComponent
	},
	computed: {
		...mapGetters('products', ['pleasureProducts']),
		aboutImage() {
			return coffeeGoods
		}
	}
}
</script>
