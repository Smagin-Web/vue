<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import ButtonBack from '@/components/buttons/ButtonBack.vue'

import SectionMasterList from './SectionMasterList.vue'
import IconArrow from './IconArrow.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'

const skills = [
	'Коррекция мимических морщин',
	'Объемное моделирование лица филлерами',
	'Мезотерапия, биоревитализация',
	'Нитевые методики (Аптос, ПДО)',
	'Химические пилинги'
]

const skillsTwo = [
	'Лечение угревой болезни, рубцов постакне',
	'Лечение гиперпигментаций',
	'Аппаратная косметология',
	'Уходовые процедуры по лицу, массаж лица'
]

const eduSkills = [
	'Диплом ДВС 0103906 от 25 июня 2001 г – присуждена квалификация Врач по специальности Лечебное дело, Владивосток.',
	'Удостоверение №0145 от 24 октября 2002 г – клиническая интернатура по терапии, присуждена квалификация врача-терапевта, Владивосток.',
	'Диплом №755232 от 21 мая 2005 г – профессиональная переподготовка по Дерматовенерологии, Владивосток.',
	'Свидетельство о повышении квалификации «Косметология терапевтическая» от 25 июня 2005 г, Владивосток.'
]

const moreSkills = [
	'Апрель 2010 г. – сертификат БОТОКС, Владивосток.',
	'Диплом №494044 от 7 мая 2011 г. – профессиональная переподготовка по косметологии, 576 часов, Москва.',
	'Ноябрь 2011 г. – сертификат ДИСПОРТ, Москва.',
	'Апрель 2012 г. – сертификат КСЕОМИН, Москва.',
	'Июнь 2012 г. – сертификат КОЛЛОСТ, Москва.',
	'Декабрь 2012 г. – сертификат DR.GRANDEL, Москва.',
	'Сентябрь 2014 г. – сертификат ЮВИДЕРМ, СУРЖИДЕРМ, Москва.',
	'Сертификат «Методики микротоковой терапии в уходе за лицом и телом», Москва, 2014 г.',
	'Ноябрь 2015 г. – приняла участие в семинаре «Омолаживающая косметология лица и тела. Секреты зарубежной школы», Москва.'
]
</script>

<template>
	<section class="section-master">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'Специалисты', 'Ольга Заика']" />
			<h1 class="h-xxl heading">
				Ольга Заика
				<ButtonBack class="button-back">Все специалисты</ButtonBack>
			</h1>
			<div class="content">
				<div class="content-left">
					<h5 class="heading-2">Главный врач, врач-косметолог</h5>
					<p class="text">Стаж в области косметологии с 2005 года</p>
					<div class="line" />
					<h5 class="heading-2">Профессиональные навыки</h5>
					<div class="list-group">
						<SectionMasterList :items="skills" />
						<SectionMasterList :items="skillsTwo" />
					</div>
					<div class="line" />
					<h5 class="heading-2">Образование</h5>
					<SectionMasterList :items="eduSkills" />
					<div class="line" />
					<h5 class="heading-2">Дополнительное образование и сертификаты</h5>
					<SectionMasterList :items="moreSkills" />
					<button class="more-button">
						Показать весь список
						<IconArrow />
					</button>
				</div>

				<div class="content-right">
					<div class="photo-wrapper">
						<img src="./photo.png" alt="" class="photo" />
						<IconPlay class="photo-icon-play" />
					</div>

					<div class="button-review-wrapper">
						<MButtonBig class="button-review">Оставить отзыв</MButtonBig>
					</div>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-master {
	padding-bottom: 150px;
}

.content-left {
	max-width: 800px;
}

.heading {
	padding-bottom: 50px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	white-space: nowrap;
}

.heading-2 {
	color: #000;
	font-size: 30px;
	padding-bottom: 24px;
}

.text {
	color: #6d6364;
	font-size: 22px;
	padding-bottom: 30px;
}

.line {
	margin-bottom: 30px;
	display: block;
	height: 2px;
	width: 100%;
	background-color: #000;
}

.list-group {
	display: flex;
	gap: 24px;
}

.more-button {
	color: #ae8c8e;
	font-family: 'BrisaSans', sans-serif;
	font-size: 24px;
	font-weight: 700;
	text-decoration-line: underline;
	background: none;

	display: flex;
	align-items: center;
	gap: 16px;
	padding: 0;
	border: none;
}

.content {
	display: flex;
	gap: 32px;
	justify-content: space-between;
}

.photo {
	width: 100%;
}

.photo-wrapper {
	margin-bottom: 86px;
	cursor: pointer;
	position: relative;
}

.photo-wrapper::after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	border-radius: 48px;
	border: 1px solid #f4eee8;
	transition: 0.1s;
}

.photo-wrapper:hover::after {
	border: 15px solid #f4eee8;
}

.photo-icon-play {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	transition: 0.2s;
}

.photo-wrapper:hover .photo-icon-play {
	opacity: 0.8;
}

.button-review-wrapper {
	display: flex;
	justify-content: center;
}

.button-review {
	width: 100%;
	max-width: 532px;
}

@media (max-width: 1300px) {
	.content {
		flex-direction: column-reverse;
	}

	.photo-wrapper {
		margin-right: auto;
		margin-bottom: 40px;
		max-width: 300px;
	}

	.photo {
		max-width: 300px;
	}

	.button-review-wrapper {
		display: block;
	}

	.button-review {
		max-width: 300px;
	}
}

@media (max-width: 1000px) {
	.photo-wrapper::after {
		display: none;
	}
	.heading {
		font-size: 34px;
	}
	.heading-2 {
		font-size: 24px;
	}
	.text {
		font-size: 18px;
	}
	.more-button {
		font-size: 18px;
		gap: 10px;
		padding-left: 20px;
	}
}

@media (max-width: 600px) {
	.section-master {
		padding-bottom: 60px;
	}
	.heading {
		position: relative;
		padding-top: 70px;
	}
	.button-back {
		top: 0;
		left: 0;
		position: absolute;
	}
	.list-group {
		display: grid;
	}
}
</style>
