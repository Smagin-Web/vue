<script setup lang="ts">
import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
import MButton from '@/components/buttons/MButton.vue'
import CardSale from '@/components/card-elements/CardSale.vue'

import MContainer from '@/components/shared/MContainer.vue'
</script>

<template>
	<section class="section-service">
		<MContainer>
			<div class="service-card">
				<div class="service-card-content">
					<h4 class="h-l service-card-title">Газожидкостный пилинг Jet Peel</h4>

					<h5 class="text-lg service-card-subtitle">
						Lorem ipsum dolor sit amet consectetur. Iaculis tristique turpis
						pretium elementum auctor aliquam.
					</h5>

					<p class="text-sm service-card-text">
						Краткое описание или подробности услуги Lorem ipsum dolor sit amet
						consectetur. Iaculis tristique turpis pretium elementum auctor
						aliquam. Senectus aliquet eget quis posuere amet id hac sit potenti.
						Id sem malesuada vitae dolor ut nibh morbi tempus sapien
					</p>

					<div class="service-card-buttons">
						<MButton>Записаться на приём</MButton>
						<MButtonOutline>Получить консультацию</MButtonOutline>
					</div>
				</div>
				<div class="service-card-right">
					<img src="./tech.png" alt="" class="service-card-img" />
					<CardSale />
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-service {
	padding-bottom: 160px;
}

.service-card {
	border-radius: 100px;
	background: #ede4da;
	padding: 80px;
	display: flex;
	justify-content: space-between;
}

.service-card-content {
	max-width: 746px;
}

.service-card-right {
	display: grid;
	gap: 70px;
}

.service-card-title {
	padding-bottom: 40px;
}

.service-card-subtitle {
	padding-bottom: 30px;
}

.service-card-text {
	padding-bottom: 114px;
}

.service-card-buttons {
	display: flex;
	gap: 20px;
}

@media (max-width: 1500px) {
	.service-card {
		flex-direction: column-reverse;
	}
	.service-card-right {
		display: grid;
		grid-template-columns: 1fr max-content;
		padding-bottom: 32px;
	}
	.service-card-img {
		max-width: 600px;
		width: 100%;
	}
	.service-card-text {
		padding-bottom: 32px;
	}
}

@media (max-width: 1000px) {
	.service-card {
		padding: 20px;
		border-radius: 20px;
	}
	.service-card-subtitle {
		padding-bottom: 16px;
	}
	.service-card-title {
		padding-bottom: 16px;
	}
	.service-card-right {
		gap: 24px;
	}
	.section-service {
		padding-bottom: 60px;
	}
}

@media (max-width: 500px) {
	.service-card-right {
		grid-template-columns: 1fr;
	}
	.service-card-buttons {
		flex-direction: column;
	}
}
</style>
