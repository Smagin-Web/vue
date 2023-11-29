<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import SectionOtherCard from './SectionOtherCard.vue'

const parallaxStyle = ref('')
const parallaxStyle2 = ref('')
const parallaxStyle3 = ref('')

const handleScroll = () => {
	// Если ширина экрана более 1200px, parallax работает
	// Иначе (на экранах меньше 1200px) - parallax отключаем
	if (window.innerWidth > 1200) {
		const scrollTop = window.scrollY
		if (scrollTop > 7000 && scrollTop < 10000) {
			let value = scrollTop - 7500
			parallaxStyle.value = `transform: translateY(${
				value * 0.01
			}px) translateX(${value * -0.01}px)`
			parallaxStyle2.value = `transform: translateY(${
				value * -0.01
			}px) translateX(${value * 0.008}px)`
			parallaxStyle3.value = `transform: translateY(${
				value * 0.01
			}px) translateX(${value * 0.01}px)`
		}
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
</script>

<template>
	<div style="padding-bottom: 300px">
		<div class="wrapper-cards">
			<div style="padding-top: 120px">
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto7.png'"
					:style="parallaxStyle2"
				/>
			</div>
			<div style="position: relative">
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto1.png'"
					:style="parallaxStyle"
				/>
				<div class="card-absolute" style="top: 140%; left: -30%">
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto3.png'"
						:style="parallaxStyle2"
					/>
				</div>
			</div>
			<div style="padding-top: 70px; position: relative">
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto2.png'"
					:style="parallaxStyle3"
				/>
				<div class="card-absolute" style="bottom: 100%">
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto5.png'"
						:style="parallaxStyle2"
					/>
				</div>
				<div class="card-absolute" style="top: 120%; left: 50%">
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto6.png'"
						:style="parallaxStyle"
					/>
				</div>
			</div>
			<div style="padding-top: 150px; position: relative">
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto4.png'"
					:style="parallaxStyle2"
				/>
				<div class="card-absolute" style="bottom: 85%; left: -20%">
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto8.png'"
						:style="parallaxStyle2"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper-cards {
	display: flex;
	justify-content: space-between;
	align-items: start;
}

.card-absolute {
	position: absolute;
}
</style>
