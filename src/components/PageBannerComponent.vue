<template>
	<div :class="['banner', bannerClass]">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<NavBarComponent />
				</div>
			</div>
			<PageHeaderTitleComponent :title="title" />
		</div>
	</div>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import PageHeaderTitleComponent from '@/components/PageHeaderTitleComponent.vue'

export default {
	components: {
		NavBarComponent,
		PageHeaderTitleComponent
	},
	props: {
		title: {
			type: String,
			required: true
		},
		bannerClass: {
			type: String,
			default: 'contactspage-banner'
		}
	}
}
</script>
