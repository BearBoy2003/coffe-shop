<template>
	<main>
		<PageBannerComponent title="Thank you" />
		<section class="contacts">
			<div class="container">
				<div class="row">
					<div class="col col-12 col-lg-6 offset-0 offset-lg-3">
						<div class="title mt-5">Thank you for your request</div>
						<img
							class="beanslogo mt-5"
							src="@/assets/logo/Beans_logo_dark.svg"
							alt="Beans logo"
						/>
					</div>
				</div>

				<div class="row">
					<div class="col">
						<div class="title mt-5">
							<p>Thank you so much!</p>
							<p>We will contact you as soon as possible.</p>
							<img
								src="@/assets/img/thanks.png"
								alt="thanks-icon"
							/>
						</div>
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
