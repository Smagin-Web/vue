<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import CardPlace from '@/components/cards/card-place/CardPlace.vue'
</script>

<template>
	<section class="section-places">
		<MContainer>
			<h3 class="h-xl title">Наши филиалы</h3>
			<h5 class="text-lg text">Атмосферные пространства комфорта и красоты</h5>
			<div class="cards">
				<CardPlace />
				<CardPlace />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-places {
	padding-bottom: 180px;
	overflow: hidden;
}

.title {
	padding-left: 20px;
}

.text {
	padding-bottom: 60px;
	padding-left: 20px;
}

.cards {
	display: grid;
	gap: 30px;
}

@media (max-width: 1140px) {
	.text {
		padding-bottom: 50px;
	}
}

@media (max-width: 1000px) {
	.section-places {
		padding-bottom: 80px;
	}
	.title {
		padding-left: 0;
	}
	.text {
		padding-left: 0;
		padding-bottom: 20px;
	}
}
</style>
