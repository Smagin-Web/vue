<script setup >
import ViewWrapper from '@/components/ViewWrapper.vue'

import SectionReviewInside from '@/components/sections/review-inside/section-review-inside/SectionReviewInside.vue'
import SectionReviewOther from '@/components/sections/review-inside/section-review-other/SectionReviewOther.vue'
</script>

<template>
	<ViewWrapper>
		<SectionReviewInside />
		<SectionReviewOther />
	</ViewWrapper>
</template>
