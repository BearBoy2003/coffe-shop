<template>
	<button
		type="button"
		class="shop__item"
		@click="$emit('click')"
	>
		<img
			:src="image"
			:alt="title"
		/>
		<div class="shop__item-title">{{ title }}</div>
		<div
			v-if="country"
			class="shop__item-country"
		>
			{{ country }}
		</div>
		<div class="shop__item-price">{{ price }}</div>
	</button>
</template>

<script>
export default {
	props: {
		image: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		country: {
			type: String,
			default: ''
		},
		price: {
			type: String,
			required: true
		}
	}
}
</script>
