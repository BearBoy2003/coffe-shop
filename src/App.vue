<template>
	<div class="wrapper">
		<HeroView />
		<FooterComponent />
	</div>
</template>

<script>
import HeroView from '@/views/HeroView.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
	components: {
		HeroView,
		FooterComponent
	}
}
</script>
