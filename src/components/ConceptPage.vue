<script setup>
import ViewWrapper from '@/components/ViewWrapper.vue'
import SectionConceptMain from '@/components/sections/concept/section-concept-main/SectionConceptMain.vue'
import SectionPluses from '@/components/sections/shared/section-pluses/SectionPluses.vue'

import { conceptsInfo } from '@/components/sections/concept/const.js'
import SectionInfo from '@/components/sections/shared/section-info/SectionInfo.vue'
import SectionPreview from '@/components/sections/shared/section-preview/SectionPreview.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'
import SectionFaq from '@/components/sections/inside/section-faq/SectionFaq.vue'
import SectionTech from '@/components/sections/inside/section-tech/SectionTech.vue'
import SectionOffer from '@/components/sections/shared/section-offer/SectionOffer.vue'
import SectionResult from '@/components/sections/shared/section-result/SectionResult.vue'
import SectionProcedures from '@/components/sections/inside/section-procedures/SectionProcedures.vue'
import SectionRec from '@/components/sections/inside/section-rec/SectionRec.vue'
import SectionMasters from '@/components/sections/shared/section-masters/SectionMasters.vue'
import SectionDevices from '@/components/sections/inside/section-devices/SectionDevices.vue'
import SectionStories from '@/components/sections/shared/section-stories/SectionStories.vue'
import SectionOther from '@/components/sections/shared/section-other/SectionOther.vue'
import SectionTariff from '@/components/sections/inside/section-tariff/SectionTariff.vue'
import SectionCircles from '@/components/sections/shared/section-circles/SectionCircles.vue'
import SectionReview from '@/components/sections/shared/section-review/SectionReview.vue'
import SectionPlaces from '@/components/sections/inside/section-places/SectionPlaces.vue'
import SectionBonus from '@/components/sections/shared/section-bonus/SectionBonus.vue'
import SectionRead from '@/components/sections/shared/section-read/SectionRead.vue'

const props = defineProps(['conceptName'])
</script>

<template>
	<ViewWrapper v-if="conceptsInfo[props.conceptName]">
		<SectionConceptMain :title="conceptsInfo[props.conceptName].title" />
		<SectionPluses
			:text1="conceptsInfo[props.conceptName].pluses[0]"
			:text2="conceptsInfo[props.conceptName].pluses[1]"
			:text3="conceptsInfo[props.conceptName].pluses[2]"
		/>
		<SectionInfo
			:title="conceptsInfo[props.conceptName].info?.title"
			:text1="conceptsInfo[props.conceptName].info?.text1"
			:text2="conceptsInfo[props.conceptName].info?.text2"
		/>
		<SectionPreview
			:title="conceptsInfo[props.conceptName].preview.title"
			:text="conceptsInfo[props.conceptName].preview.text"
		/>
		<SectionTech
			:text1="conceptsInfo[props.conceptName].info2.text1"
			:text3="conceptsInfo[props.conceptName].info2.text3"
			:text4="conceptsInfo[props.conceptName].info2.text4"
			:textDisable2="true"
		/>
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
		<SectionRead />
		<SectionFaq :items="conceptsInfo[props.conceptName].faq" />
	</ViewWrapper>
</template>
