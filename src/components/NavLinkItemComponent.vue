<template>
	<li :class="itemClass">
		<router-link :to="item.link">
			<img
				v-if="item.icon"
				:src="item.icon"
				:alt="item.alt || 'logo'"
			/>
			<span v-else>{{ item.text }}</span>
		</router-link>
	</li>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		},
		itemClass: {
			type: String,
			required: true
		}
	}
}
</script>
