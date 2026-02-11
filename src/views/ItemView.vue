<template>
	<main>
		<PageBannerComponent
			:title="pageTitle"
			banner-class="itempage-banner"
		/>

		<section class="shop">
			<div class="container">
				<div
					v-if="isLoading"
					class="row"
				>
					<div class="col text-center">Loading product...</div>
				</div>
				<div
					v-else-if="loadError"
					class="row"
				>
					<div class="col text-center text-danger">{{ loadError }}</div>
				</div>
				<div
					v-else-if="product"
					class="row"
				>
					<div class="col-12 col-lg-5 offset-lg-1">
						<img
							class="shop__girl shop__product-image"
							:src="product.image"
							:alt="product.title"
						/>
					</div>
					<div class="col-12 col-lg-4 mt-4 mt-lg-0">
						<div class="title">{{ product.title }}</div>
						<img
							class="beanslogo"
							src="@/assets/logo/Beans_logo_dark.svg"
							alt="Beans logo"
						/>
						<div
							v-if="product.country"
							class="shop__point"
						>
							<span>Country:</span>
							{{ product.country }}
						</div>
						<div class="shop__point">
							<span>Description:</span>
							{{ product.description || 'Description is not available yet.' }}
						</div>
						<div class="shop__point">
							<span>Price:</span>
							<span class="shop__point-price">{{ product.price }}</span>
						</div>
					</div>
				</div>
				<div
					v-else
					class="row"
				>
					<div class="col text-center">Product not found</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import PageBannerComponent from '@/components/PageBannerComponent.vue'
import navigate from '@/mixins/navigate'
import { mapActions, mapGetters } from 'vuex'

export default {
	mixins: [navigate],
	components: {
		PageBannerComponent
	},
	created() {
		this.loadProductsForCurrentPage()
	},
	watch: {
		'$route.path': 'loadProductsForCurrentPage'
	},
	computed: {
		...mapGetters('products', [
			'currentProduct',
			'isProductsLoading',
			'productsError'
		]),
		product() {
			return this.currentProduct
		},
		loadingType() {
			if (this.pageType === 'coffee') {
				return 'coffee'
			}

			if (this.pageType === 'goods') {
				return 'goods'
			}

			return null
		},
		isLoading() {
			return this.loadingType
				? this.isProductsLoading(this.loadingType)
				: false
		},
		loadError() {
			return this.loadingType
				? this.productsError(this.loadingType)
				: ''
		},
		pageTitle() {
			if (this.pageType === 'coffee') {
				return 'Our Coffee'
			}

			if (this.pageType === 'goods') {
				return 'For your pleasure'
			}

			return 'Product'
		}
	},
	methods: {
		...mapActions('products', [
			'fetchCoffeeProducts',
			'fetchPleasureProducts',
			'setCurrentProduct'
		]),
		async loadProductsForCurrentPage() {
			if (this.pageType === 'coffee') {
				this.setCurrentProduct({ type: null, id: null })
				await this.fetchCoffeeProducts()
				this.setCurrentProduct({ type: 'coffee', id: this.$route.params.id })
				return
			}

			if (this.pageType === 'goods') {
				this.setCurrentProduct({ type: null, id: null })
				await this.fetchPleasureProducts()
				this.setCurrentProduct({ type: 'goods', id: this.$route.params.id })
				return
			}

			this.setCurrentProduct({ type: null, id: null })
		}
	}
}
</script>
