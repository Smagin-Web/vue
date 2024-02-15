<script setup lang="ts">
import { ref } from 'vue'
import { useModalsStore } from '@/stores/modals'
import ButtonFixed from './buttons/ButtonFixed.vue'
import Header from './shared/Header.vue'
import Footer from './shared/Footer.vue'
import ModalBonuse from '@/components/modal/modal-bonuse/ModalBonuse.vue'
import ModalApplication from '@/components/modal/modal-application/ModalApplication.vue'

const store = useModalsStore()

const headerStyles = ref('display: block')

const handleScroll = (event: WheelEvent) => {
	if (event.deltaY > 0) {
		headerStyles.value = 'transform: translateY(-100%)'
	} else if (event.deltaY < 0) {
		headerStyles.value = 'transform: translateY(0)'
	}
}
</script>

<template>
	<div @wheel="handleScroll" class="page-wrapper">
		<Header :style="headerStyles" />

		<slot />

		<ButtonFixed />
		<Footer />

		<ModalApplication />
		<ModalBonuse />
	</div>
</template>

<style scoped>
.page-wrapper {
	padding-top: 194px;
}

@media (max-width: 1000px) {
	.page-wrapper {
		padding-top: 80px;
	}
}
</style>
