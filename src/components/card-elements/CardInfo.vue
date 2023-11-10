<script setup lang="ts">
import IconPay from '@/components/icons/IconPay.vue'
import IconClock from '../icons/IconClock.vue'

const props = defineProps(['title', 'icon', 'text'])
</script>

<template>
	<div class="info">
		<div class="info-title" v-if="props.title">
			<IconPay v-if="icon === 'pay'" />
			<IconClock v-if="icon === 'time'" />
			{{ props.title }}
		</div>
		<h6 class="info-text" v-if="props.text">
			{{ props.text }}
		</h6>
	</div>
</template>

<style scoped>
.info {
	padding-bottom: 20px;
}
.info-title {
	display: flex;
	gap: 10px;
	align-items: center;

	color: #6d6364;

	font-size: 16px;
	font-weight: 400;
	padding-bottom: 10px;
}

.info-text {
	padding-bottom: 0;
	color: #000;
	font-size: 34px;
}

@media (max-width: 1000px) {
	.info-text {
		font-size: 28px;
	}
}

@media (max-width: 500px) {
	.info-text {
		font-size: 22px;
	}
}
</style>
