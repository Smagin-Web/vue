<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import ButtonBack from '@/components/buttons/ButtonBack.vue'

import IconLocation from './IconLocation.vue'
import IconCalendar from './IconCalendar.vue'
import IconPerson from './IconPerson.vue'
import IconLogo from './IconLogo.vue'
import IconText1 from './IconText1.vue'
import IconText2 from './IconText2.vue'
</script>

<template>
	<section class="section-review-inside">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'Специалисты', 'Ольга Заика']" />
			<h3 class="h-xxl section-title">
				Отзыв о работе
				<br />
				Юлии Епишиной

				<ButtonBack class="button-back">Все специалисты</ButtonBack>
			</h3>

			<div class="card-with-photo">
				<div class="card">
					<div class="card-footer">
						<h6 class="h-sm-ultra card-footer-title">Ответ клиники</h6>
						<p class="text-sm card-footer-text">
							Каролина, огромная благодарность вам за столь подробный и
							развернутый отзыв!
						</p>
						<IconLogo class="card-footer-logo" />
					</div>
					<h6 class="h-sm-ultra card-title">Каролина Милютина</h6>
					<div class="card-badges">
						<p class="card-badge">
							<IconPerson />
							<span class="text-sm">36 лет</span>
						</p>

						<p class="card-badge">
							<IconLocation />
							<span class="text-sm">Москва</span>
						</p>

						<p class="card-badge">
							<IconCalendar />
							<span class="text-sm">15.05.2023</span>
						</p>
					</div>
					<p class="text-sm card-text">
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
					<IconText1 class="icon-text icon-text-1" />
					<IconText2 class="icon-text icon-text-2" />
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-review-inside {
	padding-bottom: 250px;
}

.section-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 50px;
}

.card-with-photo {
	display: flex;
	justify-content: space-between;
	gap: 24px;
}

.card {
	width: 100%;
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
	padding-bottom: 30px;
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
	white-space: nowrap;
}

.photo-wrapper {
	width: 100%;
	display: flex;
	align-items: start;
	position: relative;
	max-width: 544px;
	height: fit-content;
}

.photo {
	width: 100%;
	height: auto;
}

.icon-text {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

.icon-text-2 {
	width: 70%;
	bottom: 5%;
}

.icon-text-1 {
	width: 40%;
	bottom: 30%;
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
	padding-bottom: 20px;
}

.card-footer-text {
	max-width: 80%;
}

.card-footer-logo {
	position: absolute;
	right: 40px;
	bottom: 32px;
}

@media (max-width: 600px) {
	.section-title {
		flex-direction: column-reverse;
		align-items: start;
		gap: 40px;
	}
}

@media (max-width: 1400px) {
	.photo-wrapper {
		max-width: 400px;
	}
}

@media (max-width: 1200px) {
	.card {
		padding: 40px;
		padding-right: 70px;
		border-radius: 40px;
	}
	.card:after {
		width: 70px;
		height: 70px;
		right: -28px;
		border-radius: 6px;
	}
	.card-title {
		padding-bottom: 20px;
	}
	.card-badges {
		padding-bottom: 20px;
	}
	.card-footer {
		padding: 28px;
		border-radius: 0 0 22px 22px;
	}
	.card-footer-logo {
		width: 60px;
		height: auto;
		right: 20px;
		bottom: 50%;
		transform: translateY(50%);
	}
	.card-footer-title {
		padding-bottom: 10px;
	}
}

@media (max-width: 1100px) {
	.photo-wrapper {
		max-width: 300px;
	}
}

@media (max-width: 900px) {
	.card-with-photo {
		flex-direction: column-reverse;
		gap: 50px;
	}
	.card {
		padding: 24px;
		border-radius: 20px;
	}
	.card:after {
		left: 100px;
		right: auto;
		top: -25px;
		bottom: auto;
		z-index: 0;
	}
	.card-title {
		position: relative;
		z-index: 10;
	}
}

@media (max-width: 500px) {
	.card-badges {
		gap: 10px;
		flex-wrap: wrap;
	}
	.card-footer {
		margin: 0 20px;
	}
}
</style>
