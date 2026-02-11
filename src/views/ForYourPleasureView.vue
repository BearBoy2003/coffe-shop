<template>
	<CatalogPageComponent
		title="For your pleasure"
		about-title="About our goods"
		banner-class="goodspage-banner"
		:about-image="aboutImage"
		:products="pleasureProducts"
		:is-loading="isLoading"
		:load-error="loadError"
		details-route-name="goods"
	/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CatalogPageComponent from '@/components/CatalogPageComponent.vue'
import coffeeGoods from '@/assets/img/coffee_goods.jpg'

export default {
	components: {
		CatalogPageComponent
	},
	created() {
		this.fetchPleasureProducts()
	},
	computed: {
		...mapGetters('products', [
			'pleasureProducts',
			'isProductsLoading',
			'productsError'
		]),
		isLoading() {
			return this.isProductsLoading('goods')
		},
		loadError() {
			return this.productsError('goods')
		},
		aboutImage() {
			return coffeeGoods
		}
	},
	methods: {
		...mapActions('products', ['fetchPleasureProducts'])
	}
}
</script>
