<template>
	<a class="button-link"><slot></slot></a>
</template>

<style scoped>
.button-link {
	font-family: 'BrisaSans';
	font-size: 24px;
	font-weight: 700;
	color: black;
	text-decoration: underline;
	text-align: center;

	padding: 10px 20px;

	display: inline-block;
	cursor: pointer;
}

@media (max-width: 1400px) {
	.button-link {
		font-size: 20px;
	}
}

@media (max-width: 1000px) {
	.button-link {
		font-size: 16px;
	}
}
</style>
