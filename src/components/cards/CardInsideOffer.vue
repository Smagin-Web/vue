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
			<CardInsideOfferPrice class="prices" />
			<div class="buttons">
				<MButton>Записаться на приём</MButton>
				<MButtonOutline>Задать вопрос</MButtonOutline>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-inside {
	background-color: #fff;
	border-radius: 50px;
	padding: 80px;
	position: relative;
}

.prices {
	position: absolute;
	right: 90px;
	bottom: 60px;
}

.buttons {
	display: flex;
	gap: 20px;
}

.heading {
	color: #000;
	font-family: 'Pelinka';
	font-size: 34px;
	font-weight: 700;
	max-width: 945px;
	padding-bottom: 70px;
}

@media (max-width: 1500px) {
	.buttons {
		display: grid;
		gap: 30px;
		max-width: 500px;
	}
	.heading {
		font-size: 28px;
	}
}

@media (max-width: 1300px) {
	.heading {
		padding-bottom: 40px;
	}
	.prices {
		position: static;
		display: flex;
		flex-direction: row-reverse;
		justify-content: start;
		padding-bottom: 40px;
		gap: 24px;
	}

	.buttons {
		display: flex;
		max-width: 100%;
	}
}

@media (max-width: 1100px) {
	.card-inside {
		display: grid;
		padding: 44px 32px;
	}

	.heading {
		font-size: 20px;
		padding-bottom: 24px;
	}

	.prices {
		padding-bottom: 10px;
	}

	.buttons button {
		font-size: 20px;
	}
}

@media (max-width: 700px) {
	.buttons {
		display: grid;
		gap: 24px;
	}

	.buttons button {
		font-size: 16px;
	}
}

@media (max-width: 600px) {
	.heading {
		font-size: 18px;
	}
	.card-inside {
		padding: 44px 16px;
	}
}
</style>
