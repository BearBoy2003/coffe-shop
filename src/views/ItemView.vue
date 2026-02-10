<template>
	<main>
		<div class="banner itempage-banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<NavBarComponent />
					</div>
				</div>
				<PageHeaderTitleComponent :title="pageTitle" />
			</div>
		</div>

		<section class="shop">
			<div class="container">
				<div
					v-if="product"
					class="row"
				>
					<div class="col-lg-5 offset-1">
						<img
							class="shop__girl"
							:src="product.image"
							:alt="product.title"
						/>
					</div>
					<div class="col-lg-4">
						<div class="title">{{ product.title }}</div>
						<img
							class="beanslogo"
							src="@/assets/logo/Beans_logo_dark.svg"
							alt="Beans logo"
						/>
						<div class="shop__point">
							<span>Country:</span>
							{{ product.country }}
						</div>
						<div class="shop__point">
							<span>Description:</span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
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
import NavBarComponent from '@/components/NavBarComponent.vue'
import PageHeaderTitleComponent from '@/components/PageHeaderTitleComponent.vue'
import navigate from '@/mixins/navigate'

export default {
	mixins: [navigate],
	components: {
		NavBarComponent,
		PageHeaderTitleComponent
	},
	computed: {
		product() {
			return this.getCurrentProduct()
		},
		pageTitle() {
			if (this.pageName === 'coffee') {
				return 'Our Coffee'
			}

			if (this.pageName === 'goods') {
				return 'For your pleasure'
			}

			return 'Product'
		}
	}
}
</script>
