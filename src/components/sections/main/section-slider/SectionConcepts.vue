<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import CustomSliderCardTemplate from './CustomSliderCardTemplate.vue'
import { dataSlides } from './data'
</script>

<template>
	<section>
		<MContainer>
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
				/>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.cards {
	display: grid;
	gap: 150px;
	padding-top: 100px;
	padding-bottom: 150px;
}
</style>
