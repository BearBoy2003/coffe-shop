<template>
	<main>
		<PageBannerComponent title="Page not found" />
		<section class="contacts">
			<div class="container">
				<div class="row">
					<div class="col text-center mt-5 mb-5">
						<p>The page you requested does not exist.</p>
						<router-link to="/">Go to home page</router-link>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import PageBannerComponent from '@/components/PageBannerComponent.vue'

export default {
	components: {
		PageBannerComponent
	}
}
</script>
