<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import CardMaster from '../shared/section-masters/CardMaster.vue'
import MSelect from '@/components/form/select/MSelect.vue'
</script>

<template>
	<section class="section-masters">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'Специалисты']" />
			<h1 class="h-xxl heading">Специалисты</h1>
			<p class="text-sm text">
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

			<MSelect
				class="section-masters-select"
				:startItem="'Все специалисты'"
				:items="['Специалисты AntiAcne', 'Специалисты Lifting']"
			/>

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
	padding-bottom: 150px;
}

.heading {
	padding-bottom: 50px;
}

.text {
	padding-bottom: 50px;
}

.cards {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 100px 24px;
}

.section-masters-select {
	margin-bottom: 100px;
}

@media (max-width: 1000px) {
	.heading {
		padding-bottom: 20px;
	}
	.text {
		padding-bottom: 20px;
	}
	.section-masters-search {
		margin-bottom: 40px;
	}
	.cards {
		grid-template-columns: 1fr 1fr;
		justify-items: center;
	}
}

@media (max-width: 700px) {
	.cards {
		grid-template-columns: 1fr;
	}
}
</style>
