<script setup lang="ts">
import { ref } from 'vue'
import ButtonFixed from './buttons/ButtonFixed.vue'
import Header from './shared/Header.vue'
import Footer from './shared/Footer.vue'

const headerStyles = ref('display: block')

const isModalOpen = ref(false)

const handleScroll = (event: WheelEvent) => {
	if (event.deltaY > 0) {
		headerStyles.value = 'transform: translateY(-100%)'
	} else if (event.deltaY < 0) {
		headerStyles.value = 'transform: translateY(0)'
	}
}
</script>

<template>
	<div
		@wheel="handleScroll"
		class="page-wrapper"
		:class="{ 'modal-open': isModalOpen }"
	>
		<ButtonFixed />
		<Header :style="headerStyles" />
		<slot />
		<Footer />
	</div>
</template>

<style scoped>
.page-wrapper {
	padding-top: 194px;
}

.modal-open {
	overflow: hidden;
}

@media (max-width: 1000px) {
	.page-wrapper {
		padding-top: 80px;
	}
}
</style>
