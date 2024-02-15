<template>
	<div class="modal-success-screen">
		<h6 class="h-l">Спасибо за заявку!</h6>
		<p class="text-sm">Администратор скоро с Вами свяжется!</p>
	</div>
</template>

<style scoped>
.modal-success-screen {
	background-color: inherit;
	border-radius: inherit;
	position: absolute;
	bottom: 0;
	top: 0;
	right: 0;
	left: 0;
	height: 100%;
	width: 100%;

	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 24px;

	transition: 0.2s;
	pointer-events: none;
	z-index: 10;
}
</style>
