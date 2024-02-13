<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const currentNumberConcept = ref('')

const router = useRouter()
currentNumberConcept.value = router.currentRoute.value.path.split('/')[2]
</script>

<template>
	<div class="picture-wrapper">
		<img src="./bg-place.png" alt="" class="picture-img-bg" />
		<img src="./shadow.png" alt="shadow" class="picture-img-bg-shadow" />

		<div class="picture-img-head-wrapper">
			<img src="./head.png" alt="" v-if="currentNumberConcept == 'antiacne'" />
			<img src="./head1.png" alt="" v-if="currentNumberConcept == 'clear'" />
			<img src="./head2.png" alt="" v-if="currentNumberConcept == 'detox'" />
			<img src="./head3.png" alt="" v-if="currentNumberConcept == 'lifting'" />
			<img src="./head4.png" alt="" v-if="currentNumberConcept == 'bright'" />
			<img
				src="./head_hydro.png"
				alt=""
				v-if="currentNumberConcept == 'hydro'"
			/>
			<img src="./head6.png" alt="" v-if="currentNumberConcept == 'red'" />
			<img src="./head7.png" alt="" v-if="currentNumberConcept == 'personal'" />
		</div>
	</div>
</template>

<style scoped>
.picture-wrapper {
	overflow: visible;
	position: relative;
	max-width: 678px;
	width: 100%;
	height: fit-content;
}

.picture-wrapper * {
	overflow: visible;
}

.picture-img-bg {
	width: 100%;
	height: auto;
}

.picture-img-bg-shadow {
	position: absolute;
	width: 80%;
	top: 35%;
}

.picture-img-head-wrapper img {
	position: absolute;
	width: 96%;
	left: 5%;
	bottom: 0;
}
</style>
