<script setup ></script>

<template>
	<ul class="list">
		<li class="list-item">
			<span>1</span>
			<h5 class="text-lg">Просто запишись к&nbsp;нам&nbsp;на&nbsp;приём</h5>
		</li>
		<li class="list-item">
			<span>2</span>
			<h5 class="text-lg">
				Пройди 30-ти минутную диагностику с&nbsp;помощью JANUS PRO
			</h5>
		</li>
		<li class="list-item">
			<span>3</span>
			<h5 class="text-lg">
				Получи чёткий план по&nbsp;возвращению коже её&nbsp;естественной красоты
			</h5>
		</li>
	</ul>
</template>

<style scoped>
.list {
	padding: 0;
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

@media (max-width: 1400px) {
	.list-item {
		gap: 12px;
	}
	.list-item span {
		padding-top: 3px;
		color: white;
		font-size: 18px;
		font-weight: 700;

		width: 40px;
		height: 40px;
	}
}

@media (max-width: 1000px) {
	.list {
		gap: 10px;
	}
	.list-item span {
		font-size: 16px;

		width: 30px;
		height: 30px;
	}
}

@media (max-width: 600px) {
	.list {
		max-width: 370px;
	}
	.list-item {
		gap: 10px;
		grid-template-columns: 1fr;
	}

	.list {
		gap: 10px;
	}
}
</style>
