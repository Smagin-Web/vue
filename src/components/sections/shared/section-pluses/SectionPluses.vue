<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import MContainer from '../../../shared/MContainer.vue'
import SectionPlusesPicture1 from './SectionPlusesPicture1.vue'
import SectionPlusesPicture2 from './SectionPlusesPicture2.vue'
import SectionPlusesPicture3 from './SectionPlusesPicture3.vue'

const parallaxStyle = ref('')
const parallaxStyle2 = ref('')
const parallaxStyle3 = ref('')

const handleScroll = () => {
	// Если ширина экрана более 1200px, parallax работает
	// Иначе (на экранах меньше 1200px) - parallax отключаем
	if (window.innerWidth > 1200) {
		const scrollTop = window.scrollY
		parallaxStyle.value = `transform: translateY(${scrollTop * 0.03}px)`
		parallaxStyle2.value = `transform: translateY(${scrollTop * -0.05}px)`
		parallaxStyle3.value = `transform: translateY(${scrollTop * 0.06}px)`
	} else {
		parallaxStyle.value = ''
		parallaxStyle2.value = ''
		parallaxStyle3.value = ''
	}
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})

const props = defineProps(['moreText', 'text1', 'text2', 'text3'])
</script>

<template>
	<section class="section-pluses">
		<MContainer>
			<div class="cards">
				<SectionPlusesPicture1
					:text="props.text1"
					:style="parallaxStyle"
					style="transition: 1s"
				/>
				<SectionPlusesPicture2
					:text="props.text2"
					:more-text="props.moreText"
					:style="parallaxStyle2"
					style="transition: 1s"
				/>
				<SectionPlusesPicture3
					:text="props.text3"
					:style="parallaxStyle3"
					style="transition: 1s"
					class="picture-3"
				/>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.cards {
	display: grid;
	align-items: start;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 24px;
	padding-bottom: 170px;
	padding-top: 200px;
}
.section-pluses {
	overflow: hidden;
	padding-top: 50px;
}

@media (max-width: 1600px) {
	.section-pluses {
		padding-top: 100px;
	}
}

@media (max-width: 1200px) {
	.cards {
		grid-template-columns: minmax(100px, 500px);
		padding-bottom: 100px;
		max-width: 400px;
	}

	.picture-3 {
		padding-top: 150px;
	}
}

@media screen and (max-width: 1000px) {
	.picture-3 {
		padding-top: 100px;
	}
}
</style>
