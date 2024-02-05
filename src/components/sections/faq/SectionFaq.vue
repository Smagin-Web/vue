<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import Filter from '@/components/shared/Filter.vue'
import FaqItem from '../inside/section-faq/FaqItem.vue'
import WidgetFilters from '@/components/widgets/filters/WidgetFilters.vue'
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

const filtersList = [
	'Все вопросы',
	'AntiAcne Concept',
	'Clear Concept',
	'Detox Concept',
	'Lifting Concept',
	'Brigth Concept',
	'Hydro Concept',
	'Red Concept',
	'Personal Concept'
]
</script>

<template>
	<section class="section-faq">
		<MContainer>
			<BreadCrumbs
				class="bread-crumbs"
				:items="['Главная', 'Частые вопросы']"
			/>
			<h1 class="h-xxl heading">Частые вопросы</h1>

			<WidgetFilters :items="filtersList" />

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
	padding-bottom: 50px;
}

.questions {
	display: grid;
	max-width: 100%;
	gap: 24px;
}

@media (max-width: 1000px) {
	.section-faq {
		padding-bottom: 80px;
	}
	.heading {
		padding-bottom: 32px;
	}
}
</style>
