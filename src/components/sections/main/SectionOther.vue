<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import SectionOtherCard from './section-other/SectionOtherCard.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const parallaxStyle = ref('')
const parallaxStyle2 = ref('')
const parallaxStyle3 = ref('')

const handleScroll = () => {
	// Если ширина экрана более 1200px, parallax работает
	// Иначе (на экранах меньше 1200px) - parallax отключаем
	if (window.innerWidth > 1200) {
		const scrollTop = window.scrollY
		console.log(scrollTop)
		if (scrollTop > 7000 && scrollTop < 10000) {
			let value = scrollTop - 7000
			parallaxStyle.value = `transform: translateY(${value * 0.01}px) translateX(${value * -0.01}px)`
			parallaxStyle2.value = `transform: translateY(${value * -0.01}px) translateX(${value * 0.015}px)`
			parallaxStyle3.value = `transform: translateY(${value * 0.01}px) translateX(${value * 0.01}px)`
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
	<section class="section-other">
		<MContainer>
			<template #children>
				<div class="heading-group">
					<h4 class="heading-section heading-section--other">
						Другие примеры результата, к&nbsp;которому мы&nbsp;помогли придти
					</h4>
					<div class="heading-group-images">
						<SectionOtherCard
							:iconFilename="'ParallaxPhoto5.png'"
							:style="parallaxStyle2"
						/>
						<SectionOtherCard
							:iconFilename="'ParallaxPhoto8.png'"
							:style="`margin-top: 50px; ${parallaxStyle3}`"
						/>
					</div>
				</div>
				<div class="card-group card-group-1">
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto7.png'"
						:style="parallaxStyle2"
					/>
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto1.png'"
						:style="parallaxStyle"
					/>
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto2.png'"
						:style="parallaxStyle3"
					/>
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto4.png'"
						:style="parallaxStyle2"
					/>
				</div>
				<div class="card-group card-group-2">
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto3.png'"
						:style="parallaxStyle2"
					/>
					<SectionOtherCard
						:iconFilename="'ParallaxPhoto6.png'"
						:style="parallaxStyle"
					/>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.heading-group {
	display: grid;
	grid-template-columns: max-content 1fr;
	gap: 48px;
	width: 100%;
}

.heading-section--other {
	max-width: 790px;
	padding-top: 24px;
}

.heading-group-images {
	padding: 0 20px;
	padding-right: 8px;

	display: grid;
	gap: 50px;
	grid-template-columns: max-content max-content;
	justify-content: space-between;
}

.card-group {
	display: flex;
	justify-content: space-between;
}

.card-group-1 {
	margin-left: 40px;
	margin-right: -94px;
	margin-top: -30px;
}

.card-group-1 > div:nth-child(1n) {
	margin-top: 60px;
}

.card-group-1 > div:nth-child(2n) {
	margin-top: -40px;
}

.card-group-1 > div:nth-child(3n) {
	margin-top: 16px;
}

.card-group-1 > div:nth-child(4n) {
	margin-top: 100px;
}

.card-group-2 {
	max-width: 1000px;
	margin: 0 auto;
	padding-left: 180px;
	margin-top: -94px;
}

.card-group-2 > div:nth-child(2n) {
	margin-top: 40px;
}

@media (max-width: 1780px) {
	.heading-section--other {
		max-width: 760px;
	}
}
</style>
