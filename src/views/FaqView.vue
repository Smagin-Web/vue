<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionFaq from '@/components/sections/faq/SectionFaq.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'
import ModalBonus from '@/components/modal/modal-bonus/ModalBonus.vue'
</script>

<template>
	<ViewWrapper>
		<SectionFaq />
		<SectionHelp />
		<ModalBonus />
	</ViewWrapper>
</template>
