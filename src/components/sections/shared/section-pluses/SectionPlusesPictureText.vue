<template>
	<h4 class="text">
		<slot></slot>
	</h4>
</template>

<style scoped>
.text {
	font-family: 'Pelinka';
	font-size: 24px;
	text-align: center;
	font-weight: 700;
	color: black;
}

@media (max-width: 1760px) {
	.text {
		font-size: 20px;
	}
}

@media (max-width: 1600px) {
	.text {
		font-size: 18px;
	}
}

@media (max-width: 1450px) {
	.text {
		font-size: 16px;
	}
}
</style>
