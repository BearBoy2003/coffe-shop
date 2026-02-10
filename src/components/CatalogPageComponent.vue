<template>
	<main>
		<div :class="['banner', bannerClass]">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<NavBarComponent />
					</div>
				</div>
				<PageHeaderTitleComponent :title="title" />
			</div>
		</div>
		<section class="shop">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 offset-2">
						<img
							class="shop__girl"
							:src="aboutImage"
							alt="girl"
						/>
					</div>
					<div class="col-lg-4">
						<div class="title">About our beans</div>
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
						<div class="shop__wrapper">
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
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import PageHeaderTitleComponent from '@/components/PageHeaderTitleComponent.vue'
import ShopProductCard from '@/components/ShopProductCard.vue'
import navigate from '@/mixins/navigate'

export default {
	mixins: [navigate],
	components: {
		NavBarComponent,
		PageHeaderTitleComponent,
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
		products: {
			type: Array,
			required: true
		},
		detailsRouteName: {
			type: String,
			required: true
		}
	}
}
</script>
