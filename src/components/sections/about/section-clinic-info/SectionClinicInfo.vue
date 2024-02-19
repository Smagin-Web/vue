<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import SectionClinicInfoRight from './SectionClinicInfoRight.vue'
</script>

<template>
	<section class="section-clinic-info">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'О клинике']" />
			<div class="content">
				<div class="content-left">
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
				<SectionClinicInfoRight class="content-right" />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-clinic-info {
	padding-bottom: 150px;
}

.content {
	display: flex;
	justify-content: space-between;
	align-items: start;
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

@media (max-width: 1900px) {
	.title {
		padding-bottom: 40px;
	}

	.content-right {
		max-width: 600px;
		width: 100%;
	}
}

@media (max-width: 1600px) {
	.content-right {
		max-width: 550px;
	}
}

@media (max-width: 1600px) {
	.title {
		padding-bottom: 32px;
	}
	.subtitle {
		padding-bottom: 32px;
	}
	.content-right {
		max-width: 500px;
	}
	.text {
		max-width: 600px;
	}
}

@media (max-width: 1350px) {
	.content-right {
		max-width: 400px;
	}
}

@media (max-width: 1200px) {
	.text {
		max-width: 400px;
	}
	.content {
		align-items: center;
	}
}

@media (max-width: 1000px) {
	.content {
		flex-direction: column;
		align-items: start;
		justify-content: start;
	}
	.content-right {
		margin-left: 80px;
		max-width: 300px;
	}
	.content-left {
		max-width: 600px;
	}
}

@media (max-width: 600px) {
	.content-right {
		max-width: 250px;
		margin-left: 60px;
	}
}
</style>
