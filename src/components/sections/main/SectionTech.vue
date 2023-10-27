<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const stylesH1 = ref('opacity: 0;')
const stylesH2 = ref('opacity: 0;')

const isSectionInfoVisible = ref(false)
let observer: IntersectionObserver | null = null

const handleSectionIntersect = (entries: IntersectionObserverEntry[]) => {
	const [entry] = entries
	isSectionInfoVisible.value = entry.isIntersecting
	if (isSectionInfoVisible.value) {
		setTimeout(() => {
			stylesH1.value = 'opacity: 1;'
			stylesH2.value = 'opacity: 1; text-shadow: 0px 10px 20px #d0c3b4;'
		}, 400)
	}
}

onMounted(() => {
	observer = new IntersectionObserver(handleSectionIntersect)
	// Установите целевой элемент, который нужно отслеживать
	const sectionTech = document.querySelector('.section-tech')
	if (sectionTech) {
		observer.observe(sectionTech)
	}
})

onUnmounted(() => {
	if (observer) {
		observer.disconnect()
	}
})
</script>

<template>
	<section class="section-tech">
		<MContainer>
			<template #children>
				<h4 class="heading section-tech-heading" :style="stylesH1">
					Мы&nbsp;разработали новый&nbsp;продукт в&nbsp;косметологии
				</h4>
				<h4 class="big-heading section-tech-heading-2" :style="stylesH2">
					8&nbsp;концептов твоей красоты
				</h4>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-tech {
	padding: 104px 0 160px;
}

.heading {
	color: #6d6364;
	text-align: center;
	font-family: 'Pelinka';
	font-size: 50px;
	font-weight: 700;
	padding-bottom: 50px;
	transition: 1s;
}

.big-heading {
	color: #fff;
	text-align: center;
	/* text-shadow: 0px 10px 20px #d0c3b4; */
	font-size: 150px;
	transition:
		transform 0.5s ease 0s,
		text-shadow 0.5s ease-in 0s;
}

@media (max-width: 1400px) {
	.big-heading {
		font-size: 54px;
	}
}

@media screen and (max-width: 1200px) {
	.section-tech {
		padding: 70px 0;
	}

	.heading {
		font-size: 22px;
	}

	.big-heading {
		font-size: 42px;
	}
}

@media (max-width: 600px) {
	.big-heading {
		font-size: 38px;
	}
}
</style>
