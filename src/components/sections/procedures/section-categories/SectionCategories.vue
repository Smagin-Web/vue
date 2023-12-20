<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import Filter from '@/components/shared/Filter.vue'
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'
import SectionProceduresCard from '../../inside/section-procedures/SectionProceduresCard.vue'
</script>

<template>
	<section class="section-categories">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" />
			<h1 class="h-xl">Процедуры</h1>
			<div class="filters">
				<Filter :active="true">Все процедуры</Filter>
				<Filter :active="false">AntiAcne Concept</Filter>
				<Filter :active="false">Clear Concept</Filter>
				<Filter :active="false">Detox Concept</Filter>
				<Filter :active="false">Lifting Concept</Filter>
				<Filter :active="false">Brigth Concept</Filter>
				<Filter :active="false">Hydro Concept</Filter>
				<Filter :active="false">Red Concept</Filter>
				<Filter :active="false">Personal Concept</Filter>
			</div>
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
.section-categories {
	padding-top: 200px;
}
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
	}
	.filters {
		gap: 8px;
	}
}
</style>
