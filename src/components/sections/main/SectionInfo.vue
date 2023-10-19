<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)
const infoStyles = ref('opacity: 0; transform: translateX(-300px)')

const handleScroll = () => {
	const sectionInfo = document.querySelector('.section-info')
	if (sectionInfo) {
		// На сколько пролистали страницу
		const scrollTop = window.scrollY
		// Высота секции
		const scrollHeight = sectionInfo.scrollHeight

		if (scrollTop > 1200) {
			scrollProgress.value = (scrollTop - 1200) / scrollHeight

			infoStyles.value =
				scrollProgress.value > 0.02
					? `opacity: ${scrollProgress.value}; transform: translateX(0)`
					: 'opacity: 0;  transform: translateX(-300px)'
		}

		// scrollProgress.value = Math.min(100, (scrollTop / scrollHeight) * 100)
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
	<section class="section-info" style="height: 200vh">
		<MContainer class="section-info-container" style="">
			<template #children>
				<h3 class="heading" :style="infoStyles">
					Наш Центр специализируется на&nbsp;аппаратной косметологии лица
					и&nbsp;имеет медицинскую лицензию
				</h3>

				<p class="text" :style="infoStyles">
					Мы&nbsp;уверены, что аппаратная косметология&nbsp;&mdash; это
					безболезненные процедуры без стресса и&nbsp;реабилитации, при которых
					клетки начинают работать лучше, улучшая состояние твоей кожи
					на&nbsp;клеточном уровне.
					<br />
					<br />
					В&nbsp;отличие от&nbsp;инъекций, которые дают быстрый,
					но&nbsp;временный результат, мы&nbsp;заботимся о&nbsp;долгосрочном
					здоровье твоей кожи.
				</p>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-info-container {
	position: sticky;
	top: 15px;
	padding-top: 100px;
	padding-bottom: 100px;
	height: calc(100vh + 100px);
	display: grid;
	justify-content: center;
	align-items: center;
	align-content: center;
}
.section-info {
	position: relative;
	background: linear-gradient(180deg, #bac3d8 0%, #7986a5 100%);
	height: 500vh;
}

.heading {
	color: #fff;
	text-align: center;
	font-family: 'Pelinka';
	font-size: 50px;
	font-weight: 700;
	padding-bottom: 80px;
	transition: 0.2s;
}

.text {
	color: #fff;
	font-family: 'BrisaSans';
	text-align: center;
	font-size: 24px;
	font-weight: 300;
	max-width: 880px;
	margin: auto;
	transition: 0.1s;
}

@media screen and (max-width: 1000px) {
	.heading {
		font-size: 22px;
		padding-bottom: 45px;
	}

	.text {
		font-size: 16px;
	}

	.section-info {
		padding: 76px 0;
	}
}
</style>
