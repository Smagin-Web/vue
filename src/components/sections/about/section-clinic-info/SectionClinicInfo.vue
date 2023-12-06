<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
</script>

<template>
	<section class="section-clinic-info">
		<MContainer>
			<BreadCrumbs />
			<h1 class="h-xxl title">О клинике</h1>
			<div class="content">
				<div>
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
				<img src="./photo.png" alt="" />
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
	align-items: center;
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
	max-width: 820px;
}
</style>
