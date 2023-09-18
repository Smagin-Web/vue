<script setup lang="ts">
import MButtonOutline from '../buttons/MButtonOutline.vue'
import MButton from '../buttons/MButton.vue'
import Heading from '../typography/Heading.vue'
</script>

<template>
	<div class="card-inside">
		<div>
			<Heading
				font-size-heading="34px"
				max-width="945px"
				text-align-heading="left"
				pb="70px"
			>
				Первичный приём врача дерматолога +<br />диагностика Antera 3D
			</Heading>
			<div class="card-inside-buttons">
				<MButton>Записаться на приём</MButton>
				<MButtonOutline></MButtonOutline>
			</div>
		</div>

		<div class="card-inside-prices">
			<Heading
				tag="h5"
				color="#E4B5C3"
				font-size-heading="40px"
				text-align-heading="end"
				class="card-inside-prices_old"
			>
				2 500₽
			</Heading>
			<Heading tag="h5" font-size-heading="100px">990₽</Heading>
		</div>
	</div>
</template>

<style scoped>
.card-inside {
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	padding: 80px;
	border-radius: 50px;
}

.card-inside-prices {
	display: grid;
	align-items: end;
}

.card-inside-prices_old {
	display: flex;
	justify-content: end;
	margin-bottom: -60px;
	position: relative;
}

.card-inside-prices_old:after {
	content: '';
	display: block;
	height: 6px;
	width: 55%;

	transform: rotate(13deg);
	background-color: #d2a0af;
	position: absolute;
	top: 18px;
	border-radius: 20px;
}

.card-inside-buttons {
	display: flex;
	gap: 20px;
}
</style>
