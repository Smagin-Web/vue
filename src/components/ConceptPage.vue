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
		<SectionHelp />
		<SectionFaq :items="conceptsInfo[props.conceptName].faq" />
	</ViewWrapper>
</template>
