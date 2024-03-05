<script setup>
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionClinicInfo from '@/components/sections/about/section-clinic-info/SectionClinicInfo.vue'
import SectionLegal from '@/components/sections/about/section-legal/SectionLegal.vue'
import SectionTour from '@/components/sections/about/section-tour/SectionTour.vue'

import SectionReviewPacients from '@/components/sections/shared/section-review-pacients/SectionReviewPacients.vue'
import SectionPluses from '@/components/sections/shared/section-pluses/SectionPluses.vue'
import SectionCircles from '@/components/sections/shared/section-circles/SectionCircles.vue'
import SectionReview from '@/components/sections/shared/section-review/SectionReview.vue'
import SectionRead from '@/components/sections/shared/section-read/SectionRead.vue'

import SectionPlaces from '@/components/sections/inside/section-places/SectionPlaces.vue'
</script>

<template>
	<ViewWrapper>
		<SectionClinicInfo />
		<SectionPluses :more-text="'Лицензия № ЛО-50-01-010568 от 05.02.2019'" />
		<SectionTour />

		<SectionPlaces />
		<SectionReviewPacients />
		<SectionCircles />
		<SectionReview />
		<SectionRead />
		<SectionLegal />
	</ViewWrapper>
</template>
