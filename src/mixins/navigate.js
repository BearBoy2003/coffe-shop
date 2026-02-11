export default {
	computed: {
		pageName() {
			return this.$route.name
		},
		pageType() {
			if (this.pageName === 'coffee' || this.$route.path.startsWith('/our-coffee/')) {
				return 'coffee'
			}

			if (
				this.pageName === 'goods' ||
				this.$route.path.startsWith('/for-your-pleasure/')
			) {
				return 'goods'
			}

			return null
		}
	},
	methods: {
		navigateToProduct(id, pageName) {
			this.$router.push({
				name: pageName,
				params: { id: String(id) }
			})
		}
	}
}
