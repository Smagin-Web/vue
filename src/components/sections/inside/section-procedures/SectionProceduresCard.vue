<script setup lang="ts">
import SectionProceduresBadge from './SectionProceduresBadge.vue'
import IconLink from './IconLink.vue'
import CardInfo from '@/components/card-elements/CardInfo.vue'
import CardLink from '@/components/card-elements/CardLink.vue'
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

		<CardInfo icon="time" title="Время процедуры" text="1 час 30 минут" />
		<CardInfo icon="pay" title="Стоимость" text="4 500₽" />

		<CardLink class="card-link" />
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
</style>
