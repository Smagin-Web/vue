<script setup lang="ts">
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
	<div class="card">
		<a href="https://youtube.com" target="_blank">
			<div class="card-img-wrapper">
				<img src="./Avatar.png" class="card-img" />
				<IconPlay class="card-icon" />
			</div>
		</a>

		<a href="https://youtube.com" target="_blank">
			<h5 class="card-heading">Ольга Заика</h5>
		</a>

		<a href="https://youtube.com" target="_blank">
			<p class="card-text">Главный врач, врач-косметолог</p>
		</a>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	max-width: 402px;
	min-width: 260px;
}

.card-icon {
	position: absolute;
	opacity: 0;
	transition: 0.2s;

	bottom: 55px;
	left: 50%;
	transform: translateX(-50%);
}

.card:hover .card-icon {
	opacity: 1;
	z-index: 20;
}

.card-img {
	width: 100%;
	height: auto;
	transition: 0.2s;
}

.card-img-wrapper:after {
	content: '';
	display: block;
	position: absolute;
	left: -3px;
	right: -3px;
	bottom: -3px;
	top: -3px;
	border-radius: 50%;
	transition: 0.2s ease;
	border: 1px solid #f4eee8;
}

.card:hover .card-img-wrapper:after {
	border: 10px solid #f4eee8;
}

.card-img-wrapper {
	position: relative;
	width: 100%;
	height: auto;
	transition: 0.2s;
}

.card-heading {
	text-align: center;
	font-size: 30px;
	padding-top: 38px;
	padding-bottom: 22px;
}

.card-text {
	color: #6d6364;
	text-align: center;
	font-family: 'BrisaSans';
	font-size: 22px;
}

@media screen and (max-width: 1000px) {
	.card {
		max-width: 300px;
	}

	.card-heading {
		font-size: 17px;
		padding-bottom: 18px;
	}

	.card-text {
		font-size: 16px;
	}

	.card-icon {
		opacity: 1;
	}
}
</style>
