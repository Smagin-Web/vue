<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import CardReviewMaster from '@/components/cards/CardReviewMaster.vue'
</script>

<template>
	<section class="section-review-all">
		<MContainer>
			<BreadCrumbs />
			<h3 class="heading-section">Отзывы</h3>
			<div>
				<CardReviewMaster master-name="Заика Ольга" />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-review-all {
	padding-top: 150px;
	padding-bottom: 150px;
}
</style>
