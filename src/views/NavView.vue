<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/shared/Header.vue'
import Footer from '@/components/shared/Footer.vue'
import ButtonFixed from '@/components/buttons/ButtonFixed.vue'
import MContainer from '@/components/shared/MContainer.vue'

const headerStyles = ref('display: block')

const handleScroll = (event: WheelEvent) => {
	if (event.deltaY > 0) {
		headerStyles.value = 'transform: translateY(-100%)'
	} else if (event.deltaY < 0) {
		headerStyles.value = 'transform: translateY(0)'
	}
}
</script>

<template>
	<div @wheel="handleScroll">
		<ButtonFixed />
		<Header :style="headerStyles" />

		<MContainer>
			<div class="links">
				<a class="link" href="/">1) Главная</a>
				<a class="link" href="/tech">2) Технология</a>
				<a class="link" href="/procedures">3) Процедуры</a>
				<a class="link" href="/inside">4) AntiAcne Concept</a>
				<a class="link" href="/prices">5) Цены</a>
				<a class="link" href="/devices">6) Аппараты</a>
				<a class="link" href="/media">7) Медиа</a>
				<a class="link" href="/faq">8) Faq</a>
				<a class="link" href="/masters">9) Специалисты</a>
				<a class="link" href="/master">10) Карточка специалиста</a>
				<a class="link" href="/review">11) Отзывы</a>
			</div>
		</MContainer>

		<Footer />
	</div>
</template>

<style scoped>
.links {
	padding-top: 150px;
}

.link {
	color: rgb(65, 55, 55);
	display: block;
	font-size: 28px;
}
</style>
