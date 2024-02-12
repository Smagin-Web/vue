<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'
import SectionConceptMain from '@/components/sections/concept/section-concept-main/SectionConceptMain.vue'
import SectionPluses from '@/components/sections/main/section-pluses/SectionPluses.vue'

import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { conceptsInfo } from '@/components/sections/concept/const'
import SectionInfo from '@/components/sections/shared/section-info/SectionInfo.vue'
import SectionPreview from '@/components/sections/shared/section-preview/SectionPreview.vue'

const currentNumberConcept = ref(0)
const router = useRouter()

currentNumberConcept.value = Number(
	router.currentRoute.value.path.split('/')[2]
)
</script>

<template>
	<ViewWrapper>
		<SectionConceptMain :title="conceptsInfo[currentNumberConcept].title" />
		<SectionPluses
			:text1="conceptsInfo[currentNumberConcept].pluses[0]"
			:text2="conceptsInfo[currentNumberConcept].pluses[1]"
			:text3="conceptsInfo[currentNumberConcept].pluses[2]"
		/>
		<SectionInfo />
		<SectionPreview />
	</ViewWrapper>
</template>
