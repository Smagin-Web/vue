<script setup lang="ts">
import CardReviewMaster from '@/components/cards/CardReviewMaster.vue'
import MContainer from '@/components/shared/MContainer.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const modules = [Pagination]
</script>

<template>
	<section class="section-master-review">
		<MContainer>
			<h3 class="heading-section">Последние отзывы о специалисте</h3>
		</MContainer>

		<MContainer class="container-custom">
			<div style="overflow: hidden">
				<div class="content">
					<Swiper
						class="swiper-custom"
						:modules="modules"
						:pagination="{
							clickable: true
						}"
						:breakpoints="{
							300: { slidesPerView: 1, spaceBetween: 24 },
							600: { slidesPerView: 1, spaceBetween: 24 },
							1000: { slidesPerView: 1, spaceBetween: 24 }
						}"
					>
						<SwiperSlide><CardReviewMaster /></SwiperSlide>
						<SwiperSlide><CardReviewMaster /></SwiperSlide>
						<SwiperSlide><CardReviewMaster /></SwiperSlide>
						<SwiperSlide><CardReviewMaster /></SwiperSlide>
						<SwiperSlide><CardReviewMaster /></SwiperSlide>
					</Swiper>
				</div>
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
</style>
