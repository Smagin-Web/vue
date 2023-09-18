<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
</script>

<template>
	<section class="section-tech">
		<MContainer>
			<template #children>
				<h2>Мы&nbsp;разработали новый продукт в&nbsp;косметологии</h2>
				<h3>8&nbsp;концептов твоей красоты</h3>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-tech {
	padding: 104px 0 160px;
}

.section-tech h2 {
	color: #6d6364;
	text-align: center;
	font-size: 50px;
	font-weight: 700;
	padding-bottom: 50px;
}

.section-tech h3 {
	color: #fff;
	text-align: center;
	text-shadow: 0px 10px 20px #d0c3b4;
	font-size: 150px;
	font-weight: 700;
  padding-bottom: 160px;
}
</style>
