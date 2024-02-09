<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import FaqItem from '../inside/section-faq/FaqItem.vue'
import MSelect from '@/components/form/select/MSelect.vue'
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
			<BreadCrumbs :items="['Главная', 'Частые вопросы']" />
			<h1 class="h-xxl heading">Частые вопросы</h1>

			<div class="section-faq-search">
				<MSelect />
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

.section-faq-search {
	padding-bottom: 32px;
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
