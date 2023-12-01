<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import SectionMasterList from './SectionMasterList.vue'
</script>

<template>
	<section class="section-master">
		<MContainer>
			<BreadCrumbs class="bread-crumbs" />
			<div class="content-left">
				<h1 class="heading">Ольга Заика</h1>
				<h5 class="heading-2">Главный врач, врач-косметолог</h5>
				<p class="text">Стаж в области косметологии с 2005 года</p>
				<div class="line" />
				<h5 class="heading-2">Профессиональные навыки</h5>
				<SectionMasterList />
				<div class="line" />
				<h5 class="heading-2">Образование</h5>
				<SectionMasterList />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-master {
	padding-top: 150px;
	padding-bottom: 150px;
}

.content-left {
	max-width: 800px;
}

.heading {
	color: #000;
	font-size: 60px;
	padding-bottom: 50px;
}

.heading-2 {
	color: #000;
	font-size: 30px;
	padding-bottom: 24px;
}

.text {
	color: #6d6364;
	font-size: 22px;
	padding-bottom: 30px;
}

.line {
	margin-bottom: 30px;
	display: block;
	height: 2px;
	width: 100%;
	background-color: #000;
}
</style>
