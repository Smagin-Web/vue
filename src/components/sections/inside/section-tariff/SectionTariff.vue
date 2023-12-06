<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionTariffCard from './SectionTariffCard.vue'

const text = `Lorem ipsum dolor sit amet consectetur. Elit mi in nisi tincidunt magna at in fermentum. Dapibus sit cursus ut elit a lobortis pellentesque urna. Tempus eu mattis nibh facilisi amet et vitae quis. Enim pulvinar sed quis porttitor.`
</script>

<template>
	<section class="section-procedures">
		<MContainer>
			<h3 class="h-xl heading">Выбери свой тариф</h3>
			<div class="cards-wrapper">
				<SectionTariffCard
					:text="text"
					title="Базовый"
					price="5 900₽"
					info="3 процедуры"
				/>
				<SectionTariffCard
					class="card-2"
					:text="text"
					title="Базовый Плюс"
					price="7 900₽"
					info="5 процедур"
				/>
				<SectionTariffCard
					class="card-3"
					:text="text"
					title="Полная очистка"
					price="12 900₽"
					info="10 процедур"
				/>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-procedures {
	padding-bottom: 160px;
}

.cards-wrapper {
	display: flex;
	justify-content: space-between;
	gap: 24px;
}

.card-2 {
	background: linear-gradient(
		180deg,
		#dde3f1 0%,
		rgba(255, 255, 255, 0.4) 100%
	);
}

.card-3 {
	background: linear-gradient(
		180deg,
		#d8c4b0 0%,
		rgba(255, 255, 255, 0.4) 100%
	);
}

@media (max-width: 1300px) {
	.cards-wrapper {
		display: grid;
	}
}
</style>
