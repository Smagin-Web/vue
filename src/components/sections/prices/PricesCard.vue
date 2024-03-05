<script setup>
import BadgeMd from '@/components/ui/BadgeMd.vue'

const props = defineProps(['title', 'price', 'time', 'tech'])
</script>
<template>
	<div class="card-price">
		<div class="card-info">
			<div class="card-info-group-1">
				<div class="card-info-item-1">
					<p class="card-title">Код услуги</p>
					<h6 class="h-xs">-</h6>
				</div>

				<div>
					<p class="card-title">Наименование</p>
					<h6 class="h-xs">
						{{ props.title }}
					</h6>
				</div>
			</div>

			<div>
				<p class="card-title">Аппарат</p>
				<h6 class="h-xs">{{ props.tech || '-' }}</h6>
			</div>

			<div class="card-info-group-3">
				<div>
					<p class="card-title">Время процедуры</p>
					<h6 class="h-xs">{{ props.time }} мин</h6>
				</div>

				<div>
					<p class="card-title">Стоимость</p>
					<h6 class="h-xs">{{ props.price }}₽</h6>
				</div>
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
.badges {
	display: none !important;
}
.buttons {
	display: none !important;
}
/* Временно скрываем кнопки */

.card-price {
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
	color: #ae8c8e;
	/* backdrop-filter: blur(50px); */
}

.card-title {
	color: #6d6364;
	font-size: 16px;
	padding-bottom: 10px;
	white-space: nowrap;
}

.card-info {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	gap: 20px;
	padding-bottom: 20px;
}

.card-info-group-1 {
	display: flex;
	grid-template-columns: 1fr 3fr;
	gap: 20px;
}

.card-info-item-1 {
	width: fit-content;
}

.card-info-group-3 {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
}

.badges {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}

@media (max-width: 1400px) {
	.card-info {
		grid-template-columns: 4fr 2fr 1fr;
	}
	.card-info-group-3 {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 1000px) {
	.buttons {
		position: static;
		display: block;
	}
	.button-accent {
		position: absolute;
		bottom: 20px;
		left: 20px;
		right: 20px;
		top: auto;
	}
	.button-second {
		position: absolute;
		top: 20px;
		right: 20px;
	}
}

@media (max-width: 1000px) {
	.card-price {
		padding-bottom: 100px;
	}
	.card-info {
		grid-template-columns: 1fr;
	}
	.card-info-group-1 {
		display: grid;
		grid-template-columns: 1fr;
	}
	.card-info-group-3 {
		grid-template-columns: 1fr 1fr;
	}
	.buttons {
		opacity: 1;
	}
	.button-accent,
	.button-second {
		font-size: 18px;
		padding: 16px 30px;
	}
}

@media (max-width: 700px) {
	.button-accent,
	.button-second {
		font-size: 16px;
	}
}
</style>
