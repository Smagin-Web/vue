<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SliderVariant1 from '@/components/shared/SliderVariant1.vue'

import { SwiperSlide } from 'swiper/vue'
import CardOther from './CardOther.vue'
</script>

<template>
	<section class="section-other">
		<MContainer>
			<h2 class="h-xl">Другие услуги</h2>
		</MContainer>
		<SliderVariant1 class="section-other-swiper">
			<SwiperSlide><CardOther /></SwiperSlide>
			<SwiperSlide><CardOther /></SwiperSlide>
			<SwiperSlide><CardOther /></SwiperSlide>
			<SwiperSlide><CardOther /></SwiperSlide>
			<SwiperSlide><CardOther /></SwiperSlide>
		</SliderVariant1>
	</section>
</template>

<style scoped>
.section-other {
	padding-bottom: 120px;
}

.section-other-swiper :deep() .button-prev {
	top: 20%;
}

.section-other-swiper :deep() .button-next {
	top: 20%;
}
</style>
