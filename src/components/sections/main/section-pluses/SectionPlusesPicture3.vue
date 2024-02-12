<script setup lang="ts">
import PicturePluses3 from '../../../icons/PicturePluses3.vue'
import PlusesText from './PlusesText.vue'
import SectionPlusesShadow from './SectionPlusesShadow.vue'
import SvgBg3 from './svg/SvgBg3.vue'

const props = defineProps({
	text: {
		type: String,
		default: 'Своё закрытое сообщество, где делимся секретами молодости'
	}
})
</script>

<template>
	<div class="card">
		<SectionPlusesShadow class="card-shadow" />

		<div class="wrapper">
			<SvgBg3 />
			<PicturePluses3 class="picture" />
			<div class="text-wrapper">
				<PlusesText :text="props.text" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
}

.card-shadow {
	position: absolute;
	bottom: -30%;
	width: 90%;
	left: -10%;
}

.wrapper {
	position: relative;
	width: 100%;
}
.picture {
	height: auto;
	width: 100%;
	position: absolute;
	bottom: 35%;
	left: 10%;
}

.picture-wrapper {
	padding-left: 80px;
}

.text-wrapper {
	text-align: center;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;

	padding-bottom: 7.5%;
	padding-left: 10%;
	padding-right: 10%;
}

@media (max-width: 1200px) {
	.picture {
		bottom: 25%;
	}

	.text-wrapper {
		padding-bottom: 20px;
	}
}

@media (max-width: 800px) {
	.card-shadow {
		bottom: -37%;
	}
}

@media (max-width: 450px) {
	.picture {
		bottom: 32%;
	}
}

@media (max-width: 400px) {
	.card-shadow {
		bottom: -45%;
	}
}
</style>
