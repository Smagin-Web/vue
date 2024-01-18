<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'
import SectionFaq from '@/components/sections/inside/section-faq/SectionFaq.vue'
import SectionRec from '@/components/sections/inside/section-rec/SectionRec.vue'

import SectionAbout from '@/components/sections/media-post/section-about/SectionAbout.vue'
import SectionMediaInfo from '@/components/sections/media-post/section-media-info/SectionMediaInfo.vue'
import SectionOtherPublic from '@/components/sections/media-post/section-other-public/SectionOtherPublic.vue'
import SectionService from '@/components/sections/media-post/section-service/SectionService.vue'
import SectionOther from '@/components/sections/media-post/section-other/SectionOther.vue'
</script>

<template>
	<ViewWrapper>
		<SectionAbout />
		<SectionMediaInfo />
		<SectionService />
		<SectionOther />
		<SectionRec />
		<SectionFaq />
		<SectionOtherPublic />
	</ViewWrapper>
</template>
