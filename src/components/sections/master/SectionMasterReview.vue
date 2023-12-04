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
			<h3 class="heading-section">Последние отзывы о специалисте</h3>
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

.content {
	max-width: 544px;
	margin: 0 auto;
}

.swiper-custom :deep() .swiper-pagination-bullet {
	position: relative;
	display: block;
	width: 60px;
	height: 20px;
	background-color: #ede4da;
	border-radius: 100px;
	z-index: 10;
}

.swiper-custom :deep() .swiper-pagination-bullet-active {
	background-color: #ae8c8e;
}

.swiper-custom :deep() .swiper-pagination {
	display: flex;
	cursor: pointer;
	justify-content: center;
	gap: 24px;
	margin-top: 50px;
}

.swiper {
	padding-bottom: 100px;
	overflow: visible;
}

.buttons {
	display: flex;
	justify-content: center;
	gap: 30px;
}
</style>
