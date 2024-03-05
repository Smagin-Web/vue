<script setup>
import PicturePluses1 from '../../../icons/PicturePluses1.vue'
import PlusesText from './PlusesText.vue'
import SectionPlusesShadow from './SectionPlusesShadow.vue'
import SvgBg1 from './svg/SvgBg1.vue'

const props = defineProps({
	text: {
		default: 'Сертифицированные косметологи и врачи со стажем от 10 лет'
	}
})
</script>

<template>
	<div class="card-pluses">
		<SectionPlusesShadow class="card-shadow" />
		<div class="wrapper">
			<SvgBg1 />
			<PicturePluses1 class="picture" />
			<div class="text-wrapper">
				<PlusesText :text="props.text" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-pluses {
	position: relative;
	padding-top: 224px;
}

.card-shadow {
	position: absolute;
	bottom: -25%;
	width: 80%;
	left: 5%;
}

.wrapper {
	position: relative;
	width: 100%;
}
.picture {
	height: auto;
	width: 80%;
	position: absolute;
	bottom: 42%;
	left: 14%;
}

.text-wrapper {
	text-align: center;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;

	padding-bottom: 7.5%;
	padding-right: 40px;
	padding-left: 40px;
}

.text-wrapper h4 {
	display: block;
}

@media (max-width: 1200px) {
	.card-pluses {
		padding-top: 0;
	}
}

@media (max-width: 800px) {
	.card-shadow {
		bottom: -65%;
	}
}

@media (max-width: 400px) {
	.card-shadow {
		bottom: -80%;
	}
}
</style>
