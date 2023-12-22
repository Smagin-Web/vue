<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import IconSliderArrowRight from '@/components/icons/IconSliderArrowRight.vue'

import { Swiper } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const modules = [Pagination]

let swiperObject: any = undefined

const onSwiperInit = (swiper: any) => {
	swiperObject = swiper
}

const sliderNext = () => {
	swiperObject.slideNext(500)
}

const sliderPrev = () => {
	swiperObject.slidePrev(500)
}
</script>

<template>
	<MContainer class="container-custom">
		<button class="button-prev" :onClick="sliderPrev">
			<IconSliderArrowRight style="transform: rotate(180deg)" />
		</button>
		<button class="button-next" :onClick="sliderNext">
			<IconSliderArrowRight />
		</button>
		<div>
			<div class="content">
				<Swiper
					@swiper="swiper => onSwiperInit(swiper)"
					class="swiper-custom"
					:modules="modules"
					:centered-slides="true"
					:pagination="{
						clickable: true
					}"
					:initialSlide="1"
					:slidesPerView="'auto'"
					:spaceBetween="24"
				>
					<slot />
				</Swiper>
			</div>
		</div>
	</MContainer>
</template>

<style scoped>
.swiper :deep() .swiper-slide {
	width: fit-content;
}
.content {
	max-width: 544px;
	margin: 0 auto;
}

.container-custom {
	position: relative;
}

.button-next,
.button-prev {
	position: absolute;
	top: 35%;
	padding: 0;
	border: none;
	background: transparent;
	z-index: 1000;
	border-radius: 50%;
	display: block;
	border: 1px solid rgb(27, 26, 26, 0);
	transition: 0.1s;
}

.button-next:hover,
.button-prev:hover {
	opacity: 1;
	border: 1px solid rgb(66, 62, 62);
}

.button-prev {
	left: 30px;
}

.button-next {
	right: 30px;
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
