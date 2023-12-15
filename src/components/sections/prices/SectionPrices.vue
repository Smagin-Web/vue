<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import PricesSidebar from './PricesSidebar.vue'
import PricesCard from './PricesCard.vue'
import PricesSidebarMobile from './PricesSidebarMobile.vue'
</script>

<template>
	<section class="section-prices">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" />
			<h1 class="h-xxl heading">Цены</h1>
			<p class="text">
				Здесь ты&nbsp;найдешь стоимость услуг, предлагаемых в&nbsp;нашем
				косметологическом центре Face Concept. После тщательного обследования
				и&nbsp;установления точного диагноза, наш специалист подберет для тебя
				индивидуальный курс лечения. Этот курс будет включать процедуры для
				домашнего ухода и&nbsp;системную терапию.
			</p>
			<div class="workspace">
				<PricesSidebar class="sidebar-lg" />
				<PricesSidebarMobile class="sidebar-sm" />
				<div class="cards">
					<PricesCard />
					<PricesCard />
					<PricesCard />
					<PricesCard />
					<PricesCard />
					<PricesCard />

					<PricesCard />
					<PricesCard />
					<PricesCard />
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
	color: #6d6364;
	font-size: 22px;
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
	}
	.workspace {
		display: block;
	}
}
</style>
