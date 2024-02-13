<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import FaqItem from '../inside/section-faq/FaqItem.vue'
import MSelect from '@/components/form/select/MSelect.vue'
import { ref } from 'vue'

interface IFaqItem {
	title: string
	text: string
}

let indexActiveItem = ref(20)

const props = defineProps({
	items: {
		type: Array<{ title: string; text: string }>,
		default: [{ title: 'Заголовок', text: 'Ответ на вопрос' }]
	}
})

const openFaq = (index: number) => {
	indexActiveItem.value = index
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
	padding-bottom: 150px;
}

.section-faq-search {
	padding-bottom: 70px;
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
	.section-faq-search {
		padding-bottom: 40px;
	}
}
</style>
