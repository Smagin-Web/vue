<script setup >
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import MContainer from '@/components/shared/MContainer.vue'
import BadgeMd from '@/components/ui/BadgeMd.vue'
import MainTag from '@/components/ui/MainTag.vue'
import SectionMainPicture from './SectionMainPicture.vue'
</script>

<template>
	<section class="section-main">
		<MContainer>
			<BreadCrumbs
				class="bread-crumbs"
				:items="['Главная', 'Аппараты', 'Skinova Pro']"
			/>
			<div class="section-content">
				<div class="section-content-left">
					<SectionMainPicture class="picture" />
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
	padding-bottom: 150px;
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

@media (max-width: 1560px) {
	.section-content-right {
		max-width: 800px;
	}
	.section-main {
		padding-bottom: 100px;
	}
}

@media (max-width: 1300px) {
	.section-content {
		align-items: center;
	}
	.heading {
		font-size: 48px;
	}
	.badges {
		padding-bottom: 28px;
	}
	.text {
		font-size: 20px;
		padding-bottom: 20px;
	}
}

@media (max-width: 1250px) {
	.section-content-right {
		max-width: 700px;
	}
	.heading {
		font-size: 42px;
	}
	.badges {
		padding-bottom: 16px;
	}
	.text {
		font-size: 16px;
	}
	.heading-mini {
		font-size: 14px;
	}
	.tags {
		gap: 10px;
	}
}

@media (max-width: 1100px) {
	.section-content-right {
		max-width: 600px;
	}
}

@media (max-width: 1000px) {
	.section-content {
		display: block;
	}
	.section-content-left {
		display: flex;
		justify-content: center;
		padding-bottom: 40px;
	}
	.picture {
		max-width: 400px;
	}
}

@media (max-width: 1000px) {
	.heading {
		font-size: 32px;
	}
	.picture {
		max-width: 300px;
	}
	.badges {
		gap: 6px;
		flex-wrap: wrap;
	}
	.bread-crumbs {
		padding-bottom: 0;
	}
}
</style>
