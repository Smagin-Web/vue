<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import Filter from '@/components/shared/Filter.vue'
import FaqItem from '../inside/section-faq/FaqItem.vue'
import { ref } from 'vue'

let indexActiveItem = ref('0')

const increment1 = () => {
	if (indexActiveItem.value === '1') {
		indexActiveItem.value = '0'
	} else {
		indexActiveItem.value = '1'
	}
}

const increment2 = () => {
	if (indexActiveItem.value === '2') {
		indexActiveItem.value = '0'
	} else {
		indexActiveItem.value = '2'
	}
}

const increment3 = () => {
	if (indexActiveItem.value === '3') {
		indexActiveItem.value = '0'
	} else {
		indexActiveItem.value = '3'
	}
}

const increment4 = () => {
	if (indexActiveItem.value === '4') {
		indexActiveItem.value = '0'
	} else {
		indexActiveItem.value = '4'
	}
}
</script>

<template>
	<section class="section-faq">
		<MContainer>
			<BreadCrumbs
				class="bread-crumbs"
				:items="['Главная', 'Частые вопросы']"
			/>
			<h1 class="heading">Частые вопросы</h1>

			<div class="filters">
				<Filter :active="true">Все вопросы</Filter>
				<Filter :active="false">AntiAcne Concept</Filter>
				<Filter :active="false">Clear Concept</Filter>
				<Filter :active="false">Detox Concept</Filter>
				<Filter :active="false">Lifting Concept</Filter>
				<Filter :active="false">Brigth Concept</Filter>
				<Filter :active="false">Hydro Concept</Filter>
				<Filter :active="false">Red Concept</Filter>
				<Filter :active="false">Personal Concept</Filter>
			</div>
			<div class="questions">
				<FaqItem
					:onClick="() => increment1()"
					:isActive="indexActiveItem === '1'"
					title="Посоветуйте пожалуйста процедуру для ухода и омоложения кожи вокруг глаз? Не хочу пока прибегать к инъекционным методикам."
					text="text"
				/>
				<FaqItem
					:onClick="() => increment2()"
					:isActive="indexActiveItem === '2'"
					title="Хочу поставить ботокс в лоб. Сколько уколов потребуется?"
					text="text"
				/>
				<FaqItem
					:onClick="() => increment3()"
					:isActive="indexActiveItem === '3'"
					title="Можно ли вылечить вросший ноготь навсегда? У меня ноготь врастает уже на протяжении полутора лет."
					text="text"
				/>
				<FaqItem
					:onClick="() => increment4()"
					:isActive="indexActiveItem === '4'"
					title="На теле есть несколько висячих родинок. Скажите пожалуйста, их нужно удалять или, если они не беспокоят, можно оставить? Сколько стоит удаление в клинике? "
					text="text"
				/>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-faq {
	padding-bottom: 150px;
}

.heading {
	color: #000;
	font-size: 60px;
	padding-bottom: 50px;
}

.filters {
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	padding-bottom: 70px;
}

.questions {
	display: grid;
	max-width: 100%;
	gap: 24px;
}

@media (max-width: 1000px) {
	.filters {
		gap: 8px;
	}
	.section-faq {
		padding-bottom: 80px;
	}
}
</style>
