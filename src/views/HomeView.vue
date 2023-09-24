<script setup lang="ts">
import Header from '../components/shared/Header.vue'
import Footer from '../components/shared/Footer.vue'
import HeaderNotify from '../components/shared/HeaderNotify.vue'
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
import SwiperComponent from '../components/SwiperComponent.vue'
</script>

<template>
	<HeaderNotify />
	<Header />
	<SwiperComponent />
	<SectionBanner />
	<SectionPluses />
	<SectionInfo />
	<SectionTech />
	<SectionOffer />
	<SectionResult />
	<SectionStories />
	<SectionMasters />
	<SectionReviewPacients />
	<SectionReview />
	<SectionRead />
	<Footer />
</template>
