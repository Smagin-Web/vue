<script setup lang="ts"></script>

<template>
	<ul class="list">
		<li class="list-item">
			<span>1</span>
			<h5 class="list-item-text">
				Просто запишись к&nbsp;нам&nbsp;на&nbsp;приём
			</h5>
		</li>
		<li class="list-item">
			<span>2</span>
			<h5 class="list-item-text">
				Пройди 5-ти минутную диагностику с&nbsp;помощью Antera&nbsp;3D
			</h5>
		</li>
		<li class="list-item">
			<span>3</span>
			<h5 class="list-item-text">
				Получи чёткий план по&nbsp;возвращению коже её&nbsp;естественной красоты
			</h5>
		</li>
	</ul>
</template>

<style scoped>
.list {
	padding: 0;
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

.list-item-text {
	color: #6d6364;
	font-size: 24px;
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

@media (max-width: 1600px) {
	.list-item-text {
		font-size: 20px;
	}
}

@media (max-width: 1000px) {
	.list {
		max-width: 370px;
	}
	.list-item {
		gap: 10px;
		grid-template-columns: 1fr;
	}

	.list-item span {
		padding-top: 3px;
		color: white;
		font-size: 18px;
		font-weight: 700;

		width: 40px;
		height: 40px;
	}

	.list-item-text {
		font-size: 17px;
	}
}
</style>
