<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import Heading from '../../typography/Heading.vue'
import CardMaster from '../../cards/CardMaster.vue'
import MButtonOutline from '../../buttons/MButtonOutline.vue'
</script>

<template>
	<section class="section-masters">
		<MContainer>
			<template #children>
				<div class="section-masters-content">
					<Heading
						tag="h3"
						font-size-heading="50px"
						text-align-heading="left"
						pb="30px"
					>
						Давай знакомиться
					</Heading>
					<Heading
						tag="h5"
						font-size-heading="24px"
						color="#6D6364"
						text-align-heading="left"
						pb="98px"
					>
						Врачи-косметологи Face Concept помогут вернуть твоей коже молодость
						и красоту!
					</Heading>
					<div style="display: flex; gap: 24px; padding-bottom: 54px">
						<CardMaster />
						<CardMaster />
						<CardMaster />
						<CardMaster />
					</div>
					<div style="display: flex; justify-content: center">
						<MButtonOutline></MButtonOutline>
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-masters {
	padding-bottom: 168px;
}
</style>
