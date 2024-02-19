<script setup >
import ModalBlockSuccess from './ModalBlockSuccess.vue'
import { useModalsStore } from '@/stores/modals'

const store = useModalsStore()

const props = defineProps(['title', 'isSuccess', 'text'])
</script>

<template>
	<div class="modal-wrapper">
		<div class="modal">
			<button class="close-button" @click="store.closeAllModals" />
			<ModalBlockSuccess :isActive="props.isSuccess" />

			<h4 class="h-l modal-title" v-text="props.title" />
			<p class="text-sm modal-text" v-text="props.text" />

			<slot />
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

.close-button {
	width: 60px;
	height: 60px;
	background: #ae8c8e;
	border: none;
	border-radius: 50%;

	position: absolute;
	top: 0;
	right: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	transform: translateX(20%) translateY(-20%);
	z-index: 1000;
}

.close-button::after,
.close-button::before {
	content: '';
	display: block;
	position: absolute;

	width: 50%;
	height: 6%;
	background-color: #fff;
	border-radius: 4px;
}

.close-button::after {
	transform: rotate(45deg);
}

.close-button::before {
	transform: rotate(-45deg);
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

.modal-agreement {
	max-width: 360px;
	margin: 0 auto;

	text-align: center;
	padding-bottom: 50px;
}

.modal form {
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding-bottom: 30px;
}

.modal form button {
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
	.modal form button {
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
    height: 50px;
	}
}

@media (max-width: 600px) {
	.modal {
		padding: 40px 18px 30px;
		border-radius: 40px;
	}
}
</style>
