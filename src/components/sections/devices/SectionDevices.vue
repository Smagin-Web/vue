<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import SectionDevicesCard from './SectionDevicesCard.vue'
</script>

<template>
	<section class="section-devices">
		<MContainer>
			<BreadCrumbs />
			<h3 class="heading-section">Аппараты</h3>
			<p class="section-devices-text">
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
			<SectionDevicesCard />
		</MContainer>
	</section>
</template>

<style scoped>
.section-devices {
	padding-top: 150px;
  padding-bottom: 150px;
}

.section-devices-text {
	color: #6d6364;
	font-size: 22px;
	padding-bottom: 50px;
}
</style>
