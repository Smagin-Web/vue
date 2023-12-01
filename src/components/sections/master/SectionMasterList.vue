<script setup lang="ts">
const items = [
	'Коррекция мимических морщин',
	'Объемное моделирование лица филлерами',
	'Мезотерапия, биоревитализация',
	'Нитевые методики (Аптос, ПДО)',
	'Химические пилинги'
]
</script>

<template>
	<ul class="list">
		<li v-for="(item, index) in items" :key="index" class="list-item">
			{{ item }}
		</li>
	</ul>
</template>

<style>
.list {
	padding-bottom: 66px;
}

.list-item {
	padding-bottom: 10px;
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	font-weight: 400;
}
</style>
