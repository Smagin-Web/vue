<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import ButtonFixed from '@/components/buttons/ButtonFixed.vue'

import SectionReviewInside from '@/components/sections/review-inside/section-review-inside/SectionReviewInside.vue'
import SectionReviewOther from '@/components/sections/review-inside/section-review-other/SectionReviewOther.vue'
</script>

<template>
	<div @wheel="handleScroll">
		<ButtonFixed />
		<Header :style="headerStyles" />

		<SectionReviewInside />
		<SectionReviewOther />

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
