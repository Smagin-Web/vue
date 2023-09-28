<script setup lang="ts">
import { EffectFade, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/mousewheel'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { ref } from 'vue'

import CustomSliderCard from './CustomSliderCard.vue'
import CustomSliderCard2 from './CustomSliderCard2.vue'
import CustomSliderCard3 from './CustomSliderCard3.vue'
import CustomSliderCard4 from './CustomSliderCard4.vue'
import CustomSliderCard5 from './CustomSliderCard5.vue'
import CustomSliderCard6 from './CustomSliderCard6.vue'
</script>

<template>
	<!-- <div class="wrapper" ref="container" @wheel.prevent="onWheel"> -->
	<div class="wrapper" ref="container">
		<Swiper
			effect="fade"
			:mousewheel="{ releaseOnEdges: true }"
			:threshold="20000"
			:release-on-edges="true"
			:modules="[EffectFade, Mousewheel]"
			:slides-per-view="1"
			:space-between="14"
			@wheel="handleWheel"
		>
			<SwiperSlide>
				<CustomSliderCard />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard2 />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard3 />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard4 />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard5 />
			</SwiperSlide>
			<SwiperSlide>
				<CustomSliderCard6 />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<script lang="ts">
const container = ref<HTMLElement & { swiper?: any } | null>(null);

const handleWheel = (event: WheelEvent) => {
	const swiper = (event.currentTarget as HTMLElement & { swiper?: any })?.swiper;

	if (!swiper) {
		return
	}

	const isEndSlide = swiper.isEnd && event.deltaY > 0
	const isStartSlide = swiper.isBeginning && event.deltaY < 0

	if (isEndSlide || isStartSlide) {
		// Выполняем стандартную прокрутку страницы
		return
	}

	event.stopPropagation()
	scrollToCenter()
}
const scrollToCenter = () => {
	const containerElement = container.value as HTMLElement | null
	if (containerElement) {
		containerElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
	}
}
export default {
	components: {
		Swiper,
		SwiperSlide
	},

	data() {
		return {
			EffectFade,
			Mousewheel
		}
	}
}
</script>

<style scoped>
.card {
	margin-top: 140px;
	height: 650px;
}
.swiper-slide {
	opacity: 0 !important;
	transition: 0.2s;
}

.swiper-slide-active {
	opacity: 1 !important;
}

.wrapper {
	padding-top: 150px;
	padding: 30px;
}
</style>
