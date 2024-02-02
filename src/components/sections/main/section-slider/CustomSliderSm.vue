<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/mousewheel'
import './slider-custom.css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import CustomSliderCardTemplate from './CustomSliderCardTemplate.vue'
import { dataSlides } from './data'
</script>

<template>
	<section class="section-custom-slider">
		<div class="wrapper" ref="container">
			<Swiper
				:mousewheel="{ releaseOnEdges: true }"
				:slides-per-view="1"
				:space-between="16"
				:modules="[Pagination]"
				:pagination="{
					clickable: true
				}"
			>
				<SwiperSlide v-for="(item, index) in dataSlides" :key="index">
					<CustomSliderCardTemplate
						:title="item.title"
						:subtitle="item.subtitle"
						:badge-name="item.badgeName"
						:badge-color="item.badgeColor"
						:badge-number="item.badgeNumber"
						:p1="item.p1"
						:p2="item.p2"
						:iconSrc="item.iconSrc"
						:iconBigSrc="item.iconBigSrc"
						:iconPng="item.iconPng"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>

<style scoped>
.section-custom-slider {
	overflow: hidden;
}

.swiper {
	overflow: visible;
	padding: 32px 0;
}

.wrapper {
	max-width: calc(100% - 60px);
	margin: 0 auto;
}

.swiper :deep() .swiper-pagination {
	display: flex;
	cursor: pointer;
	justify-content: space-between;
	max-width: 300px;
	margin: 0 auto;
	margin-top: 30px;
}

.swiper :deep() .swiper-pagination-bullet {
	position: relative;
	display: block;
	width: 20px;
	height: 20px;
	background-color: #ede4da;
	border-radius: 100px;
	z-index: 10;
}

.swiper :deep() .swiper-pagination-bullet-active {
	background-color: #ae8c8e;
}
</style>
