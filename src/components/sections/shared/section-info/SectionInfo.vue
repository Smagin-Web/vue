<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
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
	<section class="section-info">
		<MContainer class="section-info-container">
			<h3 class="heading">
				Наш Центр специализируется
				<br />
				на&nbsp;аппаратной косметологии лица
				<br />
				и&nbsp;имеет медицинскую лицензию
			</h3>

			<p class="text">
				Мы&nbsp;уверены, что аппаратная косметология&nbsp;&mdash; это
				безболезненные процедуры
				<br />
				без стресса и&nbsp;реабилитации, при которых клетки начинают работать
				лучше,
				<br />
				улучшая состояние твоей кожи на&nbsp;клеточном уровне.
				<br />
				<br />
				В&nbsp;отличие от&nbsp;инъекций, которые дают быстрый, но&nbsp;временный
				результат,
				<br />
				мы&nbsp;заботимся о&nbsp;долгосрочном здоровье твоей кожи.
			</p>
		</MContainer>
	</section>
</template>

<style scoped>
.section-info-container {
	position: sticky;
	top: 15px;
	padding-top: 100px;
	padding-bottom: 100px;
	display: grid;
	justify-content: center;
	align-items: center;
	align-content: center;
}
.section-info {
	padding-top: 100px;
	padding-bottom: 100px;
	position: relative;
	background: linear-gradient(180deg, #bac3d8 0%, #7986a5 100%);
}

.heading {
	color: #fff;
	text-align: center;
	font-family: 'Pelinka';
	/* font-size: 50px; */
	font-size: 2.4vw;
	font-weight: 700;
	padding-bottom: 80px;
	transition: 0.2s opacity;
}

.text {
	color: #fff;
	font-family: 'BrisaSans';
	text-align: center;
	/* font-size: 24px; */
	font-size: 1.2vw;
	font-weight: 300;
	margin: auto;
	transition: 0.1s opacity;
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
