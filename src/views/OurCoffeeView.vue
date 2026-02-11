<template>
	<CatalogPageComponent
		title="Our Coffee"
		about-title="About our beans"
		banner-class="coffepage-banner"
		:about-image="aboutImage"
		:products="filteredCoffeeProducts"
		:is-loading="isLoading"
		:load-error="loadError"
		empty-text="No products found for your search"
		details-route-name="coffee"
	>
		<template #controls>
			<div class="row">
				<div class="col-12 col-lg-4 offset-lg-2">
					<form
						class="shop__search"
						@submit.prevent
					>
						<label
							class="shop__search-label"
							for="filter"
						>
							Looking for
						</label>
						<input
							id="filter"
							type="text"
							placeholder="start typing here..."
							class="shop__search-input"
							v-model.trim="searchQuery"
						/>
					</form>
				</div>
				<div class="col-12 col-lg-4 mt-3 mt-lg-0">
					<div class="shop__filter">
						<button
							type="button"
							class="shop__filter-label"
							@click="resetFilters"
						>
							Or filter
						</button>
						<div class="shop__filter-group">
							<button
								v-for="country in countries"
								:key="country"
								type="button"
								:class="[
									'shop__filter-btn',
									{ 'shop__filter-btn--active': activeCountry === country }
								]"
								:aria-pressed="activeCountry === country"
								@click="toggleCountryFilter(country)"
							>
								{{ country }}
							</button>
						</div>
					</div>
				</div>
			</div>
		</template>
	</CatalogPageComponent>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CatalogPageComponent from '@/components/CatalogPageComponent.vue'
import coffeeGirl from '@/assets/img/coffee_girl.jpg'

export default {
	components: {
		CatalogPageComponent
	},
	data() {
		return {
			searchQuery: '',
			activeCountry: ''
		}
	},
	created() {
		this.fetchCoffeeProducts()
	},
	computed: {
		...mapGetters('products', [
			'coffeeProducts',
			'isProductsLoading',
			'productsError'
		]),
		countries() {
			return [...new Set(this.coffeeProducts.map((item) => item.country).filter(Boolean))]
		},
		filteredCoffeeProducts() {
			return this.coffeeProducts.filter((item) => {
				const byCountry =
					!this.activeCountry || item.country === this.activeCountry
				const bySearch =
					!this.searchQuery ||
					item.title.toLowerCase().includes(this.searchQuery.toLowerCase())

				return byCountry && bySearch
			})
		},
		isLoading() {
			return this.isProductsLoading('coffee')
		},
		loadError() {
			return this.productsError('coffee')
		},
		aboutImage() {
			return coffeeGirl
		}
	},
	methods: {
		...mapActions('products', ['fetchCoffeeProducts']),
		toggleCountryFilter(country) {
			this.activeCountry = this.activeCountry === country ? '' : country
		},
		resetFilters() {
			this.searchQuery = ''
			this.activeCountry = ''
		}
	}
}
</script>
