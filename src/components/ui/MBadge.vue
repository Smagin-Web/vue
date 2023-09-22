<template>
	<div class="main-badge"><slot></slot></div>
</template>

<style scoped>
.main-badge {
	font-family: 'UABrand', sans-serif;
	line-height: 48px;
	display: inline-block;
	color: white;
	background-color: #bfb0e9;
	border-radius: 16px;

	padding: 2px 50px 8px;

	color: #fff;
	text-align: center;

	font-size: 48px;
	font-weight: 700;
}

@media screen and (max-width: 1000px) {
	.main-badge {
		font-size: 20px;

		padding: 6px 40px;
		line-height: 22px;
		border-radius: 10px;
	}
}
</style>
