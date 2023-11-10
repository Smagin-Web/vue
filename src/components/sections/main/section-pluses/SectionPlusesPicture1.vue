<script setup lang="ts">
import PicturePluses1 from '../../../icons/PicturePluses1.vue'
import SectionPlusesPictureText from './SectionPlusesPictureText.vue'
import SectionPlusesShadow from './SectionPlusesShadow.vue'
</script>

<template>
	<div class="card">
		<SectionPlusesShadow class="card-shadow" />
		<div class="wrapper">
			<svg
				width="100%"
				viewBox="0 0 544 378"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 150C0 67.1573 67.1573 0 150 0H524C535.046 0 544 8.9543 544 20V228C544 310.843 476.843 378 394 378H20C8.95429 378 0 369.046 0 358V150Z"
					fill="#EDE4DA"
				/>
			</svg>
			<PicturePluses1 class="picture" />
			<div class="text-wrapper">
				<h4 class="text">
					<SectionPlusesPictureText>
						Сертифицированные косметологи&nbsp;и&nbsp;врачи
						со&nbsp;стажем&nbsp;от&nbsp;10&nbsp;лет
					</SectionPlusesPictureText>
				</h4>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	padding-top: 224px;
}

.card-shadow {
	position: absolute;
	bottom: -25%;
	width: 80%;
	left: 5%;
}

.wrapper {
	position: relative;
	width: 100%;
}
.picture {
	height: auto;
	width: 80%;
	position: absolute;
	bottom: 42%;
	left: 14%;
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

@media screen and (max-width: 1200px) {
	.card {
		padding-top: 0;
	}
}
</style>
