<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
</script>

<template>
	<section class="section-clinic-info">
		<MContainer>
			<BreadCrumbs />
			<h1 class="h-xxl heading">О клинике</h1>
			<h3 class="h-xl">
				Наш Центр специализируется на аппаратной косметологии и имеет
				медицинскую лицензию
			</h3>
		</MContainer>
	</section>
</template>

<style scoped>
.section-clinic-info {
	padding-top: 150px;
	padding-bottom: 150px;
}

.heading {
	padding-bottom: 124px;
}
</style>
