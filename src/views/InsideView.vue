<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import ButtonFixed from '@/components/buttons/ButtonFixed.vue'

import SectionBanner from '@/components/sections/inside/section-banner/SectionBanner.vue'
import SectionPluses from '@/components/sections/main/section-pluses/SectionPluses.vue'
import SectionInfo from '@/components/sections/main/SectionInfo.vue'
import SectionPreview from '@/components/sections/shared/section-preview/SectionPreview.vue'
import SectionTech from '@/components/sections/inside/section-tech/SectionTech.vue'
import SectionOffer from '@/components/sections/main/SectionOffer.vue'
import SectionResult from '@/components/sections/main/section-result/SectionResult.vue'
import SectionProcedures from '@/components/sections/inside/section-procedures/SectionProcedures.vue'
import SectionRec from '@/components/sections/inside/section-rec/SectionRec.vue'
import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionDevices from '@/components/sections/inside/section-devices/SectionDevices.vue'
import SectionTariff from '@/components/sections/inside/section-tariff/SectionTariff.vue'
import SectionStories from '@/components/sections/main/SectionStories.vue'
import SectionOther from '@/components/sections/main/section-other/SectionOther.vue'
import SectionCircles from '@/components/sections/main/section-circles/SectionCircles.vue'
import SectionReview from '@/components/sections/main/SectionReview.vue'
</script>

<template>
	<div @wheel="handleScroll">
		<ButtonFixed />
		<Header :style="headerStyles" />

		<SectionBanner />
		<SectionPluses />
		<SectionInfo />
		<SectionPreview />
		<SectionTech />
		<SectionOffer />
		<SectionResult />
		<SectionProcedures />
		<SectionRec />
		<SectionMasters />
		<SectionDevices />
		<SectionStories />
		<SectionOther />
		<SectionTariff />
		<SectionCircles />
		<SectionReview />

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
