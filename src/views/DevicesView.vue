<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import ButtonFixed from '@/components/buttons/ButtonFixed.vue'

import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
import SectionResult from '@/components/sections/shared/section-result/SectionResult.vue'
import SectionStories from '@/components/sections/shared/section-stories/SectionStories.vue'

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
	<div @wheel="handleScroll">
		<ButtonFixed />
		<Header :style="headerStyles" />

		<SectionOffer />
		<SectionResult />
		<SectionStories />

		<Footer />
	</div>
</template>
