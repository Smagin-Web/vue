<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'

const props = defineProps({
	title: {
		type: String,
		default: 'Мы разработали продукт — AntiAcne Concept'
	},
	text: {
		type: String,
		default:
			'Задачей которого является эффективное лечение заболевания Акне первой, второй и третьей степен'
	}
})
</script>

<template>
	<section class="section-preview">
		<MContainer>
			<h3 class="heading" v-text="props.title" />
			<h4 class="heading-2" v-text="props.text" />
		</MContainer>
	</section>
</template>

<style scoped>
.section-preview {
	padding: 150px 0;
}

.heading {
	font-size: 90px;
	color: #fff;
	text-align: center;
	text-shadow: 0px 10px 20px #d0c3b4;

	padding-bottom: 54px;
}

.heading-2 {
	color: #6d6364;
	text-align: center;
	font-size: 50px;
}

@media (max-width: 1800px) {
	.heading {
		font-size: 80px;
	}

	.heading-2 {
		font-size: 40px;
	}
}

@media (max-width: 1600px) {
	.section-preview {
		padding: 120px 0;
	}

	.heading {
		font-size: 60px;
	}

	.heading-2 {
		margin: 0 auto;
		max-width: 700px;
		font-size: 24px;
	}
}

@media (max-width: 1300px) {
	.heading {
		font-size: 44px;
		padding-bottom: 42px;
	}
	.heading-2 {
		font-size: 20px;
	}
}

@media (max-width: 1000px) {
	.section-preview {
		padding: 100px 0;
	}

	.heading {
		font-size: 36px;
		padding-bottom: 30px;
	}

	.heading-2 {
		font-size: 20px;
	}
}

@media (max-width: 800px) {
	.heading {
		font-size: 30px;
		padding-bottom: 24px;
	}

	.heading-2 {
		font-size: 18px;
	}
}

@media (max-width: 600px) {
	.heading {
		font-size: 20px;
	}
	.heading-2 {
		font-size: 15px;
	}
}
</style>
