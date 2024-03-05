<script setup >
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import CardInfo from '@/components/card-elements/CardInfo.vue'

const props = defineProps(['text', 'title', 'price', 'info'])
</script>

<template>
	<div class="card-tariff">
		<h6 class="card-tag">Курс</h6>
		<h5 class="card-heading">{{ props.title }}</h5>
		<p class="card-text">
			{{ props.text }}
		</p>
		<CardInfo :text="props.info" />
		<CardInfo icon="pay" title="Стоимость" :text="props.price" />
		<div class="card-button-wrapper">
			<MButtonBig class="card-button">Хочу оформить</MButtonBig>
		</div>
	</div>
</template>

<style scoped>
.card-tariff {
	max-width: 544px;
	padding: 40px;
	border-radius: 50px;
	background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.4) 100%);
}

.card-tag {
	color: #6d6364;
	font-size: 24px;
	padding-bottom: 10px;
	padding-top: 18px;
}

.card-heading {
	display: block;
	color: #000;
	font-size: 70px;
	margin-bottom: 40px;
	height: 162px;
}

.card-text {
	padding-bottom: 30px;
	color: #6d6364;
	font-size: 22px;
}

.card-button-wrapper {
	padding-top: 68px;
	padding-bottom: 28px;
	display: flex;
	justify-content: center;
}

.card-button {
	margin-right: auto;
	margin-left: auto;
}

@media (max-width: 1630px) {
	.card-button {
		width: 100%;
	}

	.card-heading {
		font-size: 64px;
	}
}

@media (max-width: 1540px) {
	.card-heading {
		font-size: 54px;
	}
	.card-text {
		font-size: 20px;
	}
	.card-heading {
		margin-bottom: 10px;
	}
	.card-button-wrapper {
		padding-top: 40px;
		padding-bottom: 0;
	}
}

@media (max-width: 1300px) {
	.card-tariff {
		max-width: 100%;
	}
	.card-heading {
		height: auto;
	}
}

@media (max-width: 1000px) {
	.card-tariff {
		padding: 30px;
		border-radius: 30px;
	}
	.card-tag {
		padding-top: 0;
		font-size: 20px;
	}
	.card-heading {
		font-size: 30px;
	}
	.card-text {
		font-size: 16px;
		padding-bottom: 20px;
	}
	.card-button-wrapper {
		padding-top: 0;
		padding-bottom: 0;
	}
}

@media (max-width: 430px) {
	.card-tariff {
		padding: 18px;
		border-radius: 20px;
	}
	.card-button-wrapper {
		padding-top: 12px;
	}
}
</style>
