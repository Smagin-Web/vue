<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import CardNews from '../../cards/CardNews.vue'
import MButton from '../../buttons/MButton.vue'
</script>

<template>
	<section class="section-read">
		<MContainer>
			<template #children>
				<h3 class="heading-section">Читай полезное и интересное</h3>
				<h5 class="text-section">
					Мы хотим поделиться с тобой некоторыми советами, которые помогут тебе
					ухаживать за кожей
				</h5>
				<div class="card-group">
					<CardNews />
					<CardNews />
					<CardNews />
				</div>
				<div style="display: flex; justify-content: center">
					<MButton>Больше интересных статей</MButton>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-read {
	padding-bottom: 100px;
}
.card-group {
	display: flex;
	gap: 24px;
	padding-bottom: 70px;
}

@media screen and (max-width: 1000px) {
	.card-group {
		gap: 14px;
		padding-bottom: 50px;
	}
}
</style>
