<template>
	<div class="wrapper">
		<router-view />
		<FooterComponent />
	</div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'

export default {
	components: {
		FooterComponent
	}
}
</script>
