<script setup lang="ts">
import Header from '../components/shared/Header.vue'
import Footer from '../components/shared/Footer.vue'
import SectionPluses from '../components/sections/main/SectionPluses.vue'
import SectionInfo from '../components/sections/main/SectionInfo.vue'
import SectionTech from '../components/sections/main/SectionTech.vue'
import SectionOffer from '../components/sections/main/SectionOffer.vue'
import SectionResult from '../components/sections/main/SectionResult.vue'
import SectionStories from '../components/sections/main/SectionStories.vue'
import SectionMasters from '../components/sections/main/SectionMasters.vue'
import SectionRead from '../components/sections/main/SectionRead.vue'
import SectionReview from '../components/sections/main/SectionReview.vue'
import SectionBanner from '../components/sections/main/SectionBanner.vue'
import SectionReviewPacients from '../components/sections/main/SectionReviewPacients.vue'
import CustomSlider from '@/components/CustomSlider.vue'
import ButtonFixed from '@/components/buttons/ButtonFixed.vue'
import SectionCircles from '../components/sections/main/SectionCircles.vue'
</script>

<template>
	<ButtonFixed />
	<Header />
	<SectionBanner />
	<SectionPluses />
	<SectionInfo />
	<SectionTech />
	<CustomSlider />
	<SectionOffer />
	<SectionResult />
	<SectionStories />
	<SectionMasters />
	<SectionReviewPacients />
	<SectionCircles />
	<SectionReview />
	<SectionRead />
	<Footer />
</template>
