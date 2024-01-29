<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import CardNews from '@/components/cards/CardNews.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import SliderVariant1 from '@/components/shared/SliderVariant1.vue'

import { SwiperSlide } from 'swiper/vue'
</script>

<template>
	<section class="section-read">
		<MContainer>
			<h3 class="h-xl">Читай полезное и интересное</h3>
			<h5 class="text-section section-read-text">
				Мы&nbsp;хотим поделиться с&nbsp;тобой некоторыми советами, которые
				помогут тебе ухаживать за&nbsp;кожей
			</h5>
		</MContainer>

		<SliderVariant1>
			<SwiperSlide><CardNews class="card-news" /></SwiperSlide>
			<SwiperSlide><CardNews class="card-news" /></SwiperSlide>
			<SwiperSlide><CardNews class="card-news" /></SwiperSlide>
			<SwiperSlide><CardNews class="card-news" /></SwiperSlide>
			<SwiperSlide><CardNews class="card-news" /></SwiperSlide>
		</SliderVariant1>

		<MContainer>
			<div style="display: flex; justify-content: center">
				<MButtonBig class="button">Больше интересных статей</MButtonBig>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.swiper-container {
	margin: 0 -24px;
}

.card-news {
	margin: 0 10px;
}

.section-read {
	padding-bottom: 100px;
}
.section-read-heading {
	padding-bottom: 35px;
}

.section-read-text {
	max-width: 866px;
	padding-bottom: 70px;
}
.card-group {
	display: flex;
	gap: 24px;
	padding-bottom: 70px;
}

.button {
	margin-top: 70px;
}

@media (max-width: 1000px) {
	/* .swiper-wrapper-custom {
		margin-left: var(--container-padding-xl-n);
		margin-right: var(--container-padding-xl-n);
	} */
	.card-group {
		gap: 14px;
		padding-bottom: 50px;
	}

	.button {
		margin-top: 54px;
	}

	.section-read-heading {
		padding-bottom: 20px;
	}

	.section-read-text {
		padding-bottom: 35px;
	}
}

@media (max-width: 960px) {
	.swiper-wrapper-custom {
		margin-left: var(--container-padding-l-n);
		margin-right: var(--container-padding-l-n);
	}
}

@media (max-width: 800px) {
	.button {
		margin-top: -30px;
		max-width: 300px;
	}
	.swiper-wrapper-custom {
		margin-left: var(--container-padding-sm-n);
		margin-right: var(--container-padding-sm-n);
	}
}
</style>
