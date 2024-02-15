import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

interface IModalsStore {
	isBodyLock: Ref<boolean>
	isOpenModalApplication: Ref<boolean>
	isOpenModalBonuse: Ref<boolean>
	isOpenModalReplace: Ref<boolean>

	openModalApplication: () => void
	openModalBonuse: () => void
	closeAllModals: () => void
}

export const useModalsStore = defineStore('modals', () => {
	const isBodyLock = ref(false)
	const isOpenModalBonuse = ref(false)
	const isOpenModalApplication = ref(false)
	const isOpenModalReplace = ref(true)

	const closeAllModals = () => {
		isOpenModalApplication.value = false
		isOpenModalBonuse.value = false
		isOpenModalReplace.value = false

		document.body.style.overflow = 'auto'
	}

	function openModalApplication() {
		closeAllModals()
		isBodyLock.value = true
		isOpenModalApplication.value = true

		document.body.style.overflow = 'hidden'
	}

	function openModalBonuse() {
		closeAllModals()
		isBodyLock.value = true
		isOpenModalBonuse.value = true

		document.body.style.overflow = 'hidden'
	}

	return {
		isBodyLock,
		isOpenModalApplication,
		isOpenModalBonuse,
		isOpenModalReplace,

		openModalApplication,
		openModalBonuse,

		closeAllModals
	} as IModalsStore
})
