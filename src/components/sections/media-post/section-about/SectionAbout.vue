<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import ButtonBack from '@/components/buttons/ButtonBack.vue'

const breadCrubmsItems = [
	'Главная',
	'Медиа',
	'Причины сухой кожи лица и как от нее избавиться'
]

const listItems = [
	'Причины появления',
	'Виды акне',
	'Особенности локализации',
	'Методы лечения',
	'Профессиональное лечение у врача-косметолога',
	'Особенности ухода за кожей при акне',
	'Рекомендации по питанию и образу жизни',
	'Мифы и ошибки при лечении',
	'Заключение',
	'Часто задаваемые вопросы'
]
</script>

<template>
	<section class="section-about">
		<MContainer>
			<BreadCrumbs :items="breadCrubmsItems" />
			<h1 class="h-xxl heading">
				<span>
					Как избавиться от&nbsp;прыщей на&nbsp;лице: путь к&nbsp;чистой
					и&nbsp;здоровой коже
				</span>
				<ButtonBack class="button-back">Вернуться</ButtonBack>
			</h1>

			<div class="list-with-photo">
				<div>
					<h5 class="text-section list-heading">Оглавление</h5>
					<ol class="list">
						<li
							v-for="(item, index) in listItems"
							:key="index + item"
							class="list-item text-sm"
						>
							<a class="list-item-link" href="#" />
							{{ item }}
						</li>
					</ol>
				</div>

				<div class="photo-wrapper">
					<img src="./photo.png" alt="" class="photo" />
				</div>
			</div>

			<p class="text-sm">
				В&nbsp;разные периоды жизни, будь&nbsp;то подростковый возраст или
				зрелые годы, люди сталкиваются с&nbsp;проблемой прыщей на&nbsp;лице. Это
				хроническое воспалительное заболевание кожи, проявляющееся в&nbsp;виде
				различных элементов, таких как черные точки, белые головки, папулы,
				пустулы, узлы и&nbsp;кисты. Они могут вызывать множество неудобств,
				начиная от&nbsp;легкого дискомфорта и&nbsp;заканчивая серьезными
				комплексами. Особенно это актуально для подростков, для которых внешний
				вид играет важную роль в социализации. Однако, данная проблема актуальна
				и&nbsp;для взрослых, угревая сыпь может появиться в&nbsp;любом возрасте
				и&nbsp;стать настоящим испытанием для психики человека.
				<br />
				Прыщи на&nbsp;лице, также известные как акне или угревая
				сыпь&nbsp;&mdash; это серьезная неприятность для человека, которая
				влияет не только на&nbsp;его внешний вид,
				но&nbsp;и&nbsp;на&nbsp;восприятие окружающих. Но&nbsp;важно помнить, что
				это распространенная проблема, и&nbsp;существует множество способов
				борьбы с&nbsp;ней.
			</p>
		</MContainer>
	</section>
</template>

<style scoped>
.section-about {
	padding-bottom: 30px;
}

.heading {
	padding-bottom: 50px;
	display: flex;
	justify-content: space-between;
	align-items: start;
	gap: 24px;
}

.list-with-photo {
	display: flex;
	justify-content: space-between;
	gap: 30px;
	padding-bottom: 50px;
}

.photo-wrapper {
	max-width: 686px;
}

.photo {
	width: 100%;
	height: auto;
}

.list-heading {
	padding-bottom: 20px;
}

.list::marker {
	content: '';
	font-size: 0;
}

.list-item {
	position: relative;
	padding: 0;
	transition: 0.1s;
}

.list-item:hover {
	color: rgb(129, 128, 128);
}

.list-item-link {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

@media (max-width: 1000px) {
	.heading {
		position: relative;
		display: block;
		padding-top: 60px;
	}
	.button-back {
		position: absolute;
		top: 0;
	}
	.list-with-photo {
		display: grid;
		gap: 0;
		padding-bottom: 32px;
	}
}
</style>
