import coffee1 from '@/assets/img/coffee-1.jpg'
import coffee2 from '@/assets/img/coffee-2.jpg'
import coffee3 from '@/assets/img/coffee-3.jpg'
import good1 from '@/assets/img/good-1.jpg'

const state = () => ({
	bestsellers: [
		{
			id: 1,
			image: coffee1,
			title: 'Solimo Coffee Beans 2kg',
			price: '10.73$'
		},
		{
			id: 2,
			image: coffee2,
			title: 'Presto Coffee Beans 1kg',
			price: '15.99$'
		},
		{
			id: 3,
			image: coffee3,
			title: 'AROMISTICO Coffee 1kg',
			price: '6.99$'
		}
	],
	coffeeProducts: [
		{
			id: 1,
			image: coffee1,
			title: 'Solimo Coffee Beans 2kg',
			country: 'Brazil',
			price: '10.73$'
		},
		{
			id: 2,
			image: coffee2,
			title: 'Presto Coffee Beans 1kg',
			country: 'Kenya',
			price: '15.99$'
		},
		{
			id: 3,
			image: coffee3,
			title: 'AROMISTICO Coffee 1kg',
			country: 'Columbia',
			price: '6.99$'
		},
		{
			id: 4,
			image: coffee1,
			title: 'Bourbon Select 1kg',
			country: 'Brazil',
			price: '12.40$'
		},
		{
			id: 5,
			image: coffee2,
			title: 'Kenya AA Roast 500g',
			country: 'Kenya',
			price: '9.80$'
		},
		{
			id: 6,
			image: coffee3,
			title: 'Andes Blend 1kg',
			country: 'Columbia',
			price: '11.25$'
		}
	],
	pleasureProducts: [
		{
			id: 1,
			image: good1,
			title: 'Solimo Coffee Beans 2kg',
			country: 'Brazil',
			price: '10.73$'
		},
		{
			id: 2,
			image: good1,
			title: 'Presto Coffee Beans 1kg',
			country: 'Kenya',
			price: '15.99$'
		},
		{
			id: 3,
			image: good1,
			title: 'AROMISTICO Coffee 1kg',
			country: 'Columbia',
			price: '6.99$'
		},
		{
			id: 4,
			image: good1,
			title: 'Sweet Roast 1kg',
			country: 'Ethiopia',
			price: '12.30$'
		},
		{
			id: 5,
			image: good1,
			title: 'Morning Blend 750g',
			country: 'Guatemala',
			price: '9.49$'
		},
		{
			id: 6,
			image: good1,
			title: 'Dark Classic 1kg',
			country: 'Peru',
			price: '11.15$'
		}
	]
})

const getters = {
	bestsellers: (state) => state.bestsellers,
	coffeeProducts: (state) => state.coffeeProducts,
	pleasureProducts: (state) => state.pleasureProducts,
	getCoffeeById: (state) => (id) =>
		state.coffeeProducts.find((product) => product.id === Number(id)),
	getGoodsById: (state) => (id) =>
		state.pleasureProducts.find((product) => product.id === Number(id))
}

export default {
	namespaced: true,
	state,
	getters
}
