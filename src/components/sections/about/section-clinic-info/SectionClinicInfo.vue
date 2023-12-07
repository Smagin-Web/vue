<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import SectionClinicInfoRight from './SectionClinicInfoRight.vue'
</script>

<template>
	<section class="section-clinic-info">
		<MContainer>
			<BreadCrumbs />
			<div class="content">
				<div>
					<h1 class="h-xxl title">О клинике</h1>
					<h3 class="h-l subtitle">
						Наш Центр специализируется на&nbsp;аппаратной косметологии
						и&nbsp;имеет медицинскую лицензию
					</h3>
					<p class="text-sm text">
						Мы&nbsp;постарались сделать Центр косметологии Face Concept уютным,
						современным местом, где вы&nbsp;сможете решить все проблемы кожи,
						начиная от черных точек и&nbsp;заканчивая возрастными изменениями.
					</p>
				</div>
				<SectionClinicInfoRight />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-clinic-info {
	padding-top: 150px;
	padding-bottom: 150px;
}

.content {
	display: flex;
	justify-content: space-between;
	gap: 40px;
}

.title {
	padding-bottom: 124px;
}

.subtitle {
	padding-bottom: 38px;
	max-width: 950px;
}

.text {
	max-width: 760px;
}
</style>
