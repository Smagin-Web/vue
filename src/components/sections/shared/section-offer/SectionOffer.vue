<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import CardInsideOffer from '../../../cards/CardInsideOffer.vue'
import SectionOfferList from './SectionOfferList.vue'
import BigBadge from '@/components/ui/big-badge/BigBadge.vue'
</script>

<template>
	<section class="section-offer">
		<div class="section-offer-container">
			<MContainer>
				<div class="card">
					<BigBadge style="background: #bfb0e9">Диагностика</BigBadge>
					<div class="card-content">
						<div class="card-content-left">
							<h3 class="h-l heading">Хочешь&nbsp;здоровую&nbsp;кожу?</h3>

							<SectionOfferList />
						</div>
						<div class="image-container">
							<a
								href="https://www.youtube.com/watch?v=DK1uUY_BN68"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="./more.png" class="image-more" />
							</a>
							<img src="./offer.png" class="image" />
						</div>
					</div>
					<CardInsideOffer class="card-inside" />
				</div>
			</MContainer>
		</div>
	</section>
</template>

<style scoped>
.section-offer {
	padding-top: 100px;
	padding-bottom: 100px;
	overflow: hidden;
}

.heading {
	padding-bottom: 40px;
}

.card {
	position: relative;
	border-radius: 100px;
	background: #ede4da;
	padding: 80px;
}

.card-content-left {
	width: 700px;
	flex-shrink: 0;
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
	.card-content-left {
		width: 650px;
	}
}

@media (max-width: 1400px) {
	.card-content {
		gap: 100px;
	}
	.card-content-left {
		width: 600px;
	}
	.card {
		border-radius: 48px;
		padding: 80px 40px 40px;
	}
}

@media (max-width: 1300px) {
	.card-content-left {
		width: 560px;
	}
}

@media (max-width: 1200px) {
	.card-content {
		display: grid;
		gap: 50px;
	}
	.card-content-left {
		width: 100%;
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
		padding-bottom: 38px;
	}
	.card {
		padding: 12px;
		padding-top: 50px;
		border-radius: 20px;
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
	.section-offer {
		padding-bottom: 50px;
	}
	.image-more {
		padding-right: 40px;
	}
	.section-offer-list {
		max-width: 300px;
	}
}
</style>
