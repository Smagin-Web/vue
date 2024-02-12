<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
// import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'

import CardInfo from './CardInfo.vue'
import IconWhatsApp from './IconWhatsApp.vue'
import IconTelegram from './IconTelegram.vue'
// import IconLocation from './IconLocation.vue'
</script>

<template>
	<section class="section-contacts-card">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'Контакты']" />
			<div class="content">
				<div>
					<h1 class="h-xxl contacts-title">Контакты</h1>

					<div class="numbers">
						<p class="text-sm numbers-title">Запись и консультация</p>

						<h5 class="h-xxl numbers-item">
							<a href="tel:+79774122010" style="color: black">
								+7 977 412-20-10
							</a>

							<a href="https://wa.me/79774122010">
								<IconWhatsApp class="contact-icon" />
							</a>

							<a href="https://t.me/FaceConcept_bot">
								<IconTelegram class="contact-icon" />
							</a>
						</h5>

						<h5 class="h-xxl">
							<a href="tel:+74952913578" style="color: black">
								+7 495 291-35-78
							</a>
						</h5>
					</div>

					<a href="#">
						<p class="h-md contacts-mail">hello@faceconcept.ru</p>
					</a>

					<p class="h-md contacts-info">
						Москва, улица Красноказарменная 14А, корпус 6
					</p>

					<p class="text-sm">с 10:00 до 22:00 без выходных</p>
				</div>
				<div class="content-right">
					<CardInfo class="card-mini" />
					<!-- <MButtonOutlineBig class="button-show-all">
						<IconLocation />
						Филиалы
					</MButtonOutlineBig> -->
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-contacts-card {
	padding-bottom: 150px;
}

.content-right {
	max-width: 348px;
}

.content {
	display: flex;
	justify-content: space-between;
	align-items: end;
	gap: 32px;
}

.button-show-all {
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.contacts-title {
	padding-bottom: 50px;
}

.contacts-mail {
	display: inline-block;
	border-bottom: 2px solid #000;
	padding-bottom: 2px;
	margin-bottom: 40px;
}

.contacts-info {
	padding-bottom: 20px;
}

.numbers {
	padding-bottom: 40px;
}

.numbers-title {
	padding-bottom: 20px;
}

.numbers-item {
	padding-bottom: 20px;
	display: flex;
	gap: 30px;
}

@media (max-width: 1200px) {
	.contact-icon {
		width: 46px;
		height: auto;
	}
}

@media (max-width: 1000px) {
	.section-contacts-card {
		padding-bottom: 70px;
	}
	.contact-icon {
		width: 30px;
	}
	.numbers-item {
		gap: 16px;
	}
	.contacts-title {
		padding-bottom: 28px;
	}
}

@media (max-width: 720px) {
	.content {
		display: grid;
	}
}
</style>
