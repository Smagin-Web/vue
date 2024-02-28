<script setup>
import PicturePluses2 from '../../../icons/PicturePluses2.vue'
import PlusesText from './PlusesText.vue'
import SectionPlusesShadow from './SectionPlusesShadow.vue'
import SvgBg2 from './svg/SvgBg2.vue'

const props = defineProps({
	moreText: {
		default: ''
	},
	text: {
		default: 'Парк лицензированной аппаратной косметологии'
	}
})
</script>

<template>
	<div class="card">
		<SectionPlusesShadow class="card-shadow" />
		<div class="wrapper">
			<SvgBg2 />
			<PicturePluses2 class="picture" />
			<div class="text-wrapper">
				<PlusesText :text="props.text" :more="props.moreText" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	padding-top: 60px;
}

.card-shadow {
	position: absolute;
	bottom: -20%;
	width: 90%;
	left: 6%;
}

.wrapper {
	position: relative;
	width: 100%;
}
.picture {
	height: auto;
	width: 100%;
	position: absolute;
	bottom: 15%;
}

.more-text {
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 18px;
	font-weight: 400;
}

.text-wrapper {
	text-align: center;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;

	padding-top: 10%;
	padding-left: 10%;
	padding-right: 10%;
}

@media (max-width: 800px) {
	.card-shadow {
		bottom: -33%;
	}
}

@media (max-width: 400px) {
	.card-shadow {
		bottom: -40%;
	}
}
</style>
