<script setup>
import MContainer from '@/components/shared/MContainer.vue'
import SectionTechShadow from './SectionTechShadow.vue'
import SectionTechPicture from './SectionTechPicture.vue'

const props = defineProps({
	text1: {
		default:
			'В\u00A0ходе лечения мы\u00A0применяем новейшее оборудование и\u00A0инновационные терапевтические методики.'
	},
	text2: {
		default:
			'Лечение в\u00A0нашем центре проходит без боли и\u00A0других неприятных ощущений.'
	},
	text3: {
		default:
			'Благодаря комплексному подходу к\u00A0терапии угревой сыпи мы\u00A0не\u00A0только быстро избавляем наших пациентов от\u00A0кожных проблем, но\u00A0и предотвращаем их\u00A0повторное появление в\u00A0будущем.'
	},
	text4: {
		default:
			'Результат нашего лечения ты\u00A0сможешь увидеть уже после первого посещения.'
	},
	textDisable2: {
		default: false
	}
})
</script>

<template>
	<section class="section-tech">
		<MContainer>
			<div class="content">
				<div class="content-left">
					<div class="card-wrapper">
						<div class="card card-1">
							<h5 class="card-text">
								{{ props.text1 }}
								<br v-if="!props.textDisable2" />
								<br v-if="!props.textDisable2" />
								{{ props.textDisable2 ? undefined : props.text2 }}
							</h5>
						</div>
						<SectionTechShadow class="card-shadow" />
					</div>
					<SectionTechPicture class="picture" />
				</div>

				<div class="card-wrapper">
					<div class="card card-2">
						<h5 class="card-text">
							{{ props.text3 }}
							<br />
							<br />
							{{ props.text4 }}
						</h5>
					</div>
					<SectionTechShadow class="card-shadow" />
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.content {
	display: flex;
	align-items: center;
	gap: 24px;
}

.content-left {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.picture {
	position: relative;
	z-index: 10;
	top: -106px;
	transform: translateX(16px);
}

.card-wrapper {
	position: relative;
}

.card-wrapper:nth-child(2) {
	margin-bottom: 8%;
}

.card {
	width: 100%;
	position: relative;
	background: #ede4da;
	max-width: 828px;
	z-index: 10;

	padding: 120px 80px;
}

.card-1 {
	padding-bottom: 176px;
	border-radius: 150px 20px;
}

.card-2 {
	border-radius: 20px 150px;
}

.card-text {
	max-width: 668px;
	color: #000;
	font-size: 24px;
}

.card-shadow {
	width: 100%;
	height: auto;
	position: absolute;
	bottom: -100px;
	left: -60px;
	z-index: 0;
}

@media (max-width: 1350px) {
	.card {
		padding: 100px 50px;
	}

	.card-1 {
		padding-bottom: 140px;
		border-radius: 100px 18px;
	}

	.card-2 {
		border-radius: 18px 100px;
	}

	.card-text {
		font-size: 20px;
	}

	.picture {
		width: 80%;
		top: -150px;
	}

	.card-shadow {
		bottom: -80px;
	}
}

@media (max-width: 1150px) {
	.picture {
		top: -180px;
	}

	.card {
		padding: 60px 40px;
	}

	.card-1 {
		padding-bottom: 110px;
		border-radius: 70px 18px;
	}

	.card-2 {
		border-radius: 18px 70px;
	}

	.card-shadow {
		bottom: -60px;
		left: -30px;
	}

	.card-text {
		font-size: 18px;
	}
}

@media (max-width: 1000px) {
	.card {
		padding: 40px 28px;
	}

	.card-1 {
		border-radius: 50px 16px;
		padding-bottom: 70px;
	}

	.card-2 {
		border-radius: 16px 50px;
	}
}

@media (max-width: 730px) {
	.content-left {
		display: block;
	}

	.content {
		display: block;
	}

	.picture {
		margin: 0 auto;
		max-width: 300px;
		height: auto;
		top: -40px;
		display: block;
		overflow: hidden;
	}

	.card-2 {
		margin-top: -40px;
	}

	.card-shadow {
		left: 0;
		width: 100%;
		bottom: -40px;
	}
}
</style>
