<template>
	<button class="main-button-outline"><slot></slot></button>
</template>

<style scoped>
.main-button-outline {
	padding: 24px 0;
	width: 100%;
	max-width: 400px;

	color: #000;
	font-family: 'BrisaSans';
	font-size: 24px;
	font-weight: 500;
	line-height: 30px;

	background-color: transparent;

	border-radius: 100px;
	border: 2px solid #000;
}

@media (max-width: 1600px) {
	.main-button-outline {
		padding: 18px 0;
	}
}

@media (max-width: 1200px) {
	.main-button-outline {
		max-width: 350px;
		padding: 16px 0;
		font-size: 20px;
	}
}

@media (max-width: 800px) {
	.main-button-outline {
		padding: 10px;
		font-size: 18px;
	}
}
</style>
