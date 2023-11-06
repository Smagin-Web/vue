<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
</script>

<template>
	<section class="section-preview">
		<MContainer>
			<template #children>
				<h3 class="heading">Мы разработали продукт&nbsp;— AntiAcne Concept</h3>
				<h4 class="heading-2">
					Задачей которого является эффективное лечение заболевания Акне первой,
					второй и&nbsp;третьей степен
				</h4>
			</template>
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

	margin: 0 -80px;
	padding-bottom: 54px;
}

.heading-2 {
	color: #6d6364;
	text-align: center;
	font-size: 50px;
}

@media (max-width: 1760px) {
	.heading {
		margin: 0 -50px;
		font-size: 80px;
	}

	.heading-2 {
		font-size: 46px;
	}
}

@media (max-width: 1550px) {
	.section-preview {
		padding: 120px 0;
	}

	.heading {
		margin: 0 -30px;
		font-size: 70px;
	}

	.heading-2 {
		font-size: 42px;
	}
}

@media (max-width: 1370px) {
	.heading {
		margin: 0 -20px;
		font-size: 60px;
		padding-bottom: 42px;
	}

	.heading-2 {
		font-size: 36px;
	}
}

@media (max-width: 1200px) {
	.heading {
		margin: 0 -10px;
		font-size: 52px;
	}

	.heading-2 {
		font-size: 34px;
	}
}

@media (max-width: 1100px) {
	.heading {
		margin: 0 -10px;
		font-size: 48px;
	}

	.heading-2 {
		font-size: 32px;
	}
}

@media (max-width: 1000px) {
	.section-preview {
		padding: 100px 0;
	}

	.heading {
		margin: 0;
		font-size: 44px;
	}

	.heading-2 {
		font-size: 28px;
	}
}

@media (max-width: 580px) {
	.heading {
		margin: 0;
		font-size: 38px;
		padding-bottom: 40px;
	}

	.heading-2 {
		font-size: 24px;
	}
}

@media (max-width: 480px) {
	.heading {
		margin: 0;
		font-size: 34px;
	}
	.heading-2 {
		font-size: 22px;
	}
}
</style>
