<script setup lang="ts">
import { EffectFade, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/mousewheel'
import { Swiper, SwiperSlide } from 'swiper/vue'

import CustomSliderCardBlack from './CustomSliderCardBlack.vue'
import CustomSliderCard from './CustomSliderCard.vue'
import CustomSliderCard2 from './CustomSliderCard2.vue'
import CustomSliderCard3 from './CustomSliderCard3.vue'
import CustomSliderCard4 from './CustomSliderCard4.vue'
import CustomSliderCard5 from './CustomSliderCard5.vue'
import CustomSliderCard6 from './CustomSliderCard6.vue'
</script>

<template>
	<div class="wrapper" @wheel="onWheel">
		<Swiper
			effect="fade"
			:mousewheel="{ releaseOnEdges: true }"
			:threshold="20000"
			:release-on-edges="true"
			:modules="[EffectFade, Mousewheel]"
			:slides-per-view="1"
			:space-between="14"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
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
const onSwiper = (swiper: any) => {
	console.log(swiper)
}
const onSlideChange = () => {
	console.log('slide change')
}
const onWheel = (event: WheelEvent) => {
	event.stopPropagation()
}
export default {
	components: {
		Swiper,
		SwiperSlide
	},

	data() {
		return {
			onSwiper,
			onSlideChange,
			EffectFade,
			Mousewheel
		}
	}
}
</script>

<style scoped>
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
