<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionRecCard from './SectionRecCard.vue'
</script>

<template>
	<section class="section-procedures">
		<MContainer>
			<template #children>
				<h3 class="heading-section heading">Рекомендованная косметика</h3>
				<div class="content">
					<SectionRecCard />
					<SectionRecCard />
					<SectionRecCard />
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-procedures {
	padding-bottom: 160px;
}

.heading {
	padding-bottom: 50px;
}

.content {
	display: flex;
	gap: 24px;
}
</style>
