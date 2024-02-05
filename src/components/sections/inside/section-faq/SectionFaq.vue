<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import FaqItem from './FaqItem.vue'
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
</script>

<template>
	<section class="section-faq">
		<MContainer>
			<h3 class="h-xl">Популярные вопросы</h3>
			<div class="items">
				<FaqItem
					:onClick="() => increment1()"
					:isActive="indexActiveItem === '1'"
					text="Можем порекомендовать микротоки или пилинги для глаз. Микротоки прекрасно работают с отечностью и темными кругами под глазами, разглаживают «гусиные лапки». Пилинги разглаживают мелкие морщинки, делают кожу упругой, осветляют ее."
					title="Посоветуйте пожалуйста процедуру для ухода и&nbsp;омоложения кожи вокруг глаз? Не&nbsp;хочу пока прибегать к&nbsp;инъекционным методикам."
				/>
				<FaqItem
					:onClick="() => increment2()"
					:isActive="indexActiveItem === '2'"
					text="Можем порекомендовать микротоки или пилинги для глаз. Микротоки прекрасно работают с отечностью и темными кругами под глазами, разглаживают «гусиные лапки». Пилинги разглаживают мелкие морщинки, делают кожу упругой, осветляют ее. Можем порекомендовать микротоки или пилинги для глаз. Микротоки прекрасно работают с отечностью и темными кругами под глазами, разглаживают «гусиные лапки». Пилинги разглаживают мелкие морщинки, делают кожу упругой, осветляют ее.Можем порекомендовать микротоки или пилинги для глаз. Микротоки прекрасно работают с отечностью и темными кругами под глазами, разглаживают «гусиные лапки». Пилинги разглаживают мелкие морщинки, делают кожу упругой, осветляют ее."
					title="Хочу поставить ботокс в лоб. Сколько уколов потребуется?"
				/>
				<FaqItem
					:onClick="() => increment3()"
					:isActive="indexActiveItem === '3'"
					text="text1"
					title="Можно ли вылечить вросший ноготь навсегда? У меня ноготь врастает уже на протяжении полутора лет."
				/>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-faq {
	padding-bottom: 100px;
}

.items {
	display: grid;
	gap: 24px;
}

@media (max-width: 1000px) {
	.section-faq {
		padding-bottom: 50px;
	}
}
</style>
