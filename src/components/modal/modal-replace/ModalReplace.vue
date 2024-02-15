<script setup lang="ts">
import { useModalsStore } from '@/stores/modals'
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import ModalWrapper from '../ModalWrapper.vue'

const store = useModalsStore()
</script>

<template>
	<div v-show="store.isOpenModalReplace">
		<ModalWrapper
			title="Сайт переехал"
			text="Центр косметологии в г. Реутов переехал на новый сайт: www.zvezda-mira.ru"
		>
			<div class="button-wrapper">
				<MButtonBig>Перейти на сайт</MButtonBig>
			</div>
		</ModalWrapper>
	</div>
</template>

<style scoped>
.button-wrapper {
  display: flex;
  justify-content: center;
}
</style>
