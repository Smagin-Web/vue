<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionReviewPacients from '@/components/sections/shared/section-review-pacients/SectionReviewPacients.vue'
import SectionCircles from '@/components/sections/shared/section-circles/SectionCircles.vue'
import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionReview from '@/components/sections/shared/section-review/SectionReview.vue'
import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'

import SectionCategories from '@/components/sections/procedures/section-categories/SectionCategories.vue'

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
		<SectionCategories />
		<SectionOffer :modalBonusOpen="openModal" />
		<SectionMasters />
		<SectionReviewPacients />
		<SectionCircles />
		<SectionReview />
		<SectionHelp />

		<ModalBonus
			:isBonus="false"
			:isActive="isActiveModal"
			:onClose="closeModal"
		/>
	</ViewWrapper>
</template>
