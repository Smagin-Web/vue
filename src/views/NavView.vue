<script setup >
import ViewWrapper from '@/components/ViewWrapper.vue'

import MContainer from '@/components/shared/MContainer.vue'
</script>

<template>
	<ViewWrapper>
		<MContainer>
			<div class="links">
				<a class="link" href="/">1) Главная</a>
				<a class="link" href="/tech">2) Карточка аппарата</a>
				<a class="link" href="/procedures">3) Процедуры</a>
				<a class="link" href="/inside">4) AntiAcne Concept</a>
				<a class="link" href="/prices">5) Цены</a>
				<a class="link" href="/devices">6) Аппараты</a>
				<a class="link" href="/media">7) Медиа</a>
				<a class="link" href="/faq">8) Faq</a>
				<a class="link" href="/masters">9) Специалисты</a>
				<a class="link" href="/master">10) Карточка специалиста</a>
				<a class="link" href="/review">11) Отзывы</a>
				<a class="link" href="/review-inside">12) Отзыв - карточка</a>
				<a class="link" href="/about">13) О клинике</a>
				<a class="link" href="/contacts">14) Контакты</a>
				<a class="link" href="/branches">15) Филиалы</a>
				<a class="link" href="/media/1">16) Медиа - карточка</a>
				<a class="link" href="/policy">17) Политика</a>

				<a class="link" href="/concept/personal">personal</a>
				<a class="link" href="/concept/red">red</a>
				<a class="link" href="/concept/hydro">hydro</a>
				<a class="link" href="/concept/bright">bright</a>
				<a class="link" href="/concept/lifting">lifting</a>
				<a class="link" href="/concept/detox">detox</a>
				<a class="link" href="/concept/clear">clear</a>
				<a class="link" href="/concept/antiacne">antiacne</a>
			</div>
		</MContainer>
	</ViewWrapper>
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
