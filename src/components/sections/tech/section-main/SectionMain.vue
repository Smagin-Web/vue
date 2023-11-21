<script setup lang="ts">
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import MContainer from '@/components/shared/MContainer.vue'
import BadgeMd from '@/components/ui/BadgeMd.vue'
import MainTag from '@/components/ui/MainTag.vue'
import SectionMainPicture from './SectionMainPicture.vue'
</script>

<template>
	<section class="section-main">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" />
			<div class="section-content">
				<div class="section-content-left">
					<SectionMainPicture />
				</div>
				<div class="section-content-right">
					<h1 class="heading">Skinova Pro — новое поколение ультразвука</h1>
					<div class="badges">
						<BadgeMd type="1">AntiAcne Concept</BadgeMd>
						<BadgeMd type="2">Detox Concept</BadgeMd>
						<BadgeMd type="3">Lifting Concept</BadgeMd>
					</div>
					<p class="text">
						Первая в мире ультразвуковая 3D-волна поколения triple действует
						четко в цель: мгновенно омолаживает кожу на клеточном уровне,
						стимулирует регенерацию, помогает в лечении дерматологических
						проблем и восстановлении после агрессивных процедур и пластики.
					</p>
					<p class="heading-mini">Показания</p>
					<div class="tags">
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
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-main {
	padding-top: 150px;
}

.bread-crumbs {
	padding-bottom: 40px;
}

.section-picture {
	width: 100%;
	height: auto;
}

.section-content {
	display: flex;
	justify-content: space-between;
  gap: 40px;
  align-items: start;
}

.section-content-right {
	max-width: 986px;
}

.heading {
	color: #000;
	font-size: 60px;
	padding-bottom: 10px;
}

.badges {
	padding-bottom: 50px;
	display: flex;
	gap: 20px;
}

.badge {
	border-radius: 10px;
	background: #eea3a3;
	padding: 8px 10px;

	color: #fff;

	font-family: 'UABrand';
	font-size: 16px;
	font-weight: 700;
}

.badge-2 {
	background: #98cbfa;
}

.badge-3 {
	background: #81cca4;
}

.text {
	color: #6d6364;
	font-size: 22px;
	padding-bottom: 50px;
}

.heading-mini {
	color: #6d6364;
	font-size: 16px;
	padding-bottom: 10px;
}

.tags {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}
</style>
