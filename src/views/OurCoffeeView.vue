<template>
	<main>
		<div class="banner coffepage-banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<NavBarComponent />
					</div>
				</div>
				<h1 class="title-big">Our Coffee</h1>
			</div>
		</div>
		<section class="shop">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 offset-2">
						<img
							class="shop__girl"
							src="@/assets/img/coffee_girl.jpg"
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
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div class="shop__wrapper">
							<div
								v-for="item in coffeeProducts"
								:key="item.id"
								class="shop__item"
							>
								<img
									:src="item.image"
									:alt="item.title"
								/>
								<div class="shop__item-title">{{ item.title }}</div>
								<div class="shop__item-country">{{ item.country }}</div>
								<div class="shop__item-price">{{ item.price }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'

export default {
	components: {
		NavBarComponent
	},
	data() {
		return {
			coffeeProducts: [
				{
					id: 1,
					image: require('@/assets/img/coffee-1.jpg'),
					title: 'Solimo Coffee Beans 2kg',
					country: 'Brazil',
					price: '10.73$'
				},
				{
					id: 2,
					image: require('@/assets/img/coffee-2.jpg'),
					title: 'Presto Coffee Beans 1kg',
					country: 'Kenya',
					price: '15.99$'
				},
				{
					id: 3,
					image: require('@/assets/img/coffee-3.jpg'),
					title: 'AROMISTICO Coffee 1kg',
					country: 'Columbia',
					price: '6.99$'
				},
				{
					id: 4,
					image: require('@/assets/img/coffee-1.jpg'),
					title: 'Bourbon Select 1kg',
					country: 'Brazil',
					price: '12.40$'
				},
				{
					id: 5,
					image: require('@/assets/img/coffee-2.jpg'),
					title: 'Kenya AA Roast 500g',
					country: 'Kenya',
					price: '9.80$'
				},
				{
					id: 6,
					image: require('@/assets/img/coffee-3.jpg'),
					title: 'Andes Blend 1kg',
					country: 'Columbia',
					price: '11.25$'
				}
			]
		}
	}
}
</script>
