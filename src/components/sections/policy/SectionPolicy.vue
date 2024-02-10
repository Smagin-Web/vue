<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import {
	dataPolicy1,
	dataPolicy2,
	dataPolicy3,
	dataPolicy4,
	dataPolicy5
} from './const'
import PolicyItem from './PolicyItem.vue'
</script>

<template>
	<section class="section-policy">
		<MContainer>
			<h1 class="h-xxl policy-title">ПОЛИТИКА ООО «ФЭЙС КОНЦЕПТ»</h1>
			<h2 class="h-sm-ultra policy-subtitle">
				В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
			</h2>

			<h3 class="h-sm-ultra policy-heading">1. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
			<PolicyItem
				v-for="item in dataPolicy1"
				:text="item.text"
				:key="item.text"
				:listArray="item.listArray"
			/>

			<h3 class="h-sm-ultra policy-heading">
				2. ПРИНЦИПЫ И УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
			</h3>
			<PolicyItem
				v-for="item in dataPolicy2"
				:text="item.text"
				:key="item.text"
				:listArray="item.listArray"
			/>

			<h3 class="h-sm-ultra policy-heading">
				3. ПРАВА СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ
			</h3>
			<PolicyItem
				v-for="item in dataPolicy3"
				:text="item.text"
				:key="item.text"
				:listArray="item.listArray"
			/>

			<h3 class="h-sm-ultra policy-heading">
				4. ОБЕСПЕЧЕНИЕ БЕЗОПАСНОСТИ ПЕРСОНАЛЬНЫХ ДАННЫХ
			</h3>
			<PolicyItem
				v-for="item in dataPolicy4"
				:text="item.text"
				:key="item.text"
				:listArray="item.listArray"
			/>

			<h3 class="h-sm-ultra policy-heading">5. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</h3>
			<PolicyItem
				v-for="item in dataPolicy5"
				:text="item.text"
				:key="item.text"
				:listArray="item.listArray"
			/>
		</MContainer>
	</section>
</template>

<style scoped>
.section-policy {
	padding-bottom: 150px;
}

.policy-title {
	padding-bottom: 16px;
}

.policy-subtitle {
	padding-bottom: 50px;
}

.policy-heading {
	padding-bottom: 16px;
	padding-top: 16px;
}
</style>
