<script setup>
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import PricesSidebar from './PricesSidebar.vue'
import PricesCard from './PricesCard.vue'
import PricesSidebarMobile from './PricesSidebarMobile.vue'
import { ref } from 'vue'
import {
	antiacneConcept,
	clearConcept,
	detoxConcept,
	liftingConcept,
	brightConcept,
	personalConcept,
	consult,
	allConcepts
} from './const.js'

const activeCategory = ref(1)

const categories = [
	{
		title: 'Все категории',
		items: allConcepts
	},
	{
		title: 'Консультации',
		items: consult
	},
	{
		title: 'AntiAcne Concept',
		items: antiacneConcept
	},
	{
		title: 'Clear Concept',
		items: clearConcept
	},
	{
		title: 'Detox Concept',
		items: detoxConcept
	},
	{
		title: 'Lifting Concept',
		items: liftingConcept
	},
	{
		title: 'Bright Concept',
		items: brightConcept
	},
	{
		title: 'Personal Concept',
		items: personalConcept
	}
]

const setActiveCategory = numberCategory => {
	activeCategory.value = numberCategory
}
</script>

<template>
	<section class="section-prices">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" :items="['Главная', 'Цены']" />
			<h1 class="h-xxl heading">Цены</h1>
			<p class="text text-sm">
				Здесь ты&nbsp;найдешь стоимость услуг, предлагаемых в&nbsp;нашем
				косметологическом центре Face Concept. После тщательного обследования
				и&nbsp;установления точного диагноза, наш специалист подберет для тебя
				индивидуальный курс лечения. Этот курс будет включать процедуры для
				домашнего ухода и&nbsp;системную терапию.
			</p>
			<div class="workspace">
				<PricesSidebar
					class="sidebar-lg"
					:itemsConcepts="categories"
					:setActiveCategory="setActiveCategory"
					:activeIndex="activeCategory"
				/>
				<PricesSidebarMobile
					class="sidebar-sm"
					:itemsConcepts="categories"
					:setActiveCategory="setActiveCategory"
					:activeIndex="activeCategory"
				/>
				<div class="cards">
					<PricesCard
						v-for="(item, index) in categories[activeCategory].items"
						:key="index"
						:price="item.price"
						:time="item.time"
						:title="item.text"
						:tech="item.tech"
					/>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-prices {
	padding-bottom: 150px;
}

.heading {
	padding-bottom: 50px;
}

.text {
	max-width: 1460px;
	padding-bottom: 50px;
}

.workspace {
	display: grid;
	grid-template-columns: max-content 1fr;
	gap: 24px;
}

.cards {
	display: grid;
	gap: 10px;
}

.sidebar-sm {
	display: none;
}

@media (max-width: 1000px) {
	.section-prices {
		padding-bottom: 80px;
	}
}

@media (max-width: 1450px) {
	.sidebar-lg {
		display: none;
	}
	.sidebar-sm {
		display: block;
		margin-bottom: 20px;
		margin-left: 0;
	}
	.workspace {
		display: block;
	}
}

@media (max-width: 1000px) {
	.heading {
		padding-bottom: 28px;
	}
	.text {
		padding-bottom: 18px;
	}
}
</style>
