<script setup lang="ts">
import PicturePluses2 from '../../icons/PicturePluses2.vue'
</script>

<template>
	<div class="card">
		<div class="wrapper">
			<svg
				width="100%"
				height="auto"
				viewBox="0 0 544 630"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="544" height="630" rx="100" fill="#EDE4DA" />
			</svg>
			<PicturePluses2 class="picture" />
			<div class="text-wrapper">
				<h4 class="text">
					Парк&nbsp;лицензированной аппаратной&nbsp;косметологии
				</h4>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	padding-top: 60px;
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
