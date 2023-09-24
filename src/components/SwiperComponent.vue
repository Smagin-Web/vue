<template>
	<div style="padding-top: 100px">
		<swiper
			:slides-per-view="2"
			:space-between="50"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
		>
			<swiper-slide>Slide</swiper-slide>
			<swiper-slide>Slide 2</swiper-slide>
			<swiper-slide>Slide 3</swiper-slide>
			...
		</swiper>
	</div>
</template>
<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default {
	components: {
		Swiper,
		SwiperSlide
	},
	setup() {
		const onSwiper = (swiper: any) => {
			console.log(swiper)
		}
		const onSlideChange = () => {
			console.log('slide change')
		}
		return {
			onSwiper,
			onSlideChange
		}
	}
}
</script>
