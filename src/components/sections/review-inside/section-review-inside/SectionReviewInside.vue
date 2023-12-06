<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import ButtonBack from '@/components/buttons/ButtonBack.vue'

import IconLocation from './IconLocation.vue'
import IconCalendar from './IconCalendar.vue'
import IconPerson from './IconPerson.vue'
import IconLogo from './IconLogo.vue'
</script>

<template>
	<section class="section-review-inside">
		<MContainer>
			<BreadCrumbs />
			<h3 class="heading-section heading-section-custom">
				Отзыв о работе
				<br />
				Юлии Епишиной

				<ButtonBack class="button-back">Все специалисты</ButtonBack>
			</h3>

			<div class="card-with-photo">
				<div class="card">
					<div class="card-footer">
						<h6 class="card-footer-title">Ответ клиники</h6>
						<p class="card-footer-text">
							Каролина, огромная благодарность вам за столь подробный и
							развернутый отзыв!
						</p>
						<IconLogo class="card-footer-logo" />
					</div>
					<h6 class="card-title">Каролина Милютина</h6>
					<div class="card-badges">
						<p class="card-badge">
							<IconPerson />
							36 лет
						</p>

						<p class="card-badge">
							<IconLocation />
							Москва
						</p>

						<p class="card-badge">
							<IconCalendar />
							15.05.2023
						</p>
					</div>
					<p class="card-text">
						В современном мире сложно найти профессионала , знающего толк в
						своем деле. В этом вопросе, мне очень повезло, мой ведущий
						косметолог Юлия Николаевна именно такой специалист. Каждая процедура
						для меня, это момент естественного преображения и Юлия очень четко и
						верно подбирает мне препараты и процедуры . Такой заботы, четкого
						отношения ко мне, внимания к моему здоровью я еще не встречала.
						Советы и рекомендации от этого доктора всегда уместны, высокий
						профессионализм и тактичность, аккуратность в деталях и
						педантичность до мелочей. Прокаченный и современный доктор. Если и
						доверять себя любимую в руки косметолога, тогда точно к Юлии
						Николаевне.
					</p>
				</div>
				<div class="photo-wrapper">
					<img src="./noPhoto.png" alt="" class="photo" />
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-review-inside {
	padding-top: 150px;
	padding-bottom: 250px;
}

.heading-section-custom {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.card-with-photo {
	display: flex;
	justify-content: space-between;
}

.card {
	position: relative;
	padding: 80px;
	padding-right: 75px;
	border-radius: 50px;
	background: #fff;

	max-width: 970px;
	margin-right: 50px;
}

.card:after {
	content: '';
	width: 100px;
	height: 100px;
	display: block;
	position: absolute;
	right: -32px;
	top: 63px;
	border-radius: 10px;
	background: #fff;
	transform: rotate(-45deg);
}

.card-title {
	font-size: 24px;
	padding-bottom: 30px;
}

.card-text {
	color: #6d6364;
	font-size: 22px;
}

.card-badges {
	padding-bottom: 40px;
	display: flex;
	gap: 30px;
}

.card-badge {
	display: flex;
	align-items: center;
	gap: 8px;

	color: #6d6364;
	font-size: 22px;
}

.photo-wrapper {
	max-width: 544px;
}

.photo {
	width: 100%;
}

.card-footer {
	position: absolute;
	top: 100%;
	padding: 40px;
	border-radius: 0 0 50px 50px;
	background: #ede4da;

	margin: 0 40px;
	left: 0;
	right: 0;
}

.card-footer-title {
	font-size: 24px;
	padding-bottom: 20px;
}

.card-footer-text {
	color: #6d6364;
	font-size: 22px;
  max-width: 80%;
}

.card-footer-logo {
  position: absolute;
  right: 40px;
  bottom: 32px;
}
</style>
