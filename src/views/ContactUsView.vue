<template>
	<main>
		<div class="banner contactspage-banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<NavBarComponent />
					</div>
				</div>
				<PageHeaderTitleComponent title="Contact us" />
			</div>
		</div>
		<section class="contacts">
			<div class="container">
				<div class="row">
					<div class="col col-12 col-lg-6 offset-0 offset-lg-3">
						<div class="title mt-5">Tell us about your tastes</div>
						<img
							class="beanslogo mt-5"
							src="@/assets/logo/Beans_logo_dark.svg"
							alt="Beans logo"
						/>

						<form
							class="mt-5"
							@submit.prevent="submitForm"
						>
							<div class="form-group row">
								<div class="col col-12 col-sm-3 d-flex align-items-start">
									<label
										for="name-input"
										class="mb-0"
									>
										Name
										<span style="color: red">*</span>
									</label>
								</div>
								<div class="col col-12 col-sm-9">
									<input
										type="text"
										class="form-control"
										id="name-input"
										v-model="v$.name.$model"
									/>
									<span
										v-for="error in v$.name.$errors"
										:key="error.$uid"
										class="text-danger"
									>
										{{ error.$message }}
									</span>
								</div>
							</div>

							<div class="form-group row">
								<div class="col col-12 col-sm-3 d-flex align-items-start">
									<label
										for="email-input"
										class="mb-0"
									>
										E-mail
										<span style="color: red">*</span>
									</label>
								</div>
								<div class="col col-12 col-sm-9">
									<input
										type="email"
										class="form-control"
										id="email-input"
										v-model="v$.email.$model"
									/>
									<span
										v-for="error in v$.email.$errors"
										:key="error.$uid"
										class="text-danger"
									>
										{{ error.$message }}
									</span>
								</div>
							</div>

							<div class="form-group row">
								<div class="col col-12 col-sm-3 d-flex align-items-start">
									<label
										for="phone-input"
										class="mb-0"
									>
										Phone
									</label>
								</div>
								<div class="col col-12 col-sm-9">
									<input
										type="tel"
										class="form-control"
										id="phone-input"
										maxlength="15"
										v-model="v$.phone.$model"
									/>
									<span
										v-for="error in v$.phone.$errors"
										:key="error.$uid"
										class="text-danger"
									>
										{{ error.$message }}
									</span>
								</div>
							</div>

							<div class="form-group row textarea">
								<div class="col col-12 d-flex justify-content-start">
									<label
										for="message"
										class="mb-3 mt-3 text-center"
									>
										Your message
										<span style="color: red">*</span>
									</label>
								</div>
								<div class="col col-12">
									<textarea
										class="form-control"
										name="message"
										id="message"
										rows="5"
										maxlength="500"
										placeholder="Leave your comments here"
										v-model="v$.message.$model"
									></textarea>
									<span
										v-for="error in v$.message.$errors"
										:key="error.$uid"
										class="text-danger"
									>
										{{ error.$message }}
									</span>
								</div>
							</div>

							<div class="form-group row">
								<div class="col col-12">
									<div>
										<input
											id="offer-checkbox"
											type="checkbox"
											v-model="v$.offerAccepted.$model"
										/>
										<label
											for="offer-checkbox"
											class="contacts__offer-label"
										>
											I agree to the offer agreement
										</label>
									</div>
									<span
										v-for="error in v$.offerAccepted.$errors"
										:key="error.$uid"
										class="text-danger"
									>
										{{ error.$message }}
									</span>
								</div>
							</div>

							<div class="row">
								<div class="col">
									<button class="btn btn-outline-dark send-btn">Send us</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import PageHeaderTitleComponent from '@/components/PageHeaderTitleComponent.vue'

import useVuelidate from '@vuelidate/core'
import { email, helpers, maxLength, minLength, required, sameAs } from '@vuelidate/validators'

export default {
	setup() {
		return { v$: useVuelidate() }
	},
	validations() {
		return {
			name: { required },
			email: { required, email },
			phone: {},
			message: {
				required,
				maxLength: maxLength(500),
				minLength: helpers.withMessage('This value min 6', minLength(6))
			},
			offerAccepted: {
				sameAs: helpers.withMessage(
					'You must agree to the offer agreement',
					sameAs(true)
				)
			}
		}
	},
	components: {
		NavBarComponent,
		PageHeaderTitleComponent
	},
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			message: '',
			offerAccepted: true
		}
	},
	methods: {
		async submitForm() {
			const isFormCorrect = await this.v$.$validate()
			if (!isFormCorrect) return
		}
	}
}
</script>
