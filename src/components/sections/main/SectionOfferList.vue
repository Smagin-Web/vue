<script setup lang="ts">
import Heading from '../../typography/Heading.vue'
</script>

<template>
	<ul class="list">
		<li class="list-item">
			<span>1</span>
			<Heading
				color="#6D6364"
				text-align-heading="left"
				font-size-heading="24px"
			>
				Просто запишись к нам на приём
			</Heading>
		</li>
		<li class="list-item">
			<span>2</span>
			<Heading
				color="#6D6364"
				text-align-heading="left"
				font-size-heading="24px"
			>
				Пройди 5-ти минутную диагностику с&nbsp;помощью Antera&nbsp;3D
			</Heading>
		</li>
		<li class="list-item">
			<span>3</span>
			<Heading
				color="#6D6364"
				text-align-heading="left"
				font-size-heading="24px"
			>
				Получи чёткий план по&nbsp;возвращению коже её&nbsp;естественной красоты
			</Heading>
		</li>
	</ul>
</template>

<style scoped>
.list {
	padding: 0;
	padding-bottom: 50px;
	max-width: 700px;
	display: grid;
	gap: 30px;
}

.list-item {
	align-items: center;
	display: grid;
	gap: 30px;
	grid-template-columns: max-content 1fr;
}

.list-item span {
	padding-top: 3px;
	color: white;
	font-family: 'Pelinka', sans-serif;
	font-size: 24px;
	font-weight: 700;

	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #6d6364;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
