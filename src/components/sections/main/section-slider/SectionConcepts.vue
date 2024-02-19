<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import CustomSliderCardTemplate from './CustomSliderCardTemplate.vue'
import { dataSlides } from './data'
</script>

<template>
	<section>
		<MContainer>
			<h1 class="h-xxl concepts-title">Концепты</h1>
			<p class="text-sm concepts-text">
				Мы&nbsp;разработали новый продукт в&nbsp;косметологии&nbsp;&mdash;
				8&nbsp;концептов твоей красоты
			</p>
			<div class="cards">
				<CustomSliderCardTemplate
					v-for="(item, index) in dataSlides"
					:key="index"
					:title="item.title"
					:subtitle="item.subtitle"
					:badge-name="item.badgeName"
					:badge-color="item.badgeColor"
					:badge-number="item.badgeNumber"
					:p1="item.p1"
					:p2="item.p2"
					:iconSrc="item.iconSrc"
					:iconBigSrc="item.iconBigSrc"
					:iconPng="item.iconPng"
					:link="item.link"
				/>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.concepts-title {
	padding-bottom: 50px;
}

.concepts-text {
	padding-bottom: 50px;
}

.cards {
	display: grid;
	gap: 150px;
	padding-top: 100px;
	padding-bottom: 150px;
}

@media (max-width: 1000px) {
	.concepts-title {
		padding-bottom: 30px;
	}
	.concepts-text {
		padding-bottom: 0;
	}
}
</style>
