<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import CardNews from '@/components/cards/CardNews.vue'
import WidgetFilters from '@/components/widgets/filters/WidgetFilters.vue'

const filtersArray = ['Все публикации', 'Новости', 'Статьи']
const breadCrumbsList = ['Главная', 'Медиа']
</script>

<template>
	<section class="section-media">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" :items="breadCrumbsList" />
			<h1 class="h-xxl heading">Медиа</h1>
			<WidgetFilters :items="filtersArray" />

			<div class="cards">
				<CardNews />
				<CardNews />
				<CardNews />
				<CardNews />
				<CardNews />
				<CardNews />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-media {
	padding-bottom: 150px;
}

.heading {
	padding-bottom: 50px;
}

.cards {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 24px;
}

@media (max-width: 1000px) {
	.section-media {
		padding-bottom: 50px;
	}
	.heading {
		padding-bottom: 20px;
	}
	.cards {
		grid-template-columns: 1fr;
		gap: 10px;
	}
}
</style>
