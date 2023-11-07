<script setup lang="ts">
import IconClock from '@/components/icons/IconClock.vue'
import IconPay from '@/components/icons/IconPay.vue'
import SectionProceduresBadge from './SectionProceduresBadge.vue'
import IconLink from './IconLink.vue'
</script>

<template>
	<div class="card">
		<img src="./picture.png" class="card-image" alt="" />
		<div style="display: flex; gap: 10px">
			<SectionProceduresBadge>AntiAcne Concept</SectionProceduresBadge>
			<SectionProceduresBadge>Detox Concept</SectionProceduresBadge>
		</div>
		<h5 class="card-heading">
			Аппаратная чистка лица Hydro&nbsp;Peel&nbsp;Plus
		</h5>
		<p class="card-text">
			Красота и здоровье кожи надолго, всего за одну процедуру.
		</p>
		<div style="display: flex; gap: 6px; padding-bottom: 10px">
			<IconClock />
			<p class="card-mini-text">Время процедуры</p>
		</div>
		<h6 class="card-big-text">1 час 30 минут</h6>
		<div style="display: flex; gap: 6px; padding-bottom: 10px">
			<IconPay />
			<p class="card-mini-text">Стоимость</p>
		</div>
		<h6 class="card-big-text">4 500₽</h6>

		<a class="card-link">
			<IconLink class="card-link-icon" />
		</a>
	</div>
</template>

<style scoped>
.card {
	border-radius: 50px;
	background: #fff;
	padding: 40px;
	max-width: 544px;
	position: relative;
}

.card-image {
	width: 100%;
	height: auto;
	display: block;
	margin-bottom: 20px;
}

.card-heading {
	color: #000;
	font-size: 24px;
	padding-bottom: 20px;
	padding-top: 20px;
}

.card-text {
	color: #6d6364;
	font-size: 22px;
	font-weight: 400;
	padding-bottom: 30px;
}

.card-mini-text {
	color: #6d6364;
	font-size: 16px;
}

.card-big-text {
	color: #000;
	font-size: 34px;
	padding-bottom: 20px;
}

.card-link {
	position: absolute;
	right: 40px;
	bottom: 40px;
}

@media (max-width: 1000px) {
	.card {
		border-radius: 30px;
		padding: 26px;
	}

	.card-link-icon {
		width: 100px;
		height: auto;
	}

	.card-big-text {
		font-size: 28px;
	}

	.card-heading {
		padding-top: 16px;
		padding-bottom: 16px;
	}

	.card-text {
		padding-bottom: 16px;
		font-size: 18px;
		max-width: 330px;
	}
}

@media (max-width: 900px) {
	.card {
		padding-bottom: 10px;
	}

	.card-heading {
		font-size: 20px;
		padding-bottom: 10px;
	}

	.card-text {
		font-size: 16px;
	}

	.card-link {
		bottom: 20px;
    right: 30px;
	}
}

@media (max-width: 800px) {
	.card-big-text {
		font-size: 24px;
	}
}
</style>
