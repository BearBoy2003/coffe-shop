export default {
	computed: {
		pageName() {
			return this.$route.name
		}
	},
	methods: {
		navigateToProduct(id, pageName) {
			this.$router.push({
				name: pageName,
				params: { id: String(id) }
			})
		},
		getCurrentProduct() {
			if (this.pageName !== 'coffee' && this.pageName !== 'goods') {
				return null
			}

			const pageGetter =
				this.pageName === 'coffee'
					? 'products/getCoffeeById'
					: 'products/getGoodsById'

			return this.$store.getters[pageGetter](this.$route.params.id)
		}
	}
}
