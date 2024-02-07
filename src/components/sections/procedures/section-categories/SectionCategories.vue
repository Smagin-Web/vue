<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import Filter from '@/components/shared/Filter.vue'
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'
import SectionProceduresCard from '../../inside/section-procedures/SectionProceduresCard.vue'
import WidgetFilters from '@/components/widgets/filters/WidgetFilters.vue'

const filtersList = [
	'Все процедуры',
	'AntiAcne Concept',
	'Clear Concept',
	'Detox Concept',
	'Lifting Concept',
	'Brigth Concept',
	'Hydro Concept',
	'Red Concept',
	'Personal Concept'
]
</script>

<template>
	<section class="section-categories">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" :items="['Главная', 'Процедуры']" />
			<h1 class="h-xxl">Процедуры</h1>

			<WidgetFilters :items="filtersList" />
			<div class="cards">
				<SectionProceduresCard />
				<SectionProceduresCard />
				<SectionProceduresCard />
				<SectionProceduresCard />
				<SectionProceduresCard />
				<SectionProceduresCard />
			</div>
			<div class="button-wrapper">
				<MButtonOutlineBig>Показать ещё процедуры</MButtonOutlineBig>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.heading {
	color: #000;
	font-size: 60px;
	padding-bottom: 50px;
}
.bread-crumbs {
	padding-bottom: 20px;
}

.filters {
	display: flex;
	gap: 30px;
	flex-wrap: wrap;
	padding-bottom: 70px;
}

.cards {
	display: grid;
	gap: 50px 24px;
	grid-template-columns: 1fr 1fr 1fr;
	padding-bottom: 70px;
}

.button-wrapper {
	display: flex;
	justify-content: center;
}

@media (max-width: 1500px) {
	.cards {
		grid-template-columns: 1fr 1fr;
		justify-items: center;
	}
}

@media (max-width: 820px) {
	.cards {
		justify-content: center;
		grid-template-columns: 1fr;
		gap: 30px;
		padding-bottom: 30px;
	}
	.filters {
		gap: 8px;
		padding-bottom: 32px;
	}
	.button-wrapper {
		margin-bottom: 32px;
	}
}
</style>
