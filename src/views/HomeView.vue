<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionReviewPacients from '@/components/sections/shared/section-review-pacients/SectionReviewPacients.vue'
// import SectionStories from '@/components/sections/shared/section-stories/SectionStories.vue'
// import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
// import SectionCircles from '@/components/sections/shared/section-circles/SectionCircles.vue'
import SectionResult from '@/components/sections/shared/section-result/SectionResult.vue'
// import SectionReview from '@/components/sections/shared/section-review/SectionReview.vue'
import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
// import SectionOther from '@/components/sections/shared/section-other/SectionOther.vue'
import SectionInfo from '@/components/sections/shared/section-info/SectionInfo.vue'
// import SectionRead from '@/components/sections/shared/section-read/SectionRead.vue'
import SectionTech from '@/components/sections/shared/section-tech/SectionTech.vue'

import SectionPluses from '@/components/sections/main/section-pluses/SectionPluses.vue'
import SectionBanner from '@/components/sections/main/section-banner/SectionBanner.vue'
import CustomSlider from '@/components/sections/main/section-slider/CustomSlider.vue'
import CustomSliderSm from '@/components/sections/main/section-slider/CustomSliderSm.vue'
</script>

<template>
	<ViewWrapper>
		<SectionBanner />
		<SectionPluses />
		<SectionInfo />
		<SectionTech />
		<CustomSlider class="custom-slider-lg" />
		<CustomSliderSm class="custom-slider-sm" />
		<SectionOffer />
		<SectionResult />
		<!-- <SectionStories /> -->
		<!-- <SectionOther /> -->
		<!-- <SectionMasters /> -->
		<SectionReviewPacients />
		<!-- <SectionCircles /> -->
		<!-- <SectionReview /> -->
		<!-- <SectionRead /> -->
	</ViewWrapper>
</template>

<style scoped>
.custom-slider-sm {
	display: none;
}

@media (max-width: 1000px) {
	.custom-slider-sm {
		display: block;
	}
	.custom-slider-lg {
		display: none;
	}
}
</style>
