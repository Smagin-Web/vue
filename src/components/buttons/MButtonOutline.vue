<template>
	<button class="main-button-outline">Задать вопрос</button>
</template>

<style scoped>
.main-button-outline {
	color: #000;
	font-family: 'BrisaSans';
	font-size: 24px;
	font-weight: 500;

	background-color: transparent;

	border-radius: 100px;
	border: black 2px solid;

	padding: 14px 44px;
}

@media screen and (max-width: 1000px) {
	.main-button-outline {
		font-size: 16px;
		padding: 14px 18px;
	}
}
</style>
