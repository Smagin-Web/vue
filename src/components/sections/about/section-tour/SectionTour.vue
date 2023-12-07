<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'

const modules = [Pagination]
</script>

<template>
	<section class="section-clinic-info">
		<MContainer>
			<h2 class="h-l section-heading" style="max-width: 880px">
				Атмосферное пространство комфорта и&nbsp;красоты
			</h2>
			<Swiper
				class="swiper-custom"
				:modules="modules"
				:grabCursor="true"
				:centeredSlides="true"
				:slidesPerView="'auto'"
				:spaceBetween="24"
				:initialSlide="1"
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
	padding-bottom: 50px;
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
</style>
