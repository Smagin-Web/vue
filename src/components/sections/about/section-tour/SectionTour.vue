<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import ButtonTour from './ButtonTour.vue'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const modules = [Pagination]

const changeActiveSlide = (swiper: any) => {
	setTimeout(() => {
		swiper.slideTo(0)
	}, 50)
}
</script>

<template>
	<section class="section-clinic-info">
		<MContainer>
			<h2 class="h-l section-heading">
				Атмосферное пространство
				<br />
				комфорта и&nbsp;красоты
				<ButtonTour />
			</h2>
			<Swiper
				@swiper="changeActiveSlide"
				:init="false"
				:slidesPerView="'auto'"
				class="swiper-custom"
				:modules="modules"
				:grabCursor="true"
				:centeredSlides="true"
				:spaceBetween="24"
				:initialSlide="-2"
				:pagination="{
					clickable: true
				}"
			>
				<SwiperSlide>
					<div class="card-room">
						<img src="./room.png" alt="" class="card-room-photo" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="card-room">
						<img src="./room2.png" alt="" class="card-room-photo" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="card-room">
						<img src="./room.png" alt="" class="card-room-photo" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="card-room">
						<img src="./room.png" alt="" class="card-room-photo" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="card-room">
						<img src="./room.png" alt="" class="card-room-photo" />
					</div>
				</SwiperSlide>
			</Swiper>
		</MContainer>
	</section>
</template>

<style scoped>
.section-heading {
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding-bottom: 60px;
	overflow: hidden;
	max-width: 100%;
}

.card-room-photo {
	height: 424px;
	width: auto;
	object-fit: cover;
}

/* swiper */

.swiper {
	padding-bottom: 100px;
	overflow: visible;
	width: 100%;
}

.swiper-custom :deep() .swiper-slide {
	display: flex;
	justify-content: center;
	width: fit-content;
}

@media (max-width: 1200px) {
	.card-room-photo {
		height: 324px;
		width: auto;
		object-fit: cover;
	}
}

@media (max-width: 1000px) {
	.card-room-photo {
		height: 250px;
		width: auto;
		object-fit: cover;
	}
}

@media (max-width: 640px) {
	.section-heading {
		flex-direction: column;
		align-items: start;
		gap: 20px;
	}
}
</style>
