<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionPlacesCard from './SectionPlacesCard.vue'
</script>

<template>
	<section class="section-places">
		<MContainer>
			<h3 class="heading-section">Наши филиалы</h3>
			<h5 class="text-section text">
				Атмосферные пространства комфорта и красоты
			</h5>
			<SectionPlacesCard class="card" />
			<div class="line" />
			<SectionPlacesCard class="card" />
		</MContainer>
	</section>
</template>

<style scoped>
.section-places {
	padding-bottom: 150px;
}

.text {
	padding-bottom: 100px;
}

.card {
	padding: 70px 0;
}

.line {
	height: 2px;
	width: 100%;
	display: block;
	background-color: #000;
}

@media (max-width: 1000px) {
	.section-places {
		padding-bottom: 80px;
	}
}
</style>
