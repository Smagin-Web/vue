<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import Filter from '@/components/shared/Filter.vue'
import CardNews from '@/components/cards/CardNews.vue'
</script>

<template>
	<section class="section-media">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" />
			<h1 class="h-xxl heading">Медиа</h1>

			<div class="filters">
				<Filter :active="true">Все публикации</Filter>
				<Filter :active="false">Новости</Filter>
				<Filter :active="false">Статьи</Filter>
			</div>

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

.filters {
	display: flex;
	gap: 30px;
	padding-bottom: 70px;
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
	.filters {
		gap: 8px;
		flex-wrap: wrap;
	}
	.heading {
		padding-bottom: 20px;
	}
	.filters {
		padding-bottom: 40px;
	}
	.cards {
		grid-template-columns: 1fr;
		gap: 10px;
	}
}
</style>
