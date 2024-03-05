<script setup>
// import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
import MButton from '@/components/buttons/MButton.vue'
import CardInfo from './CardInfo.vue'
import CardImage from './CardImage.vue'
import CardBadges from './CardBadges.vue'

const props = defineProps([
	'title',
	'subtitle',
	'p1',
	'p2',
	'badgeNumber',
	'badgeName',
	'badgeColor',
	'iconSrc',
	'iconBigSrc',
	'iconPng',
	'link'
])
</script>

<template>
	<div class="card-slider">
		<CardBadges
			:badge-color="props.badgeColor"
			:badge-name="props.badgeName"
			:badge-number="props.badgeNumber"
		/>
		<div class="card-info">
			<CardInfo
				:title="props.title"
				:subtitle="props.subtitle"
				:p1="props.p1"
				:p2="props.p2"
			/>
		</div>

		<div>
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
	</div>
</template>

<style scoped>
.card-slider {
	position: relative;

	padding: 70px;
	padding-top: 80px;
	padding-right: 80px;
	padding-bottom: 150px;

	border-radius: 100px;
	background: #fff;
	height: 610px;
	z-index: 30;
}

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
	.card-slider {
		padding-bottom: 0;
	}
	.card-info {
		max-width: 550px;
	}
}

@media (max-width: 1300px) {
	.card-slider {
		padding: 50px;
		border-radius: 60px;
	}
	.card-buttons {
		max-width: 600px;
	}
	.card-button {
		width: 100%;
		max-width: 100%;
		width: 300px;
	}
	.card-info {
		max-width: 550px;
	}
}

@media (max-width: 1000px) {
	.card-slider {
		height: 650px;

		padding: 50px 14px 32px;
		border-radius: 40px;
		max-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
}

@media (max-width: 700px) {
	.card-slider {
		height: 700px;
	}
}

@media (max-width: 600px) {
	.card-slider {
		height: 600px;
	}
}

@media (max-width: 400px) {
	.card-buttons {
		display: block;
	}
}
</style>
