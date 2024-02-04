<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import CardNews from '@/components/cards/CardNews.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'
</script>

<template>
	<section class="section-service">
		<MContainer>
			<h2 class="h-xl section-title">Другие публикации</h2>
			<div class="cards">
				<CardNews />
				<CardNews />
				<CardNews />
			</div>
			<div class="button-wrapper">
				<MButtonBig>Ещё публикации</MButtonBig>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.cards {
	display: flex;
	gap: 24px;
}

.section-title {
	padding-bottom: 60px;
}

.button-wrapper {
	padding-top: 70px;
	display: flex;
	justify-content: center;
}

@media (max-width: 600px) {
	.cards {
		display: grid;
		gap: 0;
	}
	.button-wrapper {
		padding-top: 24px;
	}
	.section-title {
		padding-bottom: 26px;
	}
}
</style>
