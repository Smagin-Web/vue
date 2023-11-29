<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import ButtonFixed from '@/components/buttons/ButtonFixed.vue'

import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
// import SectionHelp from '@/components/sections/inside/section-help/SectionHelp.vue'
// import SectionBonus from '@/components/sections/inside/section-bonus/SectionBonus.vue'
// import SectionRead from '@/components/sections/main/SectionRead.vue'
// import SectionFaq from '@/components/sections/inside/section-faq/SectionFaq.vue'
// import SectionPrice from '@/components/sections/tech/section-price/SectionPrice.vue'
// import SectionMain from '@/components/sections/tech/section-main/SectionMain.vue'
// import SectionPluses from '@/components/sections/tech/section-pluses/SectionPluses.vue'
// import SectionBanner from '@/components/sections/tech/section-banner/SectionBanner.vue'

const headerStyles = ref('display: block')

const handleScroll = (event: WheelEvent) => {
	if (event.deltaY > 0) {
		headerStyles.value = 'transform: translateY(-100%)'
	} else if (event.deltaY < 0) {
		headerStyles.value = 'transform: translateY(0)'
	}
}
</script>

<template>
	<div @wheel="handleScroll">
		<ButtonFixed />
		<Header :style="headerStyles" />

		<SectionOffer />

		<Footer />
	</div>
</template>
