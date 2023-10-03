<script setup lang="ts">
import { Mousewheel, EffectCreative } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/mousewheel'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { ref } from 'vue'

import CustomSliderCard1 from './CustomSliderCard1.vue'
import CustomSliderCard2 from './CustomSliderCard2.vue'
import CustomSliderCard3 from './CustomSliderCard3.vue'
import CustomSliderCard4 from './CustomSliderCard4.vue'
import CustomSliderCard5 from './CustomSliderCard5.vue'
import CustomSliderCard6 from './CustomSliderCard6.vue'
import CustomSliderCard7 from './CustomSliderCard7.vue'
import CustomSliderCard8 from './CustomSliderCard8.vue'
</script>

<template>
	<div class="wrapper" ref="container" @wheel="handleScroll">
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
			@reachEnd="onSlideEnd"
			@wheel="handleWheel"
		>
			<SwiperSlide>
				<CustomSliderCard1 v-bind:class="{ active: activeSlideIndex === 1 }" />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard2 v-bind:class="{ active: activeSlideIndex === 2 }" />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard3 v-bind:class="{ active: activeSlideIndex === 3 }" />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard4 v-bind:class="{ active: activeSlideIndex === 4 }" />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard5 v-bind:class="{ active: activeSlideIndex === 5 }" />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard6 v-bind:class="{ active: activeSlideIndex === 6 }" />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard7 v-bind:class="{ active: activeSlideIndex === 7 }" />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard8 v-bind:class="{ active: activeSlideIndex === 8 }" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<script lang="ts">
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

const handleScroll = () => {}

const onSlideEnd = () => {}

const onChangeActive = (swiper: any) => {
	activeSlideIndex.value = swiper.activeIndex + 1
}

export default {
	components: {
		Swiper,
		SwiperSlide
	},

	data() {
		return {
			onChangeActive,
			onSlideEnd,
			Mousewheel,
			EffectCreative,
			activeSlideIndex,
			handleScroll
		}
	}
}
</script>

<style scoped>
.swiper {
	padding: 180px 0;
	max-height: 1000px;
	transition: 0.2s;
}

.swiper-slide {
	opacity: 0.1 !important;
	transition: 0.2s;
}

.swiper-slide .card:after {
	content: '';
	position: absolute;
	display: block;
	top: -150px;
	bottom: -150px;
	left: 50px;
	right: 50px;
	border-radius: 100px;
	background-color: #f0dcc8;
	transition: 0.2s;
}

.swiper-slide-prev,
.swiper-slide-next {
	opacity: 1 !important;
	transition: 0.2s;
}

.swiper-slide-prev .card:after,
.swiper-slide-next .card:after {
	top: -90px;
	bottom: -60px;
	left: 0;
	right: 0;
	background-color: #ede4da;
	transition: 0.2s;
}

.swiper-slide-active .card:after {
	opacity: 0;
	transition: 0.2s;
}

.swiper-slide-active {
	opacity: 1 !important;
	transition: 0.2s;
}

/*  */

.wrapper {
	position: relative;

	max-width: calc(1680px + 60px);
	padding-left: 30px;
	padding-right: 30px;
	margin: 0 auto 100px;
	padding-top: 150px;
}

.card {
	position: relative;

	padding: 80px;
	padding-top: 90px;

	border-radius: 100px;
	background: #fff;
	height: 650px;
	z-index: 30;
}

.slider-backcards {
	position: absolute;
	bottom: 0;
	top: 0;
	right: 0;
	left: 0;

	display: flex;
	justify-content: center;
}

.slider-backcard-1 {
	position: absolute;
	bottom: 0;
	left: 100px;
	right: 100px;
	height: 50%;

	border-radius: 100px;
	background: #ede4da;
}

.slider-backcard-2 {
	position: absolute;
	bottom: -50px;
	left: 150px;
	right: 150px;
	height: 50%;

	border-radius: 100px;
	background: #f0dcc8;
}
</style>
