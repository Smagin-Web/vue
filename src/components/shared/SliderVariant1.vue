<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import IconSliderArrowRight from '@/components/icons/IconSliderArrowRight.vue'
import { ref } from 'vue'

import { Swiper } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const modules = [Pagination]

let swiperObject: any = undefined
const onSwiperInit = (swiper: any) => (swiperObject = swiper)
const sliderNext = () => swiperObject.slideNext(500)
const sliderPrev = () => swiperObject.slidePrev(500)

const isActiveNext = ref(true)
const isActivePrev = ref(false)

const onChangeSlider = (swiper: any) => {
	if (swiper.realIndex === 0) {
		isActivePrev.value = false
	} else {
		isActivePrev.value = true
	}

	if (swiper.slides.length === swiper.realIndex + 1) {
		isActiveNext.value = false
	} else {
		isActiveNext.value = true
	}
}

const onSwiperEnd = () => {
	setTimeout(() => {
		isActiveNext.value = false
	}, 300)
}

const onSwiperStart = () => {
	setTimeout(() => {
		isActivePrev.value = false
	}, 300)
}
</script>

<template>
	<MContainer class="container-custom">
		<button
			:disabled="!isActivePrev"
			class="button-prev"
			:class="!isActivePrev && 'disabled'"
			:onClick="sliderPrev"
		>
			<IconSliderArrowRight style="transform: rotate(180deg)" />
		</button>
		<button
			:disabled="!isActiveNext"
			class="button-next"
			:class="!isActiveNext && 'disabled'"
			:onClick="sliderNext"
		>
			<IconSliderArrowRight />
		</button>
		<div>
			<div class="content">
				<Swiper
					@reach-end="() => onSwiperEnd()"
					@reach-beginning="() => onSwiperStart()"
					@active-index-change="swiper => onChangeSlider(swiper)"
					@swiper="swiper => onSwiperInit(swiper)"
					class="swiper-custom"
					:modules="modules"
					:initialSlide="0"
					:pagination="{
						clickable: true
					}"
					:breakpoints="{
						1000: {
							slidesPerView: 2
						},
						1100: {
							slidesPerView: 1.5
						},
						1300: {
							slidesPerView: 2
						},
						1400: {
							slidesPerView: 3
						}
					}"
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
	transition: 0.2s;
}

.swiper :deep() .swiper-slide-next,
.swiper :deep() .swiper-slide-prev,
.swiper :deep() .swiper-slide-active {
	opacity: 1;
}

.content {
	padding: 0 100px;
	margin: 0 auto;
}

.container-custom {
	position: relative;
	padding: 0;
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

.button-next.disabled,
.button-prev.disabled {
	opacity: 0.2;
}

.button-next.disabled:hover,
.button-prev.button-next.disabled:hover {
	border: 1px solid transparent;
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

@media (max-width: 600px) {
	.button-next,
	.button-prev {
		opacity: 0.5;
	}
	.button-next:hover,
	.button-prev:hover {
		opacity: 0.5;
		border: none;
	}
}
</style>
