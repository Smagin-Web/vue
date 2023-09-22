<script setup lang="ts">
import PicturePluses1 from '../../icons/PicturePluses1.vue'
</script>

<template>
	<div class="card">
		<div class="wrapper">
			<svg
				width="100%"
				height="auto"
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
					Сертифицированные косметологи&nbsp;и&nbsp;врачи
					со&nbsp;стажем&nbsp;от&nbsp;10&nbsp;лет
				</h4>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	padding-top: 224px;
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

.text {
	font-family: 'Pelinka';
	font-size: 24px;
	text-align: center;
	font-weight: 700;
	color: black;
}

@media screen and (max-width: 1760px) {
	.text {
		font-size: 20px;
	}
}

@media screen and (max-width: 1600px) {
	.text {
		font-size: 18px;
	}
}
</style>
