<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionBonus from '@/components/sections/shared/section-bonus/SectionBonus.vue'
import SectionRead from '@/components/sections/shared/section-read/SectionRead.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'

import SectionFaq from '@/components/sections/inside/section-faq/SectionFaq.vue'
import SectionPrice from '@/components/sections/tech/section-price/SectionPrice.vue'
import SectionMain from '@/components/sections/tech/section-main/SectionMain.vue'
import SectionPluses from '@/components/sections/tech/section-pluses/SectionPluses.vue'
import SectionBanner from '@/components/sections/tech/section-banner/SectionBanner.vue'
</script>

<template>
	<ViewWrapper>
		<SectionMain />
		<SectionPluses />
		<SectionBanner />
		<SectionPrice />
		<SectionMasters />
		<SectionBonus />
		<SectionRead />
		<SectionFaq class="section-help" />
		<SectionHelp  />
	</ViewWrapper>
</template>

<style scoped>
@media (max-width: 1000px) {
	.section-help {
		padding-top: 60px;
	}
}
</style>
