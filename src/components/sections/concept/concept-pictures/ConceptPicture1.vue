<script setup lang="ts">
import ConceptPictureWrapper from './ConceptPictureWrapper.vue'

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const currentNumberConcept = ref('')

const router = useRouter()
currentNumberConcept.value = router.currentRoute.value.path.split('/')[2]
</script>

<template>
	<ConceptPictureWrapper>
		<img src="./head.png" alt="" v-if="currentNumberConcept == '0'" />
		<img src="./head1.png" alt="" v-if="currentNumberConcept == '1'" />
		<img src="./head2.png" alt="" v-if="currentNumberConcept == '2'" />
		<img src="./head3.png" alt="" v-if="currentNumberConcept == '3'" />
		<img src="./head4.png" alt="" v-if="currentNumberConcept == '4'" />
		<img src="./head5.png" alt="" v-if="currentNumberConcept == '5'" />
		<img src="./head6.png" alt="" v-if="currentNumberConcept == '6'" />
	</ConceptPictureWrapper>
</template>

<style scoped>
.picture-wrapper {
	position: relative;
	max-width: 818px;
	width: 100%;
	height: fit-content;
}

.picture-img-bg {
	width: 100%;
	height: auto;
}

.picture-img-head-wrapper img {
	position: absolute;
	width: 81%;
	left: 10%;
	top: -1%;
}
</style>
