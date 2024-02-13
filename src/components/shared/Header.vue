<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MContainer from '../shared/MContainer.vue'
import Logo from './Logo.vue'
// import HeaderSocialLink from './HeaderSocialLink.vue'
import { ref } from 'vue'
// import HeaderNotify from './HeaderNotify.vue'
import HeaderMobileMenu from './HeaderMobileMenu.vue'
import HeaderBurgerIcon from './HeaderBurgerIcon.vue'

const items = [
	{
		text: 'О клинике',
		link: '/about'
	},
	{
		text: 'Концепты',
		link: '/concepts'
	},
	{
		text: 'Цены',
		link: '/prices'
	},
	{
		text: 'Контакты',
		link: '/contacts'
	}
]

const isOpenMenuMobile = ref(false)

const toggleMenu = () => {
	isOpenMenuMobile.value = !isOpenMenuMobile.value
	if (isOpenMenuMobile.value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
}
</script>

<template>
	<header class="header">
		<HeaderMobileMenu :isActive="isOpenMenuMobile" />

		<!-- <HeaderNotify /> -->

		<MContainer>
			<div class="header-flex">
				<div class="header-flex-left">
					<Logo />
					<!-- <HeaderSocialLink class="socials" /> -->
				</div>
				<nav class="header-nav">
					<a class="header-nav-item" href="tel:+74952913578">
						<span class="header-nav-item-link">+7 495 291-35-78 </span>
					</a>
					<router-link
						class="header-nav-item"
						v-for="item in items"
						:key="item.text"
						:to="item.link"
					>
						<span class="header-nav-item-link">{{ item.text }}</span>
					</router-link>

					<button type="button" class="burger-button" @click="toggleMenu">
						<HeaderBurgerIcon :isActive="isOpenMenuMobile" />
					</button>
				</nav>
			</div>
		</MContainer>
	</header>
</template>

<style scoped>
.header {
	background: #f4eee8;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;

	transition: 0.2s;
}

.header-flex {
	padding: 30px 0;
	display: flex;
	justify-content: space-between;
}

.header-flex-left {
	display: flex;
	gap: 85px;
}

.header-nav {
	display: flex;
	gap: 30px;
	align-items: center;
}

.header-nav-item-link {
	color: #6d6364;
	font-family: 'Pelinka';
	font-size: 20px;
	font-weight: 700;
}

.header-nav .header-nav-item:first-child {
	padding-right: 50px;
}

.burger-button {
	display: none;
	background: none;
	border: none;
	position: relative;
	z-index: 30;
}

@media screen and (max-width: 1620px) {
	.header-nav-item-link {
		font-size: 18px;
	}
}

@media screen and (max-width: 1550px) {
	.header-nav-item-link {
		font-size: 16px;
	}

	.header-flex-left {
		gap: 48px;
	}
}

@media (max-width: 1480px) {
	.header-nav .header-nav-item:first-child {
		padding-right: 16px;
	}

	.header-flex {
		padding: 24px 0;
	}
}

@media (max-width: 1340px) {
	.socials {
		display: none;
	}
}

@media (max-width: 1280px) {
	.header-nav-item-link {
		font-size: 14px;
	}
}

@media (max-width: 1080px) {
	.header-nav .header-nav-item:first-child {
		padding-right: 0;
	}
	.header-nav {
		gap: 20px;
	}
}

@media (max-width: 1000px) {
	.burger-button {
		display: block;
	}
	.header-nav-item-link {
		display: none;
	}
	.header-flex {
		padding: 12px 0 10px;
	}
}
</style>
