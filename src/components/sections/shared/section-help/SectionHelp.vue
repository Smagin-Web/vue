<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import SectionHelpPicture from './SectionHelpPicture.vue'
import IconTelegram2 from '@/components/icons/IconTelegram2.vue'
import IconWhatsApp2 from '@/components/icons/IconWhatsApp2.vue'
import CardShadow from './CardShadow.vue'
</script>

<template>
	<section class="section-help">
		<MContainer>
			<div class="card-wrapper">
				<div class="card">
					<div class="card-left">
						<h5 class="h-l card-heading">Остались вопросы?</h5>
						<h6 class="card-text">
							Пиши или звони напрямую нам.
							<br />
							Мы открыты, и на связи в любое разумное время.
						</h6>
						<div class="card-buttons">
							<a
								class="button-link button-link-tg"
								href="https://wa.me/79774122010"
								target="_blank"
								rel="noopener noreferrer"
							>
								Написать в Телеграм
								<IconTelegram2 />
							</a>
							<a
								class="button-link button-link-wa"
								href="https://t.me/FaceConcept_bot"
								target="_blank"
								rel="noopener noreferrer"
							>
								Написать в WhatsApp
								<IconWhatsApp2 />
							</a>
						</div>
					</div>

					<SectionHelpPicture class="card-picture" />
				</div>

				<CardShadow class="card-shadow" />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-help {
	overflow: visible;
	padding-top: 100px;
	padding-bottom: 160px;
}

.card-wrapper {
	position: relative;
}

.card-shadow {
	position: absolute;
	z-index: 0;
	bottom: -110px;
	left: 50%;
	transform: translateX(-50%);
	width: 80%;
}

.card {
	position: relative;
	z-index: 20;
	padding: 80px;
	border-radius: 100px;
	background: #ede4da;

	display: flex;
	justify-content: space-between;
	gap: 24px;
}

.card-left {
	max-width: 820px;
}

.card-heading {
	padding-bottom: 30px;
}

.card-text {
	color: #6d6364;
	font-size: 24px;
	padding-bottom: 76px;
}

.card-buttons {
	display: flex;
	gap: 30px;
}

.button-link {
	display: inline-flex;
	height: 80px;
	padding: 0px 30px;
	justify-content: center;
	align-items: center;
	gap: 20px;
	flex-shrink: 0;
	border-radius: 100px;

	color: #fff;

	font-size: 24px;
	font-weight: 700;
}

.button-link-tg {
	background: #6bb4d9;
}

.button-link-wa {
	background: #81cca4;
}

@media (max-width: 1800px) {
	.card-picture {
		margin-bottom: 40px;
	}
}

@media (max-width: 1650px) {
	.card-picture {
		min-width: 510px;
	}
}

@media (max-width: 1600px) {
	.card {
		padding: 50px;
		border-radius: 40px;
	}
	.card-buttons {
		display: grid;
		max-width: 500px;
	}
	.card-text {
		padding-bottom: 40px;
	}

	.card-picture {
		margin-bottom: 100px;
	}
}

@media (max-width: 1400px) {
	.card-heading {
		padding-bottom: 24px;
	}
	.card-text {
		font-size: 20px;
		padding-bottom: 40px;
	}
	.button-link {
		max-width: 360px;
	}
	.card-left {
		max-width: 470px;
		flex-shrink: 0;
	}
	.card-picture {
		width: 100%;
		margin-top: 100px;
		margin-bottom: 0;
	}
}

@media (max-width: 1320px) {
	.card {
		padding: 36px;
	}
	.card-heading {
		padding-bottom: 20px;
	}
	.card-text {
		font-size: 20px;
		padding-bottom: 20px;
	}
	.card-buttons {
		max-width: 400px;
	}
	.button-link {
		height: 60px;
	}
}

@media (max-width: 1220px) {
	.card-picture {
		min-width: 400px;
	}
}

@media (max-width: 1000px) {
	.card-text {
		max-width: 380px;
		font-size: 16px;
	}
	.card-buttons {
		gap: 20px;
		max-width: 280px;
	}
	.button-link {
		gap: 14px;
		font-size: 16px;
		height: 46px;
	}
	.section-help {
		padding-top: 140px;
		padding-bottom: 70px;
	}
}

@media (max-width: 930px) {
	.card-picture {
		min-width: 270px;
	}
}

@media (max-width: 800px) {
	.section-help {
		padding-top: 50px;
	}
	.card {
		display: grid;
		gap: 110px;
	}
	.card-picture {
		margin-bottom: 0;
	}
}

@media (max-width: 480px) {
	.card {
		padding: 24px;
		padding-top: 36px;
		border-radius: 30px;
	}
	.card-text {
		font-size: 14px;
	}
}

@media (max-width: 450px) {
	.card {
		gap: 80px;
	}
}

@media (max-width: 400px) {
	.card {
		gap: 50px;
	}
	.card-buttons {
		max-width: 100%;
	}
}
</style>
