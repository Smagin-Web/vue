<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import CardNews from '@/components/cards/CardNews.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>

<template>
	<section class="section-read">
		<MContainer>
			<h3 class="h-xl">Читай полезное и интересное</h3>
			<h5 class="text-section section-read-text">
				Мы&nbsp;хотим поделиться с&nbsp;тобой некоторыми советами, которые
				помогут тебе ухаживать за&nbsp;кожей
			</h5>
			<div class="swiper-wrapper-custom">
				<Swiper
					style="padding-left: 14px; padding-right: 14px"
					:breakpoints="{
						300: { slidesPerView: 1.1 },
						600: { slidesPerView: 2.2 },
						1000: { slidesPerView: 3 }
					}"
					:space-between="14"
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
					<swiper-slide>
						<CardNews />
					</swiper-slide>
					<swiper-slide>
						<CardNews />
					</swiper-slide>
				</Swiper>
			</div>
			<div style="display: flex; justify-content: center">
				<MButtonBig class="button">Больше интересных статей</MButtonBig>
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
.swiper-container {
	margin: 0 -24px;
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
	.swiper-wrapper-custom {
		margin-left: var(--container-padding-sm-n);
		margin-right: var(--container-padding-sm-n);
	}
}
</style>
