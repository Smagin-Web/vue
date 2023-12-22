<script setup lang="ts">
import CardReviewMaster from '@/components/cards/CardReviewMaster.vue'
import MContainer from '@/components/shared/MContainer.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'

import SliderVariant1 from '@/components/shared/SliderVariant1.vue'
import { SwiperSlide } from 'swiper/vue'
</script>

<template>
	<section class="section-master-review">
		<MContainer>
			<h3 class="h-xl">Другие отзывы о специалисте</h3>
		</MContainer>

		<SliderVariant1>
			<SwiperSlide><CardReviewMaster class="card-review-master" /></SwiperSlide>
			<SwiperSlide><CardReviewMaster class="card-review-master" /></SwiperSlide>
			<SwiperSlide><CardReviewMaster class="card-review-master" /></SwiperSlide>
			<SwiperSlide><CardReviewMaster class="card-review-master" /></SwiperSlide>
			<SwiperSlide><CardReviewMaster class="card-review-master" /></SwiperSlide>
		</SliderVariant1>

		<MContainer>
			<div class="buttons">
				<MButtonBig>Посмотреть больше отзывов</MButtonBig>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-master-review {
	padding-bottom: 100px;
}

.buttons {
	display: flex;
	justify-content: center;
	gap: 30px;
}

.card-review-master {
	margin-right: 6px;
	margin-left: 6px;
}
</style>
