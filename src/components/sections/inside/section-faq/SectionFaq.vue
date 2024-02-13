<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import FaqItem from './FaqItem.vue'
import { ref } from 'vue'

let indexActiveItem = ref(20)

const props = defineProps({
	items: {
		type: Array<{ title: string; text: string }>,
		default: [{ title: 'Заголовок', text: 'Ответ на вопрос' }]
	}
})

const openFaq = (index: number) => {
	if (index != indexActiveItem.value) {
		indexActiveItem.value = index
	} else {
		indexActiveItem.value = 20
	}
}
</script>

<template>
	<section class="section-faq">
		<MContainer>
			<h3 class="h-xl">Популярные вопросы</h3>
			<div class="items">
				<FaqItem
					v-for="(item, index) in props.items"
					:key="item.text"
					:onClick="() => openFaq(index)"
					:isActive="indexActiveItem === index"
					:title="item.title"
					:text="item.text"
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
