<script  setup>
const props = defineProps(['type'])

const className = `badge-${props.type}`
</script>

<template>
	<div class="badge-md" v-bind:class="className">
		<a href="#" class="badge-md-link" />
		<slot />
	</div>
</template>

<style scoped>
.badge-md {
	position: relative;
	border-radius: 10px;
	background: #eea3a3;
	padding: 8px 10px;

	color: #fff;

	font-family: 'UABrand';
	font-size: 16px;
	font-weight: 700;
	white-space: nowrap;
	transition: 0.1s;
}

.badge-md:hover {
	opacity: 0.8;
}

.badge-1 {
	background-color: #98cbfa;
}

.badge-2 {
	background-color: #81cca4;
}

.badge-3 {
	background-color: #eea3a3;
}

.badge-md-link {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
}

@media (max-width: 1000px) {
	.badge-md {
		padding: 4px 7px;
		font-size: 10px;
		border-radius: 6px;
	}
}
</style>
