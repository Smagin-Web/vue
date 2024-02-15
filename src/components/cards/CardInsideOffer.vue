<script setup lang="ts">
import MButtonOutline from '../buttons/MButtonOutline.vue'
import MButton from '../buttons/MButton.vue'
import CardInsideOfferPrice from './CardInsideOfferPrice.vue'
import { useModalsStore } from '@/stores/modals'

const store = useModalsStore()
</script>

<template>
	<div class="card-inside">
		<div>
			<h4 class="heading h-md">
				Первичный приём врача&nbsp;дерматолога&nbsp;+<br />диагностика&nbsp;JANUS&nbsp;PRO
			</h4>
			<CardInsideOfferPrice class="prices" />
			<div class="buttons">
				<MButton @click="store.openModalApplication">Записаться на приём</MButton>

				<MButtonOutline>
					<a
						class="absolute-link"
						href="https://wa.me/79774122010"
						target="_blank"
						rel="noopener noreferrer"
					/>
					Задать вопрос
				</MButtonOutline>
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
	max-width: 945px;
	padding-bottom: 70px;
}

@media (max-width: 1400px) {
	.heading {
		padding-bottom: 32px;
	}
	.card-inside {
		border-radius: 30px;
		padding: 44px 32px;
	}
	.prices {
		bottom: 30px;
	}
	.buttons {
		display: flex;
		max-width: 100%;
	}
}

@media (max-width: 1200px) {
	.buttons {
		max-width: 400px;
		display: grid;
	}
}

@media (max-width: 1000px) {
	.card-inside {
		border-radius: 14px;
	}
	.buttons button {
		font-size: 20px;
	}
}

@media (max-width: 800px) {
	.card-inside {
		padding: 50px 16px 40px;
	}
	.prices {
		right: 26px;
	}
	.buttons {
		max-width: 270px;
	}
}

@media (max-width: 600px) {
	.prices {
		position: static;
		display: flex;
		flex-direction: row-reverse;
		justify-content: start;
		padding-bottom: 40px;
		gap: 24px;
	}
}
</style>
