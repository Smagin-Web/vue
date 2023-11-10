<script setup lang="ts">
import PicturePluses2 from '../../../icons/PicturePluses2.vue'
import SectionPlusesPictureText from './SectionPlusesPictureText.vue'
import SectionPlusesShadow from './SectionPlusesShadow.vue'
</script>

<template>
	<div class="card">
		<SectionPlusesShadow class="card-shadow" />
		<div class="wrapper">
			<svg
				width="100%"
				viewBox="0 0 544 630"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="544" height="630" rx="100" fill="#EDE4DA" />
			</svg>
			<PicturePluses2 class="picture" />
			<div class="text-wrapper">
				<SectionPlusesPictureText>
					Парк&nbsp;лицензированной аппаратной&nbsp;косметологии
				</SectionPlusesPictureText>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	padding-top: 60px;
}

.card-shadow {
	position: absolute;
	bottom: -20%;
	width: 90%;
	left: 6%;
}

.wrapper {
	position: relative;
	width: 100%;
}
.picture {
	height: auto;
	width: 100%;
	position: absolute;
	bottom: 15%;
}

.text-wrapper {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;

	padding-top: 10%;
	padding-left: 10%;
	padding-right: 10%;
}
</style>
