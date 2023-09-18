<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import MBadge from '../../ui/MBadge.vue'
import CardInsideOffer from '../../cards/CardInsideOffer.vue'
import SectionOfferList from './SectionOfferList.vue'
import Heading from '../../typography/Heading.vue'
</script>

<template>
	<section class="section-offer">
		<MContainer>
			<template #children>
				<div class="card">
					<div class="card-badge">
						<MBadge></MBadge>
					</div>
					<div class="card-content">
						<div>
							<Heading
								font-size-heading="42px"
								text-align-heading="left"
								pb="40px"
							>
								Хочешь здоровую кожу?
							</Heading>

							<SectionOfferList />
						</div>
						<div class="image-container">
							<img src="./more.png" class="image-more" />
							<img src="./offer.png" class="image" />
						</div>
					</div>
					<CardInsideOffer />
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-offer {
	padding-bottom: 100px;
}
.card {
	position: relative;
	border-radius: 100px;
	background: #ede4da;
	padding: 80px;
	padding-bottom: 50px;
}

.card-content {
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
}
</style>
