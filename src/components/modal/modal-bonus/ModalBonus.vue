<script setup lang="ts">
'use strict'

import { ref, reactive } from 'vue'
import emailjs from 'emailjs-com'

import MButtonBig from '@/components/buttons/MButtonBig.vue'
import ModalBlockSuccess from './ModalBlockSuccess.vue'
import CloseIcon from './CloseIcon.vue'
import ModalLinkTelegram from './ModalLinkTelegram.vue'
import ModalLinkWhatsapp from './ModalLinkWhatsapp.vue'

emailjs.init('uWrvoY8ZWXv7j-g9-')

const isActiveSuccess = ref(false)

const props = defineProps(['isActive', 'onClose', 'isBonus'])

const dataObject = reactive({
	user_name: '',
	user_phone: '',
	price: ''
})

const sendEmail = () => {
	emailjs.send('service_03ipejb', 'template_032l0us', dataObject).then(
		() => {
			isActiveSuccess.value = true
			setTimeout(() => {
				isActiveSuccess.value = false
				props.onClose()
			}, 2000)
		},
		error => {
			console.log('FAILED...', error)
			props.onClose()
		}
	)
}
</script>

<template>
	<div class="modal-wrapper" v-show="props.isActive">
		<div class="modal">
			<ModalBlockSuccess
				class="modal-bonus-success-screen"
				:class="isActiveSuccess && 'modal-bonus-success-screen-active'"
			/>
			<button class="close-button" @click="onClose">
				<CloseIcon class="close-button-icon" />
			</button>

			<h4 class="h-l modal-title">
				{{ props.isBonus ? 'Подарочный сертификат' : 'Запись на приём' }}
			</h4>
			<p class="text-sm modal-text">
				Заполни форму&nbsp;&mdash; всё остальное наш администратор берёт
				на&nbsp;себя. Он&nbsp;быстро свяжется с&nbsp;тобой, чтобы назначить
				визит в&nbsp;удобное для тебя время.
			</p>

			<form
				@submit.prevent.stop="sendEmail"
				method="POST"
				class="modal-form"
				id="form_modal_bonus"
				ref="formRef"
			>
				<input
					class="minput"
					type="text"
					placeholder="Имя"
					name="user_name"
					v-model="dataObject.user_name"
				/>

				<input
					class="minput"
					type="text"
					placeholder="Телефон"
					name="user_phone"
					v-model="dataObject.user_phone"
				/>

				<input
					v-if="props.isBonus"
					class="minput"
					type="text"
					placeholder="Номинал сертификата"
					name="price"
					v-model="dataObject.price"
				/>

				<MButtonBig type="submit" class="modal-button">
					Отправить заявку
				</MButtonBig>
			</form>

			<p class="text-mini modal-agreement">
				Нажимая кнопку «Отправить заявку», я&nbsp;соглашаюсь с политикой
				конфиденциальности
			</p>
			<p class="text-sm modal-text-socials">
				Предпочитаешь общение через мессенджеры?
				<br />
				Напиши нам.
			</p>

			<div class="modal-socials-links">
				<ModalLinkTelegram />
				<ModalLinkWhatsapp />
			</div>
		</div>
	</div>
</template>

<style scoped>
.modal-wrapper {
	display: flex;
	justify-content: center;
	padding-top: 30px;
	padding-bottom: 30px;

	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 100;

	background: rgba(244, 238, 232, 0.9);
	overflow: auto;
}
.modal {
	height: fit-content;
	position: relative;
	max-width: 700px;
	background-color: #ede4da;
	border-radius: 70px;

	padding-top: 80px;
	padding-bottom: 50px;
	padding-left: 60px;
	padding-right: 60px;
}

.modal-bonus-success-screen {
	opacity: 0;
}

.modal-bonus-success-screen-active {
	opacity: 1;
}

.close-button-icon {
	width: 100%;
	height: auto;
}

.close-button {
	background: none;
	border: none;

	position: absolute;
	top: 0;
	right: 0;

	transform: translateX(20%) translateY(-20%);
	z-index: 1000;
}

.close-button:hover {
	opacity: 1;
}

.modal-title {
	text-align: center;
	padding-bottom: 30px;
}

.modal-text {
	text-align: center;
	padding-bottom: 42px;
}

.modal-form {
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding-bottom: 30px;
}

.modal-agreement {
	max-width: 360px;
	margin: 0 auto;

	text-align: center;
	padding-bottom: 50px;
}

.modal-button {
	width: 100%;
	max-width: 100%;
	margin-top: 30px;
}

.modal-text-socials {
	text-align: center;
	padding-bottom: 40px;
}

.modal-socials-links {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
}

@media (max-width: 1000px) {
	.modal-wrapper {
		padding: 50px 20px 110px;
	}
	.modal {
		padding: 60px 40px 40px;
		border-radius: 50px;
	}
	.modal-title {
		padding-bottom: 14px;
	}
	.modal-text {
		max-width: 500px;
	}
	.modal-button {
		margin: 0;
	}
	.modal-agreement {
		padding-bottom: 24px;
	}
	.modal-text-socials {
		display: none;
	}
	.close-button {
		width: 50px;
	}
}

@media (max-width: 600px) {
	.modal {
		padding: 40px 18px 30px;
		border-radius: 40px;
	}
}
</style>
