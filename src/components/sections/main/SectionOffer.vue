<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import MBadge from '../../ui/MBadge.vue'
import CardInsideOffer from '../../cards/CardInsideOffer.vue'
import SectionOfferList from './SectionOfferList.vue'
</script>

<template>
	<section class="section-offer">
		<MContainer>
			<template #children>
				<div class="card">
					<div class="card-badge">
						<MBadge>Диагностика</MBadge>
					</div>
					<div class="card-content">
						<div>
							<h3 class="heading">Хочешь здоровую кожу?</h3>

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
	</section>
</template>

<style scoped>
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
	gap: 20px;
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
}
.image-more {
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateX(-62%) translateY(-54%);
	z-index: 20;
}

@media screen and (max-width: 1000px) {
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

	.image {
		width: 100%;
		height: auto;
	}

	.image-more {
		width: 180px;
		height: auto;
		left: auto;
		top: auto;
		right: -10%;
		bottom: -35%;
		transform: none;
	}

	.card-badge {
		left: 50%;
		top: 0;
		transform: translateY(-50%) translateX(-50%);
	}
}
</style>
