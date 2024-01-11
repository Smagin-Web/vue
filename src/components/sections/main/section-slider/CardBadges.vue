<script setup lang="ts">
const props = defineProps(['badgeNumber', 'badgeColor', 'badgeName'])
</script>

<template>
	<div class="card-badges">
		<div
			class="card-badge"
			:style="`background: ${props.badgeColor}`"
			v-html="props.badgeNumber"
		/>
		<div
			class="card-badge"
			:style="`background: ${props.badgeColor}`"
			v-html="props.badgeName"
		/>
	</div>
</template>

<style scoped>
.card-badges {
	position: absolute;
	display: flex;
	top: 0;
	left: 80px;
	transform: translateY(-50%);
}

.card-badge {
	color: #fff;
	font-family: 'UABrand';
	font-size: 42px;
	font-weight: 700;

	border-radius: 20px;
	padding: 0 22px 4px;
	z-index: 20;
  white-space: nowrap;
}

@media (max-width: 1500px) {
	.card-badge {
		font-size: 30px;
		border-radius: 14px;
	}
}

@media (max-width: 1000px) {
	.card-badges {
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
	}
	.card-badge {
		font-size: 20px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 10px;
	}
}
</style>
