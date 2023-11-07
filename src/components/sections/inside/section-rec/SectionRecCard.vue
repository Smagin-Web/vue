<script setup lang="ts">
import MButton from '@/components/buttons/MButton.vue'
</script>

<template>
	<div class="card">
		<div class="card-image-wrapper">
			<img class="card-image" src="./picture.png" alt="" />
		</div>

		<p class="card-text">
			Увлажняющий крем-филлер для лица с гиалуроновым наполнителем Hydro Active
			Hyaluron Refill Cream — DR.GRANDEL
		</p>

		<h6 class="card-price">6 350₽</h6>
		<div class="card-button-wrapper">
			<MButton class="card-button">Хочу</MButton>
		</div>
	</div>
</template>

<style scoped>
.card {
	max-width: 544px;
	border-radius: 30px;
	background: #fff;
	padding: 40px;
	padding-top: 70px;
}

.card-image-wrapper {
	display: flex;
	justify-content: center;
	margin-bottom: 38px;
	height: 295px;
}

.card-image {
	height: 290px;
	width: auto;
	display: block;
}

.card-text {
	color: #6d6364;
	font-size: 22px;
	padding-bottom: 52px;
}

.card-price {
	padding-bottom: 20px;
	color: #000;
	font-size: 34px;
	font-family: 'Pelinka', sans-serif;
}

.card-button-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

.card-button {
	width: 100%;
	max-width: 380px;
	line-height: 30px;
	padding: 24px 0;
}
</style>
