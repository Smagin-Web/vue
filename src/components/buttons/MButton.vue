<template>
	<button class="main-button"><slot></slot></button>
</template>

<style scoped>
.main-button {
	color: white;
	background-color: black;

	border-radius: 100px;
	border: black 2px solid;

	padding: 15px 45px;

	font-size: 24px;
	font-weight: 700;

	cursor: pointer;
}
</style>
