<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import ListItem from './ListItem.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
	<section class="section-pluses">
		<MContainer>
			<h4 class="h-xl section-main-heading">
				Преимущества ультразвукового омоложения SKINOVA&nbsp;PRO
			</h4>

			<div class="content-wrapper">
				<div class="list">
					<ListItem img-src="./1.png">
						<template #img>
							<img src="./1.png" alt="" class="number-img" />
						</template>
						Молниеносное переключение между 3&nbsp;частотами создает совершенно
						новую 3D-волну, которая действует не&nbsp;ниже дермы, как
						ультразвуковые аппараты прежних поколений, а&nbsp;в&nbsp;зоне дермы
						и&nbsp;эпидермиса
					</ListItem>
					<ListItem>
						<template #img>
							<img src="./2.png" alt="" class="number-img" />
						</template>
						Использование трех разных частот усиливает эффективность процедуры
						и&nbsp;дает стойкий, выразительный и&nbsp;пролонгированный эффект
						заживления поврежденной кожи и&nbsp;омоложения
					</ListItem>
					<ListItem>
						<template #img>
							<img src="./3.png" alt="" class="number-img" />
						</template>
						Благодаря мощной частоте, время процедуры сокращается с&nbsp;20-30
						минут до&nbsp;12&nbsp;минут! Заглянуть к&nbsp;косметологу можно
						в&nbsp;обеденный перерыв!
					</ListItem>
					<ListItem>
						<template #img>
							<img src="./4.png" alt="" class="number-img" />
						</template>
						Процедура может использоваться как отдельная методика, а&nbsp;также
						до&nbsp;и&nbsp;после агрессивных воздействий
					</ListItem>
					<ListItem>
						<template #img>
							<img src="./5.png" alt="" class="number-img" />
						</template>
						Реабилитация не&nbsp;требуется. Skinova Pro не&nbsp;вызывает отеков
						даже у&nbsp;склонных к&nbsp;ним пациентам
					</ListItem>
					<ListItem>
						<template #img>
							<img src="./6.png" alt="" class="number-img" />
						</template>
						100% комфортная процедура, не&nbsp;требующая анестезии
					</ListItem>
				</div>
				<div class="content-right">
					<h4 class="title">Видео процедуры</h4>
					<div class="photo-wrapper">
						<IconPlay class="photo-icon" />
						<img src="./photo.png" alt="" class="photo" />
					</div>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-pluses {
	padding-bottom: 160px;
}

.content-wrapper {
	display: flex;
	gap: 100px;
	align-items: center;
	justify-content: space-between;
}

.section-main-heading {
	max-width: 1200px;
}

.list {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 24px 100px;
	max-width: 1000px;
}

.title {
	padding-bottom: 60px;
	color: #fff;
	text-align: center;
	text-shadow: 0px 5px 10px #d0c3b4;
	font-size: 70px;
}

.content-right {
	max-width: 544px;
}

.photo-wrapper {
	position: relative;
	cursor: pointer;
}

.photo-wrapper::after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border-radius: 48px;
	border: 1px solid #f4eee8;
	transition: 0.1s;
}

.photo-wrapper:hover::after {
	border: 15px solid #f4eee8;
}

.photo-wrapper:hover .photo-icon {
	opacity: 0.8;
}

.photo-icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	transition: 0.1s;
}

@media (max-width: 1400px) {
	.photo-wrapper {
		max-width: 386px;
	}
	.photo-wrapper::after {
		display: none;
	}
	.photo {
		max-width: 100%;
		height: auto;
	}
	.title {
		font-size: 42px;
		max-width: 386px;
	}
	.list {
		gap: 24px;
	}
}

@media (max-width: 1200px) {
	.list {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 1100px) {
	.photo-wrapper {
		width: 100%;
		max-width: 360px;
	}
	.photo {
		width: 100%;
		height: auto;
	}
	.title {
		font-size: 40px;
		max-width: 340px;
	}
}

@media (max-width: 1000px) {
	.content-wrapper {
		display: block;
	}
	.title {
		padding-bottom: 20px;
	}
	.section-pluses {
		padding-bottom: 80px;
	}
	.photo-wrapper::after {
		display: none;
	}
}
</style>
