<script setup lang="ts">
import CardInfo from '@/components/card-elements/CardInfo.vue'
import CardLink from '@/components/card-elements/CardLink.vue'
import BadgeMd from '@/components/ui/BadgeMd.vue'
import MainTag from '@/components/ui/MainTag.vue'
</script>

<template>
	<div class="card">
		<CardLink class="card-link" />
		<div class="card-left">
			<h5 class="card-title">Skinova Pro</h5>
			<div class="badges">
				<BadgeMd type="1">AntiAcne Concept</BadgeMd>
				<BadgeMd type="2">AntiAcne Concept</BadgeMd>
				<BadgeMd type="3">AntiAcne Concept</BadgeMd>
			</div>
			<p class="card-text">
				Клеточная реконструкция высокочастотным ультразвуком. Единственная
				технология, регулирующая уровень кавеолина — структурного белка
				клеточной мембраны, который находится практически во всех клетках кожи.
			</p>

			<p class="card-title-mini">Показания</p>
			<div class="card-tags">
				<MainTag>Морщины</MainTag>
				<MainTag>Дряблость кожи</MainTag>
				<MainTag>Угревая сыпь, акне</MainTag>
				<MainTag>Атопический дерматит</MainTag>
				<MainTag>Экзема</MainTag>
				<MainTag>Трофические язвы</MainTag>
				<MainTag>Келоиды</MainTag>
				<MainTag>Волчанка</MainTag>
				<MainTag>Постакне</MainTag>
			</div>
		</div>
		<div class="card-right">
			<img src="./card-photo.png" alt="" class="card-photo" />
			<CardInfo title="Время процедуры" icon="time" text="60 минут" />
			<CardInfo title="Стоимость" icon="pay" text="от 4 500₽" />
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	border-radius: 50px;
	background: #fff;
	padding: 40px;
	display: flex;
	justify-content: space-between;
}

.card-link {
	position: absolute;
  bottom: 40px;
  left: 40px;
}

.card-left {
	max-width: 1000px;
}

.card-title {
	color: #000;
	font-size: 34px;
	padding-bottom: 12px;
}

.badges {
	display: flex;
	gap: 10px;
	padding-bottom: 22px;
}

.card-text {
	color: #6d6364;
	font-size: 22px;
	padding-bottom: 20px;
}

.card-title-mini {
	color: #6d6364;
	font-size: 16px;
	padding-bottom: 10px;
}

.card-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}

.card-photo {
	margin-bottom: 30px;
}
</style>
