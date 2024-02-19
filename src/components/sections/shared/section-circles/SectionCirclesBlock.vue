<script setup >
import Avatar from '@/components/ui/Avatar.vue'
</script>

<template>
	<div class="wrapper">
		<div class="groups">
			<div class="group" style="padding-bottom: 34px">
				<Avatar />
				<Avatar style="opacity: 0; z-index: -10" />
				<Avatar />
				<Avatar style="opacity: 0; z-index: -10" />
				<Avatar />
				<Avatar style="opacity: 0; z-index: -10" />
			</div>
			<div class="group group-center">
				<Avatar style="opacity: 0; z-index: -10" />
				<Avatar />
				<Avatar style="opacity: 0; z-index: -10" />
				<Avatar />
				<Avatar style="opacity: 0; z-index: -10" />
				<Avatar />
			</div>
			<div class="group">
				<Avatar />
				<Avatar style="opacity: 0; z-index: -10" />
				<Avatar />
				<Avatar style="opacity: 0; z-index: -10" />
				<Avatar />
				<Avatar style="opacity: 0; z-index: -10" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
	overflow-x: auto;
	padding-left: 40px;
}

.groups {
	position: relative;
	display: grid;
}

.group-center {
	position: absolute;
	width: 100%;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}
.group {
	display: grid;
	grid-template-columns: repeat(6, max-content);
	align-items: start;
	justify-content: start;
}

@media (max-width: 1720px) {
	.wrapper {
		margin: 0 var(--container-padding-xxl-n);
	}

	.group {
		padding: 0 var(--container-padding-xxl);
		max-width: auto;
	}
}

@media (max-width: 1420px) {
	.wrapper {
		margin: 0 var(--container-padding-xl-n);
		padding-bottom: 20px;
	}

	.group {
		padding: 0 var(--container-padding-xl);
	}
}

@media (max-width: 960px) {
	.wrapper {
		margin: 0 var(--container-padding-l-n);
	}
	.group {
		padding: 0 var(--container-padding-l);
	}
}

@media (max-width: 800px) {
	.wrapper {
		margin: 0 var(--container-padding-sm-n);
	}
	.group {
		padding: 0 var(--container-padding-sm);
	}
}
</style>
