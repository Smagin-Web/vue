<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionReviewPacients from '@/components/sections/shared/section-review-pacients/SectionReviewPacients.vue'
import SectionCircles from '@/components/sections/shared/section-circles/SectionCircles.vue'
import SectionStories from '@/components/sections/shared/section-stories/SectionStories.vue'
import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionReview from '@/components/sections/shared/section-review/SectionReview.vue'
import SectionResult from '@/components/sections/shared/section-result/SectionResult.vue'
import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
import SectionOther from '@/components/sections/shared/section-other/SectionOther.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'

import SectionDevices from '@/components/sections/devices/SectionDevices.vue'

import ModalBonus from '@/components/modal/modal-bonus/ModalBonus.vue'

import { ref } from 'vue'

const isActiveModal = ref(false)

const openModal = () => {
	document.body.style.overflow = 'hidden'
	isActiveModal.value = true
}

const closeModal = () => {
	document.body.style.overflow = 'auto'
	isActiveModal.value = false
}
</script>

<template>
	<ViewWrapper>
		<SectionDevices />

		<SectionOffer :modalBonusOpen="openModal" />
		<SectionResult />
		<SectionStories />
		<SectionOther />
		<SectionMasters />
		<SectionReviewPacients />
		<SectionCircles />
		<SectionReview />
		<SectionHelp />

		<ModalBonus :isActive="isActiveModal" :onClose="closeModal" />
	</ViewWrapper>
</template>
