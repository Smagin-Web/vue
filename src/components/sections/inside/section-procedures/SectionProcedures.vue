<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionProceduresCard from './SectionProceduresCard.vue'
</script>

<template>
	<section class="section-procedures">
		<MContainer>
			<template #children>
				<h3 class="heading-section">Процедуры</h3>
				<div style="display: flex; gap: 24px">
					<div style="display: grid; gap: 50px">
						<SectionProceduresCard />
						<SectionProceduresCard />
					</div>
					<div style="display: grid; gap: 50px">
						<SectionProceduresCard />
						<SectionProceduresCard />
					</div>
					<div style="display: grid; gap: 50px">
						<SectionProceduresCard />
						<SectionProceduresCard />
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped></style>
