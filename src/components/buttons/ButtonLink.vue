<template>
	<a class="button-link"><slot></slot></a>
</template>

<style scoped>
.button-link {
	display: inline-block;
	cursor: pointer;
	color: black;
	text-decoration: underline;

	padding: 10px 20px;

	font-size: 32px;
}
</style>
