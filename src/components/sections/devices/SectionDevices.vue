<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import SectionDevicesCard from './SectionDevicesCard.vue'
</script>

<template>
	<section class="section-devices">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'Аппараты']" />
			<h3 class="h-xxl section-title">Аппараты</h3>
			<p class="text-sm section-devices-text">
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
			<div class="devices-cards">
				<SectionDevicesCard />
				<SectionDevicesCard />
				<SectionDevicesCard />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-devices {
	padding-bottom: 150px;
}

.devices-cards {
	display: grid;
	gap: 24px;
}

.section-title {
	padding-bottom: 50px;
}
.section-devices-text {
	padding-bottom: 50px;
}

@media (max-width: 1000px) {
	.section-title {
		padding-bottom: 28px;
	}
}
</style>
