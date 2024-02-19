<script setup >
import CardBadges from './CardBadges.vue'

const props = defineProps(['badgeColor', 'badgeName', 'badgeNumber'])
</script>

<template>
	<div class="card">
		<CardBadges
			:badge-color="props.badgeColor"
			:badge-name="props.badgeName"
			:badge-number="props.badgeNumber"
		/>

		<slot />
	</div>
</template>

<style scoped>
.card {
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

@media (max-width: 1600px) {
	.card-info {
		max-width: 900px;
	}
}

@media (max-width: 1500px) {
	.card-info {
		max-width: 750px;
	}
	.card {
		padding-bottom: 0;
	}
}

@media (max-width: 1300px) {
	.card {
		padding: 50px;
		border-radius: 60px;
	}
	.card-info {
		max-width: 550px;
	}
}

@media (max-width: 1000px) {
	.card {
		height: 650px;

		padding: 50px 14px 32px;
		border-radius: 40px;
		max-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.card-info {
		max-width: 100%;
	}
}

@media (max-width: 700px) {
	.card {
		height: 700px;
	}
}

@media (max-width: 600px) {
	.card {
		height: 600px;
	}
}
</style>
