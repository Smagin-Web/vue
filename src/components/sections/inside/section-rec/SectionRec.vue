<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionRecCard from './SectionRecCard.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const modules = [Pagination]
</script>

<template>
	<section class="section-procedures">
		<MContainer>
			<h3 class="heading-section heading">Рекомендованная косметика</h3>
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
							300: { slidesPerView: 1, spaceBetween: 0 },
							600: { slidesPerView: 1, spaceBetween: 0 },
							1000: { slidesPerView: 1, spaceBetween: 0 }
						}"
					>
						<SwiperSlide><SectionRecCard /></SwiperSlide>
						<SwiperSlide><SectionRecCard /></SwiperSlide>
						<SwiperSlide><SectionRecCard /></SwiperSlide>
						<SwiperSlide><SectionRecCard /></SwiperSlide>
						<SwiperSlide><SectionRecCard /></SwiperSlide>
					</Swiper>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-procedures {
	padding-bottom: 160px;
}

.heading {
	padding-bottom: 50px;
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

@media (max-width: 1875px) {
	.container-custom {
		padding: 0 !important;
	}

	.content {
		max-width: 500px;
	}
}

@media (max-width: 1500px) {
	.section-procedures {
		padding-bottom: 100px;
	}
}

@media (max-width: 800px) {
	.section-procedures {
		padding-bottom: 10px;
	}
	.content {
		max-width: 400px;
	}
	.swiper-custom :deep() .swiper-pagination-bullet {
		width: 40px;
		height: 14px;
	}
	.swiper-custom :deep() .swiper-pagination {
		gap: 24px;
		margin-top: 32px;
	}
}
</style>
