<script setup lang="ts">
import CardReviewMaster from '@/components/cards/CardReviewMaster.vue'
import MContainer from '@/components/shared/MContainer.vue'
</script>

<template>
	<section class="section-master-review">
		<MContainer>
			<h3 class="heading-section">Последние отзывы о специалисте</h3>
			<CardReviewMaster />
		</MContainer>
	</section>
</template>

<style scoped>
.section-master-review {
	padding-bottom: 100px;
}
</style>
