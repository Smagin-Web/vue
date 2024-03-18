import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalsStore = defineStore('modals', () => {
	const isBodyLock = ref(false)
	const isOpenModalBonuse = ref(false)
	const isOpenModalApplication = ref(false)
	const isOpenModalReplace = ref(false)

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
	}
})
