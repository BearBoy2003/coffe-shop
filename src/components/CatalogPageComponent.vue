<template>
	<main>
		<PageBannerComponent
			:title="title"
			:banner-class="bannerClass"
		/>
		<section class="shop">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-4 offset-lg-2">
						<img
							class="shop__girl"
							:src="aboutImage"
							alt="girl"
						/>
					</div>
					<div class="col-12 col-lg-4 mt-4 mt-lg-0">
						<div class="title">{{ aboutTitle }}</div>
						<img
							class="beanslogo"
							src="@/assets/logo/Beans_logo_dark.svg"
							alt="Beans logo"
						/>
						<div class="shop__text">
							Extremity sweetness difficult behaviour he of. On disposal of as
							landlord horrible.
							<br />
							<br />
							Afraid at highly months do things on at. Situation recommend
							objection do intention
							<br />
							so questions.
							<br />
							As greatly removed calling pleased improve an. Last ask him cold
							feel
							<br />
							met spot shy want. Children me laughing we prospect answered
							followed. At it went
							<br />
							is song that held help face.
						</div>
					</div>
				</div>

				<div class="line"></div>

				<slot name="controls" />

				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div
							v-if="isLoading"
							class="shop__empty"
						>
							Loading products...
						</div>
						<div
							v-else-if="loadError"
							class="shop__error"
						>
							{{ loadError }}
						</div>
						<div
							v-else-if="products.length"
							class="shop__wrapper"
						>
							<ShopProductCard
								v-for="item in products"
								:key="item.id"
								:image="item.image"
								:title="item.title"
								:country="item.country"
								:price="item.price"
								@click="navigateToProduct(item.id, detailsRouteName)"
							/>
						</div>
						<div
							v-else
							class="shop__empty"
						>
							{{ emptyText }}
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import PageBannerComponent from '@/components/PageBannerComponent.vue'
import ShopProductCard from '@/components/ShopProductCard.vue'
import navigate from '@/mixins/navigate'

export default {
	mixins: [navigate],
	components: {
		PageBannerComponent,
		ShopProductCard
	},
	props: {
		title: {
			type: String,
			required: true
		},
		bannerClass: {
			type: String,
			required: true
		},
		aboutImage: {
			type: String,
			required: true
		},
		aboutTitle: {
			type: String,
			default: 'About our beans'
		},
		products: {
			type: Array,
			required: true
		},
		isLoading: {
			type: Boolean,
			default: false
		},
		loadError: {
			type: String,
			default: ''
		},
		emptyText: {
			type: String,
			default: 'No products found'
		},
		detailsRouteName: {
			type: String,
			required: true
		}
	}
}
</script>
