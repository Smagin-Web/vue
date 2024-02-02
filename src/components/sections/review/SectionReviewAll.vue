<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import CardReviewMaster from '@/components/cards/CardReviewMaster.vue'
import PaginationItems from '@/components/shared/PaginationItems.vue'
import SearchInput from '@/components/shared/SearchInput.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'
</script>

<template>
	<section class="section-review-all">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'Отзывы']" />
			<h3 class="h-xxl heading">Отзывы</h3>
			<div class="content">
				<p class="text-lg" style="max-width: 660px">
					Выберите специалиста, о&nbsp;котором хотите прочитать или оставить
					отзыв
				</p>
				<SearchInput />
				<MButtonBig>Оставить отзыв</MButtonBig>
			</div>
			<div class="cards">
				<CardReviewMaster master-name="Заика Ольга" class="card-master" />
				<CardReviewMaster master-name="Заика Ольга" class="card-master" />
				<CardReviewMaster master-name="Заика Ольга" class="card-master" :badge="'yandex'" />
				<CardReviewMaster master-name="Заика Ольга" class="card-master" />
				<CardReviewMaster master-name="Заика Ольга" class="card-master" :badge="'2gis'" />
				<CardReviewMaster master-name="Заика Ольга" class="card-master" />
			</div>
			<PaginationItems />
		</MContainer>
	</section>
</template>

<style scoped>
.section-review-all {
	padding-bottom: 150px;
}

.content {
	padding-bottom: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 34px;
}

.cards {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 50px 24px;
	margin-bottom: 70px;
}

@media (max-width: 1700px) {
	.content {
		display: grid;
		grid-template-columns: 1fr 500px;
	}
	.cards {
		grid-template-columns: max-content max-content;
		justify-items: center;
		justify-content: space-around;
	}
}

@media (max-width: 1300px) {
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.card-master {
		margin-right: 0;
	}
}

@media (max-width: 1000px) {
	.content {
		grid-template-columns: 1fr;
	}
	.section-review-all {
		padding-bottom: 80px;
	}
	.heading {
		padding-bottom: 14px;
	}
}

@media (max-width: 600px) {
	.content {
		grid-template-columns: minmax(200px, 300px);
	}
}
</style>
