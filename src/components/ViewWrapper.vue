<script setup>
import { ref } from 'vue'
import ButtonFixed from './buttons/ButtonFixed.vue'
import Header from './shared/Header.vue'
import Footer from './shared/Footer.vue'
import ModalBonuse from '@/components/modal/modal-bonuse/ModalBonuse.vue'
import ModalApplication from '@/components/modal/modal-application/ModalApplication.vue'
import ModalReplace from './modal/modal-replace/ModalReplace.vue'

const headerStyles = ref('display: block')

const handleScroll = event => {
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

		<ModalReplace />
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
