<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import CardNews from '../../cards/CardNews.vue'
import MButton from '../../buttons/MButton.vue'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<template>
	<section class="section-read">
		<MContainer>
			<template #children>
				<h3 class="heading-section">Читай полезное и интересное</h3>
				<h5 class="text-section">
					Мы хотим поделиться с тобой некоторыми советами, которые помогут тебе
					ухаживать за кожей
				</h5>
				<Swiper
					:breakpoints="{
						300: { slidesPerView: 1.1 },
						600: { slidesPerView: 2.2 },
						900: { slidesPerView: 3 }
					}"
					:space-between="14"
					@swiper="onSwiper"
					@slideChange="onSlideChange"
				>
					<swiper-slide>
						<CardNews />
					</swiper-slide>
					<swiper-slide>
						<CardNews />
					</swiper-slide>
					<swiper-slide>
						<CardNews />
					</swiper-slide>
				</Swiper>
				<div style="display: flex; justify-content: center">
					<MButton class="button">Больше интересных статей</MButton>
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
.button {
	padding-top: 70px;
}
.swiper-container {
	margin: 0 -24px;
}
.section-read {
	padding-bottom: 100px;
}
.card-group {
	display: flex;
	gap: 24px;
	padding-bottom: 70px;
}

@media screen and (max-width: 1000px) {
	.card-group {
		gap: 14px;
		padding-bottom: 50px;
	}

	.button {
		padding-top: 54px;
	}
}
</style>
