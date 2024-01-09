<script setup lang="ts">
import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
import MButton from '@/components/buttons/MButton.vue'
import CardInfo from './CardInfo.vue'
import CardWrapper from './CardWrapper.vue'
import CardImage from './CardImage.vue'

const props = defineProps([
	'title',
	'subtitle',
	'p1',
	'p2',
	'badgeNumber',
	'badgeName',
	'badgeColor',
	'iconSrc',
	'iconBigSrc'
])
</script>

<template>
	<CardWrapper
		:badge-color="props.badgeColor"
		:badge-name="props.badgeName"
		:badge-number="props.badgeNumber"
	>
		<div class="card-info">
			<CardInfo
				:title="props.title"
				:subtitle="props.subtitle"
				:p1="props.p1"
				:p2="props.p2"
			/>
		</div>

		<Suspense><CardImage :icon-src="props.iconSrc" :icon-big-src="props.iconBigSrc" /></Suspense>

		<div class="card-buttons">
			<MButton class="first-button">Записаться на приём</MButton>
			<MButtonOutline>Задать вопрос</MButtonOutline>
		</div>
	</CardWrapper>
</template>

<style scoped>
.card-buttons {
	display: flex;
	gap: 20px;
}

.card-info {
	max-width: 880px;
}

@media (max-width: 1600px) {
	.card-info {
		max-width: 900px;
	}
}

@media (max-width: 1500px) {
	.card-info {
		max-width: 550px;
	}
}

@media (max-width: 1300px) {
	.card-buttons {
		display: grid;
		max-width: 600px;
	}
	.card-buttons button {
		width: 100%;
		max-width: 100%;
		width: 300px;
	}
}

@media (max-width: 1000px) {
	.card-buttons {
		max-width: 100%;
		justify-content: center;
		justify-items: center;
	}
	.card-info {
		max-width: 100%;
	}
}
</style>
