<script setup lang="ts">
import 'swiper/css'
import { Swiper } from 'swiper/vue'
</script>

<template>
	<Swiper class="swiper-custom" :space-between="14" :slidesPerView="'auto'">
		<slot />
	</Swiper>
</template>

<style scoped>
.section-masters {
	padding-bottom: 168px;
}

.section-subtitle {
	padding-bottom: 98px;
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

.section-button {
	margin-top: 54px;
}

@media (max-width: 1000px) {
	.section-masters {
		padding-bottom: 80px;
	}
	.section-subtitle {
		padding-bottom: 58px;
	}
	.container-custom {
		padding: 0;
	}

	.swiper-custom {
		padding: 0 16px;
	}
}
</style>
