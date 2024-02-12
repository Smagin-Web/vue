<script setup lang="ts">
const props = defineProps({
	isActive: Boolean
})
</script>

<template>
	<div class="burger-icon-wrapper">
		<div class="burger-icon" :class="props.isActive && 'active'" />
	</div>
</template>

<style scoped>
.burger-icon-wrapper {
	padding-top: 14px;
	padding-bottom: 14px;
}

.burger-icon,
.burger-icon:after,
.burger-icon:before {
	position: relative;
	width: 40px;
	height: 3px;
	border-radius: 2px;
	background-color: #6d6364;
	transition: 0.2s;
}

.burger-icon::after,
.burger-icon::before {
	content: '';
	display: block;
	position: absolute;
}

.burger-icon::after {
	top: -8px;
}

.burger-icon::before {
	bottom: -8px;
}

.burger-icon.active {
	background-color: #ede4da;
}

.active.burger-icon::after {
	transform: rotate(30deg) translateY(9.1px);
}

.active.burger-icon::before {
	transform: rotate(-30deg) translateY(-9.1px);
}
</style>
