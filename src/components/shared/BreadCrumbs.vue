<script setup >
const props = defineProps(['items'])
</script>

<template>
	<div class="wrapper">
		<p class="item" v-for="(item, index) in props.items" :key="index + item">
			<a class="item-link" href="#" />
			{{ item }}
			<svg
				v-if="index < props.items.length - 1"
				class="item-icon"
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="10"
				viewBox="0 0 13 10"
				fill="none"
			>
				<path
					d="M7.7197 1.28033C7.4268 0.987437 7.4268 0.512558 7.7197 0.219668C8.0126 -0.0732225 8.4874 -0.0732225 8.7803 0.219668L12.7803 4.2197C13.0732 4.5126 13.0732 4.9874 12.7803 5.2803L8.7803 9.2803C8.4874 9.5732 8.0126 9.5732 7.7197 9.2803C7.4268 8.9874 7.4268 8.5126 7.7197 8.2197L10.4393 5.5H0.75C0.33579 5.5 0 5.1642 0 4.75C0 4.3358 0.33579 4 0.75 4H10.4393L7.7197 1.28033Z"
					fill="#6D6364"
				/>
			</svg>
		</p>
	</div>
</template>

<style scoped>
.wrapper {
	display: flex;
	align-items: center;
	gap: 10px;
	padding-bottom: 20px;
}
.item {
	position: relative;
	display: flex;
	align-items: center;
	gap: 10px;

	color: #6d6364;
	font-size: 22px;
	font-weight: 400;

	white-space: nowrap;
}
.item-link {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
}

@media (max-width: 1000px) {
	.wrapper {
		overflow: hidden;
		width: 0;
		height: 0;
		opacity: 0;
		pointer-events: none;
	}
}
</style>
