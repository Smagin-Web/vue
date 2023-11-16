<script setup lang="ts">
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'
import Icon8 from './Icon8.vue'
import IconP from './IconP.vue'
import IconWhatsapp from './IconWhatsapp.vue'
import IconTelegram from './IconTelegram.vue'
</script>

<template>
	<div class="card">
		<div class="card-left">
			<h5 class="card-heading">
				Москва, улица Красноказарменная14А, корпус&nbsp;6
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
			<div class="card-contacts">
				<h6 class="card-number">+7 925 726-71-81</h6>
				<div class="card-contacts-icons">
					<IconWhatsapp class="card-contacts-icon" />
					<IconTelegram class="card-contacts-icon" />
				</div>
			</div>
			<MButtonOutlineBig>Подробнее</MButtonOutlineBig>
		</div>
		<div class="card-right">
			<img class="card-img" src="./place1.png" alt="" />
		</div>
	</div>
</template>

<style scoped>
.card {
	display: flex;
	justify-content: space-between;
	gap: 50px;
}
.card-left {
	max-width: 920px;
	width: 100%;
}
.card-img {
	width: 100%;
}
.card-right {
	max-width: 544px;
}
.card-heading {
	color: #000;
	font-size: 34px;
	padding-bottom: 30px;
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

.card-contacts {
	display: flex;
	align-items: center;
	gap: 30px;
	padding-bottom: 50px;
}

.card-contacts-icons {
	display: flex;
	gap: 30px;
	align-items: center;
}

.card-number {
	color: #000;
	font-size: 60px;
}

@media (max-width: 1600px) {
	.card-img {
		min-width: 450px;
	}
	.card-number {
		font-size: 50px;
	}
	.card-contacts {
		align-items: center;
	}
}

@media (max-width: 1300px) {
	.card-heading {
		font-size: 28px;
	}
	.card-number {
		font-size: 38px;
	}
	.card-contacts-icon {
		width: 40px;
		height: auto;
	}
	.card-badges {
		display: grid;
		gap: 16px;
	}
}

@media (max-width: 1140px) {
	.card {
		display: grid;
		grid-template-columns: minmax(100px, 100%);
	}
}

@media (max-width: 600px) {
	.card {
		gap: 32px;
	}
	.card-number {
		font-size: 30px;
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
	.card-contacts {
		display: grid;
		gap: 16px;
		padding-bottom: 36px;
	}
	.card-contacts-icon {
		width: 32px;
		height: auto;
	}
	.card-right {
		display: flex;
		justify-content: center;
		max-width: 100%;
	}
	.card-img {
		max-width: 100%;
		width: 100%;
		height: auto;
		min-width: auto;
	}
}
</style>
