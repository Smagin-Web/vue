<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import ButtonFixed from '@/components/buttons/ButtonFixed.vue'

import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionReview from '@/components/sections/shared/section-review/SectionReview.vue'
import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'

import SectionCategories from '@/components/sections/procedures/section-categories/SectionCategories.vue'

import SectionReviewPacients from '@/components/sections/main/section-review-pacients/SectionReviewPacients.vue'
import SectionCircles from '@/components/sections/main/section-circles/SectionCircles.vue'
</script>

<template>
	<div @wheel="handleScroll">
		<ButtonFixed />
		<Header :style="headerStyles" />

		<SectionCategories />
		<SectionOffer />
		<SectionMasters />
		<SectionReviewPacients />
		<SectionCircles />
		<SectionReview />
		<SectionHelp />

		<Footer />
	</div>
</template>

<script lang="ts">
const headerStyles = ref('display: block')

const handleScroll = (event: WheelEvent) => {
	if (event.deltaY > 0) {
		headerStyles.value = 'transform: translateY(-100%)'
	} else if (event.deltaY < 0) {
		headerStyles.value = 'transform: translateY(0)'
	}
}

export default {
	components: {},

	data() {
		return {
			handleScroll
		}
	}
}
</script>
