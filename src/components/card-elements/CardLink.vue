<script setup >
import IconCardLink from '@/components/icons/IconCardLink.vue'
const props = defineProps(['path'])
</script>

<template>
	<a class="card-link" :href="props.path">
		<IconCardLink class="card-link-icon" />
	</a>
</template>

<style scoped>
.card-link {
	display: block;
	width: 140px;
}
.card-link-icon {
	width: 100%;
	height: auto;
}

@media (max-width: 1200px) {
	.card-link {
		max-width: 100px;
	}
}

@media (max-width: 700px) {
	.card-link {
		max-width: 100px;
	}
}

@media (max-width: 500px) {
	.card-link {
		max-width: 80px;
	}
}
</style>
