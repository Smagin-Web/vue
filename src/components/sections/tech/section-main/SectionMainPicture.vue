<script setup lang="ts">
import PictureShadow from './PictureShadow.vue'
import SectionPictureBg from './SectionPictureBg.vue'
</script>

<template>
	<div class="picture-wrapper">
		<SectionPictureBg class="picture-bg" />
		<img src="./picture.png" alt="" class="picture-photo" />
		<PictureShadow class="picture-shadow" />
	</div>
</template>

<style scoped>
.picture-wrapper {
	position: relative;
	padding-top: 140px;
}

.picture-bg {
	position: relative;
	width: 100%;
	z-index: 10;
	height: auto;
}

.picture-photo {
	width: 76%;
	position: absolute;
	bottom: 5%;
	left: 10%;
	z-index: 10;
}

.picture-shadow {
	position: absolute;
	z-index: 0;
	bottom: -10%;
	left: 0;
	width: 100%;
	height: auto;
}
</style>
