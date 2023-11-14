<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'

import MContainer from '@/components/shared/MContainer.vue'
import CardMaster from './CardMaster.vue'
import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
</script>

<template>
	<section class="section-masters">
		<MContainer class="container-custom">
			<div class="section-masters-content">
				<h3 class="heading-section">Давай знакомиться</h3>
				<h5 class="text-section" style="max-width: 866px">
					Врачи-косметологи Face Concept помогут вернуть твоей коже молодость
					и&nbsp;красоту!
				</h5>
				<Swiper
					class="swiper-custom"
					:breakpoints="{
						300: { slidesPerView: 1.1 },
						600: { slidesPerView: 2.2 },
						1000: { slidesPerView: 3 },
						1500: { slidesPerView: 4 }
					}"
					:space-between="14"
				>
					<swiper-slide><CardMaster /></swiper-slide>
					<swiper-slide><CardMaster /></swiper-slide>
					<swiper-slide><CardMaster /></swiper-slide>
					<swiper-slide><CardMaster /></swiper-slide>
				</Swiper>
				<div style="display: flex; justify-content: center">
					<MButtonOutline class="button">Показать ещё врачей</MButtonOutline>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<script lang="ts">
export default {
	components: {
		Swiper,
		SwiperSlide
	},

	data() {
		return {}
	}
}
</script>

<style scoped>
.section-masters {
	padding-bottom: 168px;
}
.card-group {
	display: flex;
	gap: 24px;
	padding-bottom: 54px;
}

.button {
	margin-top: 54px;
}

@media (max-width: 1000px) {
	.heading-section {
		padding: 0 20px;
	}

	.text-section {
		padding: 10px 20px 20px;
	}
	.container-custom {
		padding: 0;
	}

	.swiper-custom {
		padding: 0 16px;
	}
}
</style>
