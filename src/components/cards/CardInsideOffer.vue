<script setup lang="ts">
import MButtonOutline from '../buttons/MButtonOutline.vue'
import MButton from '../buttons/MButton.vue'
import CardInsideOfferPrice from './CardInsideOfferPrice.vue'
</script>

<template>
	<div class="card-inside">
		<div>
			<h4 class="heading">
				Первичный приём врача&nbsp;дерматолога&nbsp;+<br />диагностика&nbsp;Antera&nbsp;3D
			</h4>
			<div class="buttons">
				<MButton>Записаться на приём</MButton>
				<MButtonOutline></MButtonOutline>
			</div>
		</div>

		<CardInsideOfferPrice />
	</div>
</template>

<style scoped>
.card-inside {
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	border-radius: 50px;
	padding: 80px;
	padding-bottom: 54px;
}

.buttons {
	display: flex;
	gap: 20px;
	padding-bottom: 26px;
}

.heading {
	color: #000;
	font-family: 'Pelinka';
	font-size: 34px;
	font-weight: 700;
	max-width: 945px;
	padding-bottom: 70px;
}

@media screen and (max-width: 1000px) {
	.card-inside {
		display: grid;
		padding: 30px 16px 44px;
	}

	.heading {
		font-size: 20px;
		padding-bottom: 160px;
	}

	.buttons {
		display: grid;
		gap: 30px;
	}
}
</style>
