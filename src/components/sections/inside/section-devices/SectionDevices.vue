<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import SectionDevicesCard from './SectionDevicesCard.vue'
</script>

<template>
	<section class="section-devices">
		<MContainer>
			<h3 class="h-xl heading">Аппараты AntiAcne Concept</h3>
			<SectionDevicesCard class="section-devices-card" />
			<SectionDevicesCard class="section-devices-card" />
			<SectionDevicesCard class="section-devices-card" />
			<SectionDevicesCard class="section-devices-card" />
		</MContainer>
	</section>
</template>

<style scoped>
.section-devices {
	padding-bottom: 160px;
}

.heading {
	padding-bottom: 50px;
}

.section-devices-card {
	margin-bottom: 24px;
}

@media (max-width: 1000px) {
	.section-devices {
		padding-bottom: 70px;
	}
}

@media (max-width: 700px) {
	.heading {
		padding-bottom: 30px;
	}

	.section-devices-card {
		margin-bottom: 16px;
	}
}
</style>
