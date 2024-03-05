<script setup>
import { useModalsStore } from '@/stores/modals'
import { ref, reactive } from 'vue'
import emailjs from 'emailjs-com'
import ModalBase from '../ModalBase.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'

const store = useModalsStore()
emailjs.init('uWrvoY8ZWXv7j-g9-')
const isActiveSuccess = ref(false)
const setOpenSuccess = () => (isActiveSuccess.value = true)
const setCloseSuccess = () => (isActiveSuccess.value = false)

const dataObject = reactive({
	user_name: '',
	user_phone: '',
	price: ''
})

const sendSuccess = () => {
	setOpenSuccess()

	setTimeout(() => {
		setCloseSuccess()
		store.closeAllModals()
	}, 4000)
}

const sendEmail = () => {
	sendSuccess()
	emailjs
		.send('service_03ipejb', 'template_032l0us', dataObject)
		.then(() => store.closeAllModals())
}
</script>

<template>
	<div v-show="store.isOpenModalBonuse">
		<ModalBase :isSuccess="isActiveSuccess">
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
		</ModalBase>
	</div>
</template>
