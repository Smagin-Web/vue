<template>
	<button class="button-decor">
		<slot></slot>
	</button>
</template>

<style scoped>
.button-decor {
	font-family: 'BrisaSans', sans-serif;
	color: white;
	background-color: #bfb0e9;

	border-radius: 100px;
	border: #bfb0e9 2px solid;

	padding: 9px 29px;

	font-size: 16px;
	font-weight: 400;
	letter-spacing: 2px;

	cursor: pointer;
}

@media screen and (max-width: 1000px) {
	.button-decor {
		padding: 6px 16px;

		font-size: 12px;
		font-weight: 600;
	}
}
</style>
