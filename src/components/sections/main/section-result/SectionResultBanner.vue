<script setup lang="ts">
import PictureResult from '../../../icons/PictureResult.vue'
import SectionResultShadow from './SectionResultShadow.vue'
</script>

<template>
	<div class="banner">
		<SectionResultShadow class="picture-shadow" />
		<div class="wrapper">
			<PictureResult class="picture" />
			<svg
				width="100%"
				viewBox="0 0 686 442"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 150C0 67.1573 67.1573 0 150 0H666C677.046 0 686 8.95431 686 20V292C686 374.843 618.843 442 536 442H20C8.95432 442 0 433.046 0 422V150Z"
					fill="#EDE4DA"
				/>
			</svg>
		</div>
	</div>
</template>

<style scoped>
.banner {
	position: relative;
}
.wrapper {
	position: relative;
	max-width: 686px;
}

.picture-shadow {
	position: absolute;
	height: 100%;
	width: auto;
	bottom: -22%;
	left: -5%;
}

.picture {
	display: block;
	width: 61%;
	height: auto;

	position: absolute;
	bottom: 0;
	left: 21%;
}
</style>
