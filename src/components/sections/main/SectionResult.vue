<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import PictureResult from '../../icons/PictureResult.vue'
</script>

<template>
	<section class="section-result">
		<MContainer>
			<template #children>
				<div class="section-result__grid">
					<div class="section-result__picture-container">
						<PictureResult />
					</div>
					<div>
						<h3 class="section-result__heading">
							Что ты получишь<br />в результате приёма?
						</h3>
						<p>
							Анализируя полученные данные,<br />врач проведёт оценку состояния
							твоей кожи<br />и&nbsp;определит стадию заболевания
						</p>
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
}
.section-result__picture-container {
	position: relative;
	border-radius: 150px 20px;
	background: #ede4da;
	max-height: 442px;
	height: 500px;
	-webkit-box-shadow: -2px 33px 64px -6px rgba(49, 34, 17, 0.1);
	-moz-box-shadow: -2px 33px 64px -6px rgba(49, 34, 17, 0.1);
	box-shadow: -2px 33px 64px -6px rgba(49, 34, 17, 0.1);
}

.section-result__picture-container svg {
	position: absolute;
	bottom: 0;
	left: 20%;
}

.section-result__grid {
	display: grid;
	gap: 168px;
	align-items: center;
	grid-template-columns: 1fr 1fr;
}

.section-result__heading {
	padding-bottom: 40px;
	color: #000;
	font-size: 42px;
	font-weight: 700;
}

.section-result p {
	color: #6d6364;
	font-size: 24px;
	font-weight: 700;
}
</style>
