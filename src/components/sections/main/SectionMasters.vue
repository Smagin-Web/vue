<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'

import MContainer from '../../shared/MContainer.vue'
import CardMaster from '../../cards/CardMaster.vue'
import MButtonOutline from '../../buttons/MButtonOutline.vue'
</script>

<template>
	<section class="section-masters">
		<MContainer>
			<template #children>
				<div class="section-masters-content">
					<h3 class="heading-section">Давай знакомиться</h3>
					<h5 class="text-section" style="max-width: 866px">
						Врачи-косметологи Face Concept помогут вернуть твоей коже молодость
						и&nbsp;красоту!
					</h5>
					<Swiper>
						<swiper-slide><CardMaster /></swiper-slide>
						<swiper-slide><CardMaster /></swiper-slide>
						<swiper-slide><CardMaster /></swiper-slide>
						<swiper-slide><CardMaster /></swiper-slide>
					</Swiper>
					<div style="display: flex; justify-content: center">
						<MButtonOutline class="button">Показать ещё врачей</MButtonOutline>
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<script lang="ts">
const onSwiper = (swiper: any) => {
	console.log(swiper)
}
const onSlideChange = () => {
	console.log('slide change')
}
export default {
	components: {
		Swiper,
		SwiperSlide
	},

	data() {
		return {
			onSwiper,
			onSlideChange
		}
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
	padding-top: 54px;
}
</style>
