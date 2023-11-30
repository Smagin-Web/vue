<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import CardMaster from '../shared/section-masters/CardMaster.vue'
import SectionMastersSearch from './SectionMastersSearch.vue'
</script>

<template>
	<section class="section-masters">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" />
			<h1 class="heading">Специалисты</h1>
			<p class="section-masters-text">
				Мы используем оригинальное оборудование премиум-класса, которое имеет
				сертификаты, регистрационные удостоверения Российской Федерации, а также
				сертификаты и разрешения FDA (США) и Европейского Союза! Вводный
				текстовый блок для SEO Lorem ipsum dolor sit amet consectetur. Ligula
				urna ultrices libero aliquet ut fermentum nibh facilisi. Auctor risus
				nulla sit diam quis a imperdiet sed. Vel lectus ut feugiat dui sem ut
				dignissim tempus. Duis scelerisque pulvinar mauris risus. Sodales duis
				id amet nunc congue. Gravida dignissim at amet amet penatibus vitae sed
				cras.
			</p>

			<SectionMastersSearch />

			<div class="cards">
				<CardMaster />
				<CardMaster />
				<CardMaster />
				<CardMaster />
				<CardMaster />
				<CardMaster />
				<CardMaster />
				<CardMaster />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-masters {
	padding-top: 150px;
	padding-bottom: 150px;
}

.heading {
	color: #000;
	font-size: 60px;
	padding-bottom: 50px;
}

.section-masters-text {
	color: #6d6364;
	font-size: 22px;
	padding-bottom: 50px;
}

.cards {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 100px 24px;
}
</style>
