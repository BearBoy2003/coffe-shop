import { getApiUrl } from '@/config/api'

const state = () => ({
	bestsellers: [],
	coffeeProducts: [],
	pleasureProducts: [],
	currentProduct: null,
	loading: {
		bestsellers: false,
		coffee: false,
		goods: false
	},
	errors: {
		bestsellers: '',
		coffee: '',
		goods: ''
	}
})

const normalizeTitle = (title) =>
	String(title || '').replace(/(\d+)\s*kg\b/gi, '$1kg')

const normalizeProduct = (product) => ({
	...product,
	title: normalizeTitle(product.title || product.name || ''),
	country: product.country || ''
})

const mutations = {
	SET_BESTSELLERS(state, products) {
		state.bestsellers = products
	},
	SET_COFFEE_PRODUCTS(state, products) {
		state.coffeeProducts = products
	},
	SET_PLEASURE_PRODUCTS(state, products) {
		state.pleasureProducts = products
	},
	SET_CURRENT_PRODUCT(state, product) {
		state.currentProduct = product
	},
	SET_LOADING(state, { key, value }) {
		state.loading[key] = value
	},
	SET_ERROR(state, { key, value }) {
		state.errors[key] = value
	}
}

const productsConfig = {
	bestsellers: {
		stateKey: 'bestsellers',
		mutation: 'SET_BESTSELLERS',
		endpoint: '/bestsellers',
		fallbackError: 'Failed to load bestsellers'
	},
	coffee: {
		stateKey: 'coffeeProducts',
		mutation: 'SET_COFFEE_PRODUCTS',
		endpoint: '/coffee',
		fallbackError: 'Failed to load coffee products'
	},
	goods: {
		stateKey: 'pleasureProducts',
		mutation: 'SET_PLEASURE_PRODUCTS',
		endpoint: '/goods',
		fallbackError: 'Failed to load goods products'
	}
}

const actions = {
	async fetchProducts({ state, commit }, type) {
		const config = productsConfig[type]
		if (!config) {
			return
		}

		if (state[config.stateKey].length) {
			commit('SET_ERROR', { key: type, value: '' })
			return
		}

		commit('SET_LOADING', { key: type, value: true })
		commit('SET_ERROR', { key: type, value: '' })

		try {
			const response = await fetch(getApiUrl(config.endpoint))
			if (!response.ok) {
				throw new Error(config.fallbackError)
			}

			const products = await response.json()
			commit(config.mutation, products.map(normalizeProduct))
		} catch (error) {
			commit('SET_ERROR', {
				key: type,
				value: error.message || config.fallbackError
			})
		} finally {
			commit('SET_LOADING', { key: type, value: false })
		}
	},
	async fetchBestsellers({ dispatch }) {
		await dispatch('fetchProducts', 'bestsellers')
	},
	async fetchCoffeeProducts({ dispatch }) {
		await dispatch('fetchProducts', 'coffee')
	},
	async fetchPleasureProducts({ dispatch }) {
		await dispatch('fetchProducts', 'goods')
	},
	setCurrentProduct({ state, commit }, { type, id }) {
		if (type !== 'coffee' && type !== 'goods') {
			commit('SET_CURRENT_PRODUCT', null)
			return
		}

		const source =
			type === 'coffee' ? state.coffeeProducts : state.pleasureProducts

		const product =
			source.find((item) => String(item.id) === String(id)) || null

		commit('SET_CURRENT_PRODUCT', product)
	}
}

const getters = {
	bestsellers: (state) => state.bestsellers,
	coffeeProducts: (state) => state.coffeeProducts,
	pleasureProducts: (state) => state.pleasureProducts,
	currentProduct: (state) => state.currentProduct,
	isProductsLoading: (state) => (type) => Boolean(state.loading[type]),
	productsError: (state) => (type) => state.errors[type] || ''
}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
