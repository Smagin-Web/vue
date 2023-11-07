<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionProceduresCard from './SectionProceduresCard.vue'
import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
</script>

<template>
	<section class="section-procedures">
		<MContainer>
			<template #children>
				<h3 class="heading-section">Процедуры</h3>

				<div class="content">
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

				<div class="button-wrapper">
					<MButtonOutline class="button">Все процедуры</MButtonOutline>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-procedures {
	padding-bottom: 90px;
}

.content {
	display: grid;
	gap: 24px;
	grid-template-columns: 1fr 1fr 1fr;
	padding-bottom: 70px;
}

.button-wrapper {
	display: flex;
	justify-content: center;
}

.button {
	padding: 24px 0;
	width: 100%;
	max-width: 400px;
	line-height: 30px;
}

@media (max-width: 1550px) {
	.content {
		grid-template-columns: 1fr 1fr;
		justify-content: start;
	}
}
</style>
