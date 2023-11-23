<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import ListItem from './ListItem.vue'
</script>

<template>
	<section class="section-pluses">
		<MContainer>
			<h4 class="heading-section section-main-heading">
				Преимущества ультразвукового омоложения SKINOVA&nbsp;PRO
			</h4>

			<div class="content-wrapper">
				<div class="list">
					<ListItem>
						Молниеносное переключение между 3&nbsp;частотами создает совершенно
						новую 3D-волну, которая действует не&nbsp;ниже дермы, как
						ультразвуковые аппараты прежних поколений, а&nbsp;в&nbsp;зоне дермы
						и&nbsp;эпидермиса
					</ListItem>
					<ListItem>
						Использование трех разных частот усиливает эффективность процедуры
						и&nbsp;дает стойкий, выразительный и&nbsp;пролонгированный эффект
						заживления поврежденной кожи и&nbsp;омоложения
					</ListItem>
					<ListItem>
						Благодаря мощной частоте, время процедуры сокращается с&nbsp;20-30
						минут до&nbsp;12&nbsp;минут! Заглянуть к&nbsp;косметологу можно
						в&nbsp;обеденный перерыв!
					</ListItem>
					<ListItem>
						Процедура может использоваться как отдельная методика, а&nbsp;также
						до&nbsp;и&nbsp;после агрессивных воздействий
					</ListItem>
					<ListItem
						>Реабилитация не&nbsp;требуется. Skinova Pro не&nbsp;вызывает отеков
						даже у&nbsp;склонных к&nbsp;ним пациентам</ListItem
					>
					<ListItem>
						100% комфортная процедура, не&nbsp;требующая анестезии
					</ListItem>
				</div>
				<div class="content-right">
					<h4 class="title">Видео процедуры</h4>
					<img src="./photo.png" alt="" class="photo" />
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
</style>
