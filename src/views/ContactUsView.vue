<template>
	<main>
		<PageBannerComponent title="Contact us" />
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
										<span class="contacts__required-mark">*</span>
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
										<span class="contacts__required-mark">*</span>
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
										maxlength="20"
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
										<span class="contacts__required-mark">*</span>
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
									<div
										v-if="submitError"
										class="text-danger text-center mt-2"
									>
										{{ submitError }}
									</div>
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
import PageBannerComponent from '@/components/PageBannerComponent.vue'
import { getApiUrl } from '@/config/api'

import useVuelidate from '@vuelidate/core'
import { email, helpers, maxLength, minLength, required, sameAs } from '@vuelidate/validators'

export default {
	setup() {
		return { v$: useVuelidate() }
	},
	validations() {
		return {
			name: {
				required: helpers.withMessage('Name is required', required)
			},
			email: {
				required: helpers.withMessage('E-mail is required', required),
				email: helpers.withMessage('Please enter a valid e-mail', email)
			},
			phone: {
				validPhone: helpers.withMessage(
					'Please enter a valid phone number',
					(value) => {
						if (value == null || value === '') {
							return true
						}

						const trimmedValue = String(value).trim()
						if (!trimmedValue) {
							return false
						}

						return /^\+?[0-9\s\-()]{7,20}$/.test(trimmedValue)
					}
				)
			},
			message: {
				required: helpers.withMessage('Message is required', required),
				maxLength: helpers.withMessage(
					'Message must be 500 characters or fewer',
					maxLength(500)
				),
				minLength: helpers.withMessage(
					'Message must be at least 6 characters',
					minLength(6)
				)
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
		PageBannerComponent
	},
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			message: '',
			offerAccepted: true,
			submitError: ''
		}
	},
	methods: {
		resetForm() {
			this.name = ''
			this.email = ''
			this.phone = ''
			this.message = ''
			this.offerAccepted = true

			this.$nextTick(() => {
				this.v$.$reset()
			})
		},
		async submitForm() {
			const isFormCorrect = await this.v$.$validate()
			if (!isFormCorrect) return
			this.submitError = ''

			const message = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				message: this.message
			}

			try {
				const response = await fetch(getApiUrl('/contacts'), {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(message)
				})

				if (!response.ok) {
					throw new Error('Failed to send contact form')
				}

				this.resetForm()
				this.$router.push('/thank-you')
			} catch (error) {
				this.submitError = 'Failed to send your message. Please try again.'
			}
		}
	}
}
</script>
