<script setup lang="ts"></script>

<template>
	<div class="picture-wrapper">
		<img src="./bg.png" alt="" class="picture-img-bg" />
		<div class="picture-img-head-wrapper">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.picture-wrapper {
	position: relative;
	max-width: 818px;
	width: 100%;
	height: fit-content;
}

.picture-img-bg {
	width: 100%;
	height: auto;
}

.picture-img-head-wrapper img {
	position: absolute;
	width: 81%;
	left: 10%;
	top: -1%;
}
</style>
