<template>
	<button class="main-button"><slot></slot></button>
</template>

<style scoped>
.main-button {
	width: 100%;
	max-width: 380px;
	padding: 24px 0;

	font-family: 'BrisaSans';
	line-height: 30px;
	font-weight: 500;
	font-size: 24px;
	color: #fff;
	background-color: black;

	border-radius: 100px;
	border: black 2px solid;
}

@media (max-width: 1200px) {
	.main-button {
		max-width: 350px;
		padding: 16px;
		font-size: 20px;
	}
}

@media (max-width: 800px) {
	.main-button {
		padding: 10px;
		font-size: 18px;
	}
}
</style>
