<script setup >
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionMaster from '@/components/sections/master/SectionMaster.vue'
import SectionMasterReview from '@/components/sections/master/SectionMasterReview.vue'
import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
</script>

<template>
	<ViewWrapper>
		<SectionMaster />
		<SectionMasterReview />
		<SectionMasters />
		<SectionOffer />
	</ViewWrapper>
</template>
