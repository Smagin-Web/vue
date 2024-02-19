<script setup >
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import CardInfo from '@/components/card-elements/CardInfo.vue'
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

		<CardInfo text="6 350₽" />
		<div class="card-button-wrapper">
			<MButtonBig class="card-button">Хочу</MButtonBig>
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
	margin: 0 12px;
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
	padding-bottom: 32px;
	color: #000;
	font-size: 34px;
	font-family: 'Pelinka', sans-serif;
}

.card-button-wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
}

@media (max-width: 1200px) {
	.card {
		max-width: 500px;
		padding: 30px;
		padding-top: 50px;
	}
	.card-image-wrapper {
		height: 240px;
	}
	.card-image {
		height: 240px;
	}
	.card-text {
		font-size: 18px;
		padding-bottom: 28px;
	}
	.card-price {
		font-size: 28px;
	}

	.card-button {
		border-radius: 30px;
		width: 270px;
	}
}

@media (max-width: 800px) {
	.card-image-wrapper {
		height: 220px;
	}
	.card-image {
		height: 220px;
	}
	.card-text {
		font-size: 16px;
	}
	.card {
		max-width: 400px;
		border-radius: 20px;
	}
	.card-price {
		font-size: 24px;
	}
}
</style>
