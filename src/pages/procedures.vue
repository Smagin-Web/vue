<script setup >
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionReviewPacients from '@/components/sections/shared/section-review-pacients/SectionReviewPacients.vue'
import SectionCircles from '@/components/sections/shared/section-circles/SectionCircles.vue'
import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionReview from '@/components/sections/shared/section-review/SectionReview.vue'
import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'

import SectionCategories from '@/components/sections/procedures/section-categories/SectionCategories.vue'
</script>

<template>
	<ViewWrapper>
		<SectionCategories />
		<SectionOffer />
		<SectionMasters />
		<SectionReviewPacients />
		<SectionCircles />
		<SectionReview />
		<SectionHelp />
	</ViewWrapper>
</template>
