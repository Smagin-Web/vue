<script setup lang="ts">
import PicturePluses3 from '../../../icons/PicturePluses3.vue'
import SectionPlusesPictureText from './SectionPlusesPictureText.vue'
import SectionPlusesShadow from './SectionPlusesShadow.vue'
</script>

<template>
	<div class="card">
		<SectionPlusesShadow class="card-shadow" />
		<div class="wrapper">
			<svg
				width="100%"
				viewBox="0 0 544 466"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 20C0 8.9543 8.95431 0 20 0H394C476.843 0 544 67.1573 544 150V446C544 457.046 535.046 466 524 466H150C67.1573 466 0 398.843 0 316V20Z"
					fill="#EDE4DA"
				/>
			</svg>
			<PicturePluses3 class="picture" />
			<div class="text-wrapper">
				<SectionPlusesPictureText>
					Своё&nbsp;закрытое&nbsp;сообщество, где&nbsp;делимся&nbsp;секретами
					молодости
				</SectionPlusesPictureText>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
}

.card-shadow {
	position: absolute;
	bottom: -30%;
	width: 90%;
	left: -10%;
}

.wrapper {
	position: relative;
	width: 100%;
}
.picture {
	height: auto;
	width: 100%;
	position: absolute;
	bottom: 35%;
	left: 10%;
}

.picture-wrapper {
	padding-left: 80px;
}

.text-wrapper {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;

	padding-bottom: 7.5%;
	padding-left: 10%;
	padding-right: 10%;
}

@media (max-width: 1200px) {
	.picture {
		bottom: 25%;
	}

	.text-wrapper {
		padding-bottom: 20px;
	}
}

@media (max-width: 800px) {
	.card-shadow {
		bottom: -37%;
	}
}
</style>
