<template>
	<div class="best__item">
		<img
			:src="image"
			:alt="title"
		/>
		<div class="best__item-title">{{ title }}</div>
		<div class="best__item-price">{{ price }}</div>
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
		price: {
			type: String,
			required: true
		}
	}
}
</script>
