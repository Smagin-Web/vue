<script setup >
import SectionBannerShadow from './SectionBannerShadow.vue'
import PictureBgBanner from '../../../icons/PictureBgBanner.vue'
</script>

<template>
	<div class="banner">
		<div>
			<img class="banner-picture" src="./banner.png" alt="" />
			<PictureBgBanner class="banner-background" />
			<SectionBannerShadow class="banner-shadow" />
			<SectionBannerShadow class="banner-shadow banner-shadow-top" />
		</div>
	</div>
</template>

<style scoped>
.banner {
	display: grid;
	grid-template-rows: max-content;
	width: 100%;
	position: relative;
}
.banner-picture {
	display: block;
	width: 100%;

	position: absolute;
	bottom: 0;
	z-index: 20;
}

.banner-background {
	position: relative;
	width: 100%;
	height: auto;

	z-index: 10;
}

.banner-shadow {
	height: 120%;
	width: auto;
	position: absolute;
	bottom: -20%;
	right: 0;
}

.banner-shadow-top {
	bottom: auto;
	top: -22%;
	right: -2%;
}
</style>
