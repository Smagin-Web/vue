<script setup >
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'
import Icon8 from './Icon8.vue'
import IconP from './IconP.vue'
import CardPlaceContacts from './CardPlaceContacts.vue'
</script>

<template>
	<div class="card-place">
		<h2 class="h-xl">Face Concept Лефортово</h2>

		<h5 class="h-md card-text">
			Москва, улица Красноказарменная&nbsp;14А,
			<br />
			корпус&nbsp;6
		</h5>

		<div class="card-badges">
			<p class="card-badge">
				<Icon8 class="card-badge-icon" />
				Авиамоторная — 5 мин
			</p>

			<p class="card-badge">
				<IconP class="card-badge-icon" />
				Бесплатня парковка
			</p>
		</div>

		<CardPlaceContacts />

		<img class="card-img" src="./place.png" alt="" />

		<MButtonOutlineBig class="button-more">Подробнее</MButtonOutlineBig>
	</div>
</template>

<style scoped>
.card-place {
	position: relative;
	background-color: #fff;
	padding: 40px;
	border-radius: 50px;

	cursor: pointer;
}

.card-text {
	padding-bottom: 30px;
}
.card-img {
	width: 450px;
	height: auto;
	position: absolute;
	right: 40px;
	bottom: 40px;
	border-radius: 30px;
	opacity: 0.7;
	transition: 0.2s;
}

.card:hover .card-img {
	opacity: 1;
}

.card-heading {
	color: #000;
	font-size: 34px;
	padding-bottom: 40px;
}
.card-badges {
	display: flex;
	gap: 56px;
	padding-bottom: 30px;
}

.card-badge {
	display: flex;
	gap: 10px;
	align-items: center;

	color: #000;
	font-size: 22px;
	font-weight: 400;
}

@media (max-width: 1600px) {
	.card-img {
		width: 400px;
		bottom: 40px;
		top: auto;
		transform: none;
	}
}

@media (max-width: 1400px) {
	.card-badges {
		display: grid;
		gap: 16px;
	}
}

@media (max-width: 1100px) {
	.card-place {
		padding: 30px;
		border-radius: 30px;
	}
	.card-img {
		width: 350px;
		bottom: 30px;
		right: 30px;
	}
}

@media (max-width: 1000px) {
	.button-more {
		max-width: 300px;
	}
}

@media (max-width: 850px) {
	.card-img {
		width: 300px;
	}
}

@media (max-width: 750px) {
	.card-img {
		display: none;
	}
}

@media (max-width: 600px) {
	.card-place {
		gap: 32px;
	}
	.card-heading {
		font-size: 18px;
	}
	.card-badge {
		font-size: 16px;
	}
	.card-badge-icon {
		width: 19px;
		height: auto;
	}
	.card-img {
		max-width: 100%;
		width: 100%;
		height: auto;
		min-width: auto;
	}
}

@media (max-width: 550px) {
	.card-place {
		padding: 18px;
		border-radius: 10px;
	}
	.card-img {
		margin-bottom: 30px;
		position: static;
		width: 100%;
		display: block;
	}
	.button-more {
		width: 100%;
		max-width: 100%;
	}
}
</style>
