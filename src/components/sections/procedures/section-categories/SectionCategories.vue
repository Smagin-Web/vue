<script setup>
import { computed } from 'vue'
import { useProceduresStore } from '@/stores/procedures'

import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'
import SectionProceduresCard from '@/components/sections/inside/section-procedures/SectionProceduresCard.vue'
import WidgetFilters from '@/components/widgets/filters/WidgetFilters.vue'

const store = useProceduresStore()
</script>

<template>
	<section id="section_categories" class="section-categories">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'Процедуры']" />

			<h1 class="h-xxl section-categories-title">Процедуры</h1>

			<WidgetFilters v-if="store.categories" :items="store.categories" />

			<div class="cards">
				<SectionProceduresCard
					v-if="!!store.procedures"
					v-for="item in store.procedures"
					:key="item"
					:data="item"
				/>
			</div>

			<div class="button-wrapper">
				<MButtonOutlineBig>Показать ещё процедуры</MButtonOutlineBig>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-categories {
	padding-bottom: 150px;
}

.section-categories-title {
	padding-bottom: 32px;
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

@media (max-width: 1400px) {
	.filters {
		gap: 20px;
	}
}

@media (max-width: 820px) {
	.section-categories {
		padding-bottom: 70px;
	}
	.section-categories-title {
		padding-bottom: 20px;
	}
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
