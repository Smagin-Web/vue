<template>
	<button class="main-button"><slot></slot></button>
</template>

<style scoped>
.main-button {
	color: #fff;
	font-family: 'BrisaSans';
	font-size: 24px;
	font-weight: 500;

	background-color: black;

	border-radius: 100px;
	border: black 2px solid;

	padding: 14px 44px;
}

@media screen and (max-width: 1000px) {
	.main-button {
		font-size: 16px;
		padding: 14px 18px;
	}
}
</style>
