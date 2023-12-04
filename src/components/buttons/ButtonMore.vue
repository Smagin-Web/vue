<template>
	<button class="button-more" type="button"><slot /></button>
</template>

<style scoped>
.button-more {
	color: #ae8c8e;
	font-family: 'BrisaSans';
	font-size: 24px;
	font-weight: 700;

	border-radius: 100px;
	background: rgba(174, 140, 142, 0.1);
	backdrop-filter: blur(50px);
	border: none;

	padding: 25px 90px;
	white-space: nowrap;
}

.button-more:hover {
	background: rgba(174, 140, 142, 0.2);
	opacity: 1;
}
</style>
