<script setup lang="ts">
import CardReviewMaster from '@/components/cards/CardReviewMaster.vue'
import MContainer from '@/components/shared/MContainer.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'

import SliderVariant1 from '@/components/shared/SliderVariant1.vue'
import { SwiperSlide } from 'swiper/vue'
</script>

<template>
	<section class="section-master-review">
		<MContainer>
			<h3 class="h-xl">Последние отзывы о специалисте</h3>
		</MContainer>

		<SliderVariant1>
			<SwiperSlide><CardReviewMaster /></SwiperSlide>
			<SwiperSlide><CardReviewMaster /></SwiperSlide>
			<SwiperSlide><CardReviewMaster /></SwiperSlide>
			<SwiperSlide><CardReviewMaster /></SwiperSlide>
			<SwiperSlide><CardReviewMaster /></SwiperSlide>
		</SliderVariant1>

		<MContainer>
			<div class="buttons">
				<MButtonBig>Посмотреть больше</MButtonBig>
				<MButtonOutlineBig>Оставить отзыв</MButtonOutlineBig>
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
</style>
