<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionStories from '@/components/sections/shared/section-stories/SectionStories.vue'
import SectionPreview from '@/components/sections/shared/section-preview/SectionPreview.vue'
import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionCircles from '@/components/sections/shared/section-circles/SectionCircles.vue'
import SectionResult from '@/components/sections/shared/section-result/SectionResult.vue'
import SectionReview from '@/components/sections/shared/section-review/SectionReview.vue'
import SectionBonus from '@/components/sections/shared/section-bonus/SectionBonus.vue'
import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
import SectionOther from '@/components/sections/shared/section-other/SectionOther.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'
import SectionInfo from '@/components/sections/shared/section-info/SectionInfo.vue'
import SectionRead from '@/components/sections/shared/section-read/SectionRead.vue'

import SectionProcedures from '@/components/sections/inside/section-procedures/SectionProcedures.vue'
import SectionDevices from '@/components/sections/inside/section-devices/SectionDevices.vue'
import SectionBanner from '@/components/sections/inside/section-banner/SectionBanner.vue'
import SectionPlaces from '@/components/sections/inside/section-places/SectionPlaces.vue'
import SectionTariff from '@/components/sections/inside/section-tariff/SectionTariff.vue'
import SectionTech from '@/components/sections/inside/section-tech/SectionTech.vue'
import SectionRec from '@/components/sections/inside/section-rec/SectionRec.vue'
import SectionFaq from '@/components/sections/inside/section-faq/SectionFaq.vue'

import SectionPluses from '@/components/sections/main/section-pluses/SectionPluses.vue'
</script>

<template>
	<ViewWrapper>
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
		<SectionHelp />
		<SectionPlaces />
		<SectionBonus />
		<SectionRead class="section-read" />
		<SectionFaq />
	</ViewWrapper>
</template>

<style scoped>
@media (max-width: 800px) {
	.section-read {
		padding-bottom: 90px;
	}
}
</style>