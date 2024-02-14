<script setup lang="ts">
// import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
import MButton from '@/components/buttons/MButton.vue'
import CardImage from './CardImage.vue'

const props = defineProps(['link', 'iconSrc', 'iconBigSrc', 'iconPng'])
</script>

<template>
	<div class="card-buttons-with-head">
		<Suspense>
			<CardImage
				:icon-src="props.iconSrc"
				:icon-big-src="props.iconBigSrc"
				:icon-png="props.iconPng"
			/>
		</Suspense>

		<div class="card-buttons">
			<router-link :to="props.link">
				<MButton class="card-button">Подробнее</MButton>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
.card-info {
	max-width: 880px;
}

.card-button:hover {
	opacity: 0.8 !important;
}

.card-button {
	position: absolute;
	bottom: 50px;
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
		max-width: 600px;
	}
	.card-button {
		width: 100%;
		max-width: 100%;
		width: 300px;
	}
}

@media (max-width: 1000px) {
	.card {
		height: 650px;
	}
	.card-buttons {
		display: flex;
		justify-content: center;
		max-width: 100%;
	}
	.card-button {
		position: static;
	}
	.card-info {
		max-width: 100%;
	}
	.card {
		border-radius: 20px;
	}
}

@media (max-width: 500px) {
	.card {
		padding-top: 40px;
	}
}
</style>
