<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import SectionPluses from '@/components/sections/main/section-pluses/SectionPluses.vue'
import SectionInfo from '@/components/sections/main/SectionInfo.vue'
import SectionTech from '@/components/sections/main/SectionTech.vue'
import SectionOffer from '@/components/sections/main/SectionOffer.vue'
import SectionResult from '@/components/sections/main/section-result/SectionResult.vue'
import SectionStories from '@/components/sections/main/SectionStories.vue'
import SectionMasters from '@/components/sections/main/SectionMasters.vue'
import SectionRead from '@/components/sections/main/SectionRead.vue'
import SectionReview from '@/components/sections/main/SectionReview.vue'
import SectionBanner from '@/components/sections/main/section-banner/SectionBanner.vue'
import SectionReviewPacients from '@/components/sections/main/SectionReviewPacients.vue'
import CustomSlider from '@/components/sections/main/section-slider/CustomSlider.vue'
import ButtonFixed from '@/components/buttons/ButtonFixed.vue'
import SectionCircles from '@/components/sections/main/section-circles/SectionCircles.vue'
import SectionOther from '@/components/sections/main/section-other/SectionOther.vue'
</script>

<template>
	<div @wheel="handleScroll">
		<ButtonFixed />
		<Header :style="headerStyles" />
		<SectionBanner />
		<SectionPluses />
		<SectionInfo />
		<SectionTech />
		<CustomSlider />
		<SectionOffer />
		<SectionResult />
		<SectionStories />
		<SectionOther />
		<SectionMasters />
		<SectionReviewPacients />
		<SectionCircles />
		<SectionReview />
		<SectionRead />
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
