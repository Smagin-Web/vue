<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import SectionResultBanner from './SectionResultBanner.vue'
</script>

<template>
	<section class="section-result">
		<MContainer>
			<template #children>
				<div class="content">
					<SectionResultBanner class="banner" />
					<div>
						<h3 class="heading">Что ты получишь<br />в результате приёма?</h3>
						<h5 class="text">
							Анализируя полученные данные,<br />врач проведёт оценку состояния
							твоей кожи<br />и&nbsp;определит стадию заболевания
						</h5>
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-result {
	padding-top: 250px;
	padding-bottom: 190px;
	overflow-x: hidden;
}

.content {
	display: grid;
	gap: 80px;
	align-items: center;
	grid-template-columns: minmax(100px, 800px) minmax(200px, 810px);
}

.heading {
	padding-bottom: 40px;
	font-size: 42px;
}

.text {
	color: #6d6364;
	font-size: 24px;
}

@media (max-width: 1500px) {
	.heading {
		padding-bottom: 26px;
		font-size: 36px;
		max-width: 700px;
	}
	.text {
		font-size: 18px;
		max-width: 700px;
		line-height: 1.2;
	}
}

@media (max-width: 1000px) {
	.section-result {
		padding-top: 0;
		padding-bottom: 90px;
	}
	.content {
		display: flex;
		flex-direction: column-reverse;
		gap: 80px;
		grid-template-columns: 1fr;
		align-items: stretch;
		max-width: 400px;
	}

	.banner {
		padding-top: 25%;
	}

	.heading {
		font-size: 20px;
	}
	.text {
		font-size: 17px;
		line-height: 1.2;
	}
}
</style>
