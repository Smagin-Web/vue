<script setup lang="ts">
import ViewWrapper from '@/components/ViewWrapper.vue'
import SectionFaq from '@/components/sections/inside/section-faq/SectionFaq.vue'
import SectionRec from '@/components/sections/inside/section-rec/SectionRec.vue'

import SectionAbout from '@/components/sections/media-post/section-about/SectionAbout.vue'
import SectionMediaInfo from '@/components/sections/media-post/section-media-info/SectionMediaInfo.vue'
import SectionRead from '@/components/sections/shared/section-read/SectionRead.vue'
</script>

<template>
	<ViewWrapper>
		<SectionAbout />
		<SectionMediaInfo />
		<SectionRec />
		<SectionFaq />
		<SectionRead />
	</ViewWrapper>
</template>
