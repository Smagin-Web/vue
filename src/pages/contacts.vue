<script setup >
import ViewWrapper from '@/components/ViewWrapper.vue'
import SectionContactsCard from '@/components/sections/contacts/section-contacts-card/SectionContactsCard.vue'
import SectionMap from '@/components/sections/contacts/section-map/SectionMap.vue'
import SectionTour from '@/components/sections/about/section-tour/SectionTour.vue'
</script>

<template>
	<ViewWrapper>
		<SectionContactsCard />
    <SectionMap />
		<SectionTour />
	</ViewWrapper>
</template>
