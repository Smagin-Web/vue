<script lang="ts" setup>
import BadgeMd from '@/components/ui/BadgeMd.vue'
</script>
<template>
	<div class="card">
		<div class="card-info">
			<div>
				<p class="card-title">Код услуги</p>
				<h6 class="card-text">А22.30.022</h6>
			</div>
			<div>
				<p class="card-title">Наименование</p>
				<h6 class="card-text">
					Ультразвуковой SMAS - лифтинг. Лицо полностью , включая подчелюстную
					зону
				</h6>
			</div>
			<div>
				<p class="card-title">Аппарат</p>
				<h6 class="card-text">Аппарат LIFTERA-A, Южная Корея</h6>
			</div>
			<div>
				<p class="card-title">Время процедуры</p>
				<h6 class="card-text">120 мин</h6>
			</div>
			<div>
				<p class="card-title">Стоимость</p>
				<h6 class="card-text">44 900₽</h6>
			</div>
		</div>

		<div class="badges">
			<BadgeMd type="3">AntiAcne Concept</BadgeMd>
			<BadgeMd type="1">Detox Concept</BadgeMd>
			<BadgeMd type="2">Lifting Concept</BadgeMd>
		</div>

		<div class="buttons">
			<button class="button-accent">Записаться</button>
			<button class="button-second">Об услуге</button>
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	overflow: hidden;
	padding: 20px;
	border-radius: 30px;
	background: #fff;
	min-height: 114px;
}

.buttons {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	width: 54%;
	background-color: #fff;

	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: 0.2s;
}

.card:hover .buttons {
	opacity: 1;
}

.button-accent,
.button-second {
	border-radius: 100px;
	background: #ae8c8e;
	color: #fff;
	font-family: 'BrisaSans';
	font-size: 24px;
	font-weight: 700;
	border: none;
	padding: 25px 70px;
}

.button-second {
	background: rgba(174, 140, 142, 0.2);
  color: #AE8C8E;
	/* backdrop-filter: blur(50px); */
}

.card-title {
	color: #6d6364;
	font-size: 16px;
	padding-bottom: 10px;
}

.card-info {
	display: grid;
	grid-template-columns: 1fr 6fr 4fr 2fr 2fr;
	gap: 20px;
	padding-bottom: 20px;
}

.card-text {
	color: #000;
	font-size: 20px;
}

.badges {
	display: flex;
	gap: 10px;
}
</style>
