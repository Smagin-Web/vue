<script setup lang="ts">
import { Mousewheel, EffectCreative } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/mousewheel'
import './slider-custom.css'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { ref } from 'vue'

import CustomSliderCardTemplate from './CustomSliderCardTemplate.vue'
import { dataSlides } from './data'

let activeSlideIndex = ref(1)
const container = ref<(HTMLElement & { swiper?: any }) | null>(null)
const isLockScroll = ref(true)

const handleWheel = (event: WheelEvent) => {
	const swiper = (event.currentTarget as HTMLElement & { swiper?: any })?.swiper

	const isEndSlide: boolean = swiper.isEnd && event.deltaY > 0
	const isStartSlide: boolean = swiper.isBeginning && event.deltaY < 0

	// Если скролл заблокирован - блокируем событие, скроллим на центр слайдера
	if (isLockScroll.value === true) {
		scrollToCenter()
		event.preventDefault()
	}

	// Если слайд последний или первый - запускаем разблокировку скролла
	if (isEndSlide || isStartSlide) {
		setTimeout(() => (isLockScroll.value = false), 300)
		return
	} else {
		isLockScroll.value = true
	}
}

const scrollToCenter = () => {
	const containerElement = container.value as HTMLElement | null
	if (containerElement) {
		containerElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
}

const onChangeActive = (swiper: any) => {
	activeSlideIndex.value = swiper.activeIndex + 1
}
</script>

<template>
	<div class="wrapper" ref="container">
		<Swiper
			grab-cursor
			:effect="'creative'"
			:creativeEffect="{
				prev: {
					translate: [0, -100, 0],
					scale: 0.8
				},
				next: {
					translate: [0, 100, 0],
					scale: 0.8
				}
			}"
			:mousewheel="{ releaseOnEdges: true }"
			:threshold="20000"
			:release-on-edges="true"
			:modules="[EffectCreative, Mousewheel]"
			:slides-per-view="1"
			@activeIndexChange="onChangeActive"
			@wheel="handleWheel"
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
				/>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
	padding: 100px 30px;
	padding-top: 0;
	max-width: calc(1680px + 60px);
	margin: 0 auto;
}

.swiper {
	padding: 100px 0;
	max-height: 1000px;
	transition: 0.2s;
}

.swiper-slide {
	opacity: 1 !important;
	transition: 0.2s;
}

/* Для всех карточек делаем прозрачный контент */

.swiper-slide :deep() .card * {
	opacity: 0;
	transition: 0.2s;
}

/* Делаем непрозрачный контент для активной карточки */

.swiper-slide-active :deep() .card * {
	opacity: 1;
}

/* Меняем фон предыдущей карточки и перемещаем её вверх на 80px */

.swiper-slide-prev :deep() .card {
	top: -80px;
	background-color: #ede4da;
}

/* Меняем фон следующей карточки и перемещаем её вниз на 80px */

.swiper-slide-next :deep() .card {
	bottom: -60px;
	background-color: #ede4da;
}

.swiper-slide-active .card:after {
	opacity: 0;
	transition: 0.2s;
}

.swiper-slide-active {
	opacity: 1 !important;
	transition: 0.2s;
}

@media (max-width: 1200px) {
	.wrapper {
		padding-bottom: 30px;
	}
}

@media (max-width: 1000px) {
	.swiper {
		padding-bottom: 60px;
		max-height: 100%;
		height: auto;
	}

	.swiper-slide-prev :deep() .card {
		top: -20px;
	}
	.swiper-slide-next :deep() .card {
		bottom: -20px;
	}
}
</style>
