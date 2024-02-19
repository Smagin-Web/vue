<script setup>
import MContainer from '@/components/shared/MContainer.vue'

const props = defineProps({
	title: {
		default:
			'Наш Центр специализируется на\u00A0аппаратной косметологии лица и\u00A0имеет медицинскую лицензию'
	},
	text1: {
		default:
			'Мы\u00A0уверены, что аппаратная косметология\u00A0— это безболезненные процедуры без стресса и\u00A0реабилитации, при которых клетки начинают работать лучше, улучшая состояние твоей кожи на\u00A0клеточном уровне.'
	},
	text2: {
		default:
			'В\u00A0отличие от\u00A0инъекций, которые дают быстрый, но\u00A0временный результат, мы\u00A0заботимся о\u00A0долгосрочном здоровье твоей кожи.'
	}
})
</script>

<template>
	<section class="section-info">
		<MContainer class="section-info-container">
			<h3 class="heading" v-text="props.title" />

			<p class="text">
				{{ props.text1 }}
				<br />
				<br />

				{{ props.text2 }}
			</p>
		</MContainer>
	</section>
</template>

<style scoped>
.section-info-container {
	position: sticky;
	top: 15px;
	padding-top: 100px;
	padding-bottom: 100px;
	display: grid;
	justify-content: center;
	align-items: center;
	align-content: center;
}
.section-info {
	padding-top: 100px;
	padding-bottom: 100px;
	position: relative;
	background: linear-gradient(180deg, #bac3d8 0%, #7986a5 100%);
}

.heading {
	max-width: 1300px;
	margin: 0 auto;
	color: #fff;
	text-align: center;
	font-family: 'Pelinka';
	font-size: 48px;
	font-weight: 700;
	padding-bottom: 80px;
	transition: 0.2s opacity;
}

.text {
	max-width: 1050px;
	color: #fff;
	font-family: 'BrisaSans';
	text-align: center;
	/* font-size: 24px; */
	font-size: 1.2vw;
	font-weight: 300;
	margin: auto;
	transition: 0.1s opacity;
}

@media (max-width: 1000px) {
	.heading {
		font-size: 22px;
		padding-bottom: 45px;
	}

	.text {
		font-size: 16px;
	}

	.section-info {
		padding: 76px 0;
	}
	.section-info-container {
		padding-top: 0;
		padding-bottom: 0;
	}
}
</style>
