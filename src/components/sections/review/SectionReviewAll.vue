<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import CardReviewMaster from '@/components/cards/CardReviewMaster.vue'
import PaginationItems from '@/components/shared/PaginationItems.vue'
</script>

<template>
	<section class="section-review-all">
		<MContainer>
			<BreadCrumbs />
			<h3 class="heading-section">Отзывы</h3>
			<div class="cards">
				<CardReviewMaster master-name="Заика Ольга" />
				<CardReviewMaster master-name="Заика Ольга" />
				<CardReviewMaster master-name="Заика Ольга" />
				<CardReviewMaster master-name="Заика Ольга" />
				<CardReviewMaster master-name="Заика Ольга" />
				<CardReviewMaster master-name="Заика Ольга" />
			</div>
			<PaginationItems />
		</MContainer>
	</section>
</template>

<style scoped>
.section-review-all {
	padding-top: 150px;
	padding-bottom: 150px;
}

.cards {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 50px 24px;
  margin-bottom: 70px;
}
</style>
