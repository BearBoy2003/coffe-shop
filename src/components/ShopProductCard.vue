<template>
	<div class="shop__item">
		<img
			:src="image"
			:alt="title"
		/>
		<div class="shop__item-title">{{ title }}</div>
		<div class="shop__item-country">{{ country }}</div>
		<div class="shop__item-price">{{ price }}</div>
	</div>
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
			required: true
		},
		price: {
			type: String,
			required: true
		}
	}
}
</script>
