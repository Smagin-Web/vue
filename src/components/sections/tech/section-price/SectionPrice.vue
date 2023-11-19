<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionPriceItem from './SectionPriceItem.vue'
</script>

<template>
	<section class="section-price">
		<MContainer>
			<h3 class="heading-section">Цены на процедуры</h3>
			<div class="items">
				<SectionPriceItem />
				<SectionPriceItem />
				<SectionPriceItem />
				<SectionPriceItem />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-price {
	padding-top: 200px;
	padding-bottom: 150px;
}

.items {
	display: grid;
	gap: 10px;
}
</style>
