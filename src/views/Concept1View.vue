<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'
import SectionConceptMain from '@/components/sections/concept/section-concept-main/SectionConceptMain.vue'
import SectionPluses from '@/components/sections/main/section-pluses/SectionPluses.vue'

import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { conceptsInfo } from '@/components/sections/concept/const'
import SectionInfo from '@/components/sections/shared/section-info/SectionInfo.vue'
import SectionPreview from '@/components/sections/shared/section-preview/SectionPreview.vue'
import SectionHelp from '@/components/sections/shared/section-help/SectionHelp.vue'
import SectionFaq from '@/components/sections/inside/section-faq/SectionFaq.vue'

const currentConcept = ref('')
const router = useRouter()

currentConcept.value = router.currentRoute.value.path.split('/')[2]
</script>

<template>
	<ViewWrapper>
		<SectionConceptMain :title="conceptsInfo[currentConcept].title" />
		<SectionPluses
			:text1="conceptsInfo[currentConcept].pluses[0]"
			:text2="conceptsInfo[currentConcept].pluses[1]"
			:text3="conceptsInfo[currentConcept].pluses[2]"
		/>
		<SectionInfo
			:title="conceptsInfo[currentConcept].info?.title"
			:text1="conceptsInfo[currentConcept].info?.text1"
			:text2="conceptsInfo[currentConcept].info?.text2"
		/>
		<SectionPreview
			:title="conceptsInfo[currentConcept].preview.title"
			:text="conceptsInfo[currentConcept].preview.text"
		/>
		<SectionHelp />
		<SectionFaq />
	</ViewWrapper>
</template>
