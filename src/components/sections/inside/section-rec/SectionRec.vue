<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import SectionRecCard from './SectionRecCard.vue'

import { SwiperSlide } from 'swiper/vue'
import SliderVariant1 from '@/components/shared/SliderVariant1.vue'
</script>

<template>
	<section class="section-procedures">
		<MContainer>
			<h3 class="h-xl heading">Рекомендованная косметика</h3>
		</MContainer>

		<SliderVariant1>
			<SwiperSlide><SectionRecCard /></SwiperSlide>
			<SwiperSlide><SectionRecCard /></SwiperSlide>
			<SwiperSlide><SectionRecCard /></SwiperSlide>
			<SwiperSlide><SectionRecCard /></SwiperSlide>
			<SwiperSlide><SectionRecCard /></SwiperSlide>
		</SliderVariant1>
	</section>
</template>

<style scoped>
.section-procedures {
	padding-bottom: 160px;
}

.heading {
	padding-bottom: 50px;
}

.content {
	max-width: 544px;
	margin: 0 auto;
}

@media (max-width: 1875px) {
	.container-custom {
		padding: 0 !important;
	}

	.content {
		max-width: 500px;
	}
}

@media (max-width: 1500px) {
	.section-procedures {
		padding-bottom: 100px;
	}
}

@media (max-width: 800px) {
	.section-procedures {
		padding-bottom: 10px;
	}
	.content {
		max-width: 400px;
	}
}
</style>
