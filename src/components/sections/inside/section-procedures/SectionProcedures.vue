<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionProceduresCard from './SectionProceduresCard.vue'
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'
</script>

<template>
	<section class="section-procedures">
		<MContainer>
			<h3 class="h-xl">Процедуры</h3>

			<div class="content">
				<div class="content-group">
					<SectionProceduresCard />
					<SectionProceduresCard />
				</div>
				<div class="content-group">
					<SectionProceduresCard />
					<SectionProceduresCard />
				</div>
				<div class="content-group content-group-lg">
					<SectionProceduresCard />
					<SectionProceduresCard />
				</div>
			</div>

			<div class="button-wrapper">
				<MButtonOutlineBig>Все процедуры</MButtonOutlineBig>
			</div>
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

.content-group {
	display: grid;
	gap: 50px;
}

.button-wrapper {
	display: flex;
	justify-content: center;
}

@media (max-width: 1550px) {
	.content {
		grid-template-columns: 1fr 1fr;
		justify-content: start;
	}

	.content-group-lg {
		display: none;
	}
}

@media (max-width: 850px) {
	.section-procedures {
		display: none;
	}
}
</style>
