<script setup >
import 'swiper/css'
import { SwiperSlide } from 'swiper/vue'

import MContainer from '@/components/shared/MContainer.vue'
import CardMaster from './CardMaster.vue'
import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
import SwiperMasters from './SwiperMasters.vue'
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'
</script>

<template>
	<section class="section-masters">
		<MContainer>
			<h3 class="h-xl">Давай знакомиться</h3>
			<h5 class="text-lg section-subtitle">
				Врачи-косметологи Face Concept помогут вернуть твоей коже молодость
				и&nbsp;красоту!
			</h5>
		</MContainer>

		<MContainer class="container-custom">
			<SwiperMasters>
				<swiper-slide><CardMaster /></swiper-slide>
				<swiper-slide><CardMaster /></swiper-slide>
				<swiper-slide><CardMaster /></swiper-slide>
				<swiper-slide><CardMaster /></swiper-slide>
			</SwiperMasters>
		</MContainer>

		<MContainer>
			<div class="section-button-wrapper">
				<MButtonOutlineBig class="section-button">
					Показать ещё врачей
				</MButtonOutlineBig>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.swiper-slide {
	max-width: fit-content;
}
.section-masters {
	padding-bottom: 168px;
}

.section-subtitle {
	padding-bottom: 98px;
	max-width: 866px;
}

.card-group {
	display: flex;
	gap: 24px;
	padding-bottom: 54px;
}

.section-button-wrapper {
	display: flex;
	justify-content: center;
}

.swiper {
	overflow: visible;
}

.section-button {
	margin-top: 54px;
}

.container-custom{
	overflow: visible;
}

@media (max-width: 1000px) {
	.section-masters {
		padding-bottom: 80px;
	}
	.section-subtitle {
		padding-bottom: 50px;
	}
	.container-custom {
		padding: 0;
	}

	.swiper-custom {
		padding: 0 16px;
	}
}
</style>
