<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import MBadge from '../../ui/MBadge.vue'
import CardInsideOffer from '../../cards/CardInsideOffer.vue'
import SectionOfferList from './SectionOfferList.vue'
</script>

<template>
	<section class="section-offer">
		<div class="section-offer-container">
			<MContainer>
				<template #children>
					<div class="card">
						<div class="card-badge">
							<MBadge>Диагностика</MBadge>
						</div>
						<div class="card-content">
							<div>
								<h3 class="heading">Хочешь&nbsp;здоровую&nbsp;кожу?</h3>

								<SectionOfferList />
							</div>
							<div class="image-container">
								<img src="./more.png" class="image-more" />
								<img src="./offer.png" class="image" />
							</div>
						</div>
						<CardInsideOffer class="card-inside" />
					</div>
				</template>
			</MContainer>
		</div>
	</section>
</template>

<style scoped>
.section-offer-container {
	padding-top: 50px;
}
.section-offer {
	padding-bottom: 100px;
	overflow-x: hidden;
}

.heading {
	color: #000;
	font-family: 'Pelinka';
	font-size: 42px;
	font-weight: 700;
	padding-bottom: 40px;
}

.card {
	position: relative;
	border-radius: 100px;
	background: #ede4da;
	padding: 80px;
	padding-bottom: 50px;
}

.card-content {
	padding-bottom: 50px;
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 150px;
}

.card-badge {
	position: absolute;
	left: 80px;
	top: 0;
	transform: translateY(-50%);
}

.image-container {
	position: relative;
}
.image {
	max-width: 600px;
	width: 100%;
}
.image-more {
	height: 100%;
	position: absolute;
	left: 0;
	padding: 3px 0;
	transform: translateX(-62%);
	z-index: 20;
}

@media (max-width: 1600px) {
	.heading {
		font-size: 38px;
	}
}

@media (max-width: 1400px) {
	.card-content {
		gap: 100px;
	}
}

@media (max-width: 1300px) {
	.card-content {
		display: grid;
	}

	.image-container {
		max-width: 500px;
		height: auto;
	}
	.image-more {
		height: 90%;
		right: 0;
		transform: translateY(50%) translateX(40%);
		left: auto;
		padding: 0;
	}
}

@media (max-width: 1000px) {
	.heading {
		font-size: 20px;
		padding-bottom: 38px;
	}

	.card {
		padding: 12px;
		padding-top: 50px;
		border-radius: 40px;
	}

	.card-content {
		display: grid;
		gap: 38px;
		padding-bottom: 30px;
	}

	.card-badge {
		left: 50%;
		top: 0;
		transform: translateY(-50%) translateX(-50%);
	}
}

@media (max-width: 600px) {
	.image-more {
		/* transform: translateY(50%) translateX(40%); */
		padding-right: 40px;
	}
}
</style>
