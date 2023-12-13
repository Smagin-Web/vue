<script setup lang="ts">
const props = defineProps(['title', 'subtitle', 'p1', 'p2'])
</script>

<template>
	<h3 class="h-l title" v-html="props.title" />
	<h5 class="text-lg subtitle" v-html="props.subtitle" />
	<p class="text-sm card-text">
		<span v-html="props.p1" />
		<span v-html="props.p2" />
	</p>
</template>

<style scoped>
.title {
	padding-bottom: 40px;
}

.subtitle {
	padding-bottom: 30px;
}

.card-text {
	display: grid;
	gap: 26px;
	padding-bottom: 70px;
}

@media (max-width: 1300px) {
	.title {
		padding-bottom: 22px;
	}
	.subtitle {
		padding-bottom: 20px;
	}
	.card-text {
		gap: 14px;
		padding-bottom: 40px;
	}
}

@media (max-width: 1000px) {
	.title {
		padding-bottom: 18px;
	}
	.subtitle {
		padding-bottom: 25px;
	}

	.card-text {
		font-size: 16px;

		padding-bottom: 0;
	}
}
</style>
