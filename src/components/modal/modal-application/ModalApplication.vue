<script setup >
import { useModalsStore } from '@/stores/modals'
import { ref, reactive } from 'vue'
import emailjs from 'emailjs-com'
import ModalBase from '../ModalBase.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'

const store = useModalsStore()
emailjs.init('uWrvoY8ZWXv7j-g9-')
const isActiveSuccess = ref(false)

const dataObject = reactive({
	user_name: '',
	user_phone: ''
})

const sendSuccess = () => {
	isActiveSuccess.value = true
	setTimeout(() => {
		isActiveSuccess.value = false
		store.closeAllModals()
	}, 2000)
}

const sendEmail = () => {
	emailjs.send('service_03ipejb', 'template_032l0us', dataObject).then(
		() => sendSuccess(),
		() => store.closeAllModals()
	)
}
</script>

<template>
	<div v-show="store.isOpenModalApplication">
		<ModalBase>
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

				<MButtonBig type="submit" class="modal-button">
					Отправить заявку
				</MButtonBig>
			</form>
		</ModalBase>
	</div>
</template>

<style scoped>
.modal-form {
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding-bottom: 30px;
}

.modal-button {
	width: 100%;
	max-width: 100%;
	margin-top: 30px;
}
</style>