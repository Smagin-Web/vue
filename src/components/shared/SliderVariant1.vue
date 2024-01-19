<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import IconSliderArrowRight from '@/components/icons/IconSliderArrowRight.vue'
import { ref } from 'vue'

import { Swiper } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const modules = [Pagination]

let swiperObject: any = undefined

const onSwiperInit = (swiper: any) => {
	swiperObject = swiper
}

const isActiveNext = ref(true)
const isActivePrev = ref(true)

const sliderNext = () => {
	swiperObject.slideNext(500)
	if (swiperObject.slides.length !== swiperObject.realIndex + 1) {
		isActivePrev.value = true
	} else {
		isActiveNext.value = false
	}
}

const sliderPrev = () => {
	swiperObject.slidePrev(500)
	if (swiperObject.realIndex !== 0) {
		isActiveNext.value = true
	} else {
		isActivePrev.value = false
	}
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
					@swiper="swiper => onSwiperInit(swiper)"
					class="swiper-custom"
					:modules="modules"
					:centered-slides="true"
					:pagination="{
						clickable: true
					}"
					:initialSlide="1"
					:slidesPerView="'auto'"
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
	opacity: 0.5;
	transition: opacity 0.2s;
}

.swiper :deep() .swiper-slide-active,
.swiper :deep() .swiper-slide-next,
.swiper :deep() .swiper-slide-prev {
	opacity: 1;
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
