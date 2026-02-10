<template>
	<CatalogPageComponent
		title="Our Coffee"
		banner-class="coffepage-banner"
		:about-image="aboutImage"
		:products="coffeeProducts"
		details-route-name="coffee"
	>
		<template #controls>
			<div class="row">
				<div class="col-lg-4 offset-2">
					<form
						action="#"
						class="shop__search"
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
						/>
					</form>
				</div>
				<div class="col-lg-4">
					<div class="shop__filter">
						<div class="shop__filter-label">Or filter</div>
						<div class="shop__filter-group">
							<button class="shop__filter-btn">Brazil</button>
							<button class="shop__filter-btn">Kenya</button>
							<button class="shop__filter-btn">Columbia</button>
						</div>
					</div>
				</div>
			</div>
		</template>
	</CatalogPageComponent>
</template>

<script>
import { mapGetters } from 'vuex'

import CatalogPageComponent from '@/components/CatalogPageComponent.vue'
import coffeeGirl from '@/assets/img/coffee_girl.jpg'

export default {
	components: {
		CatalogPageComponent
	},
	computed: {
		...mapGetters('products', ['coffeeProducts']),
		aboutImage() {
			return coffeeGirl
		}
	}
}
</script>
