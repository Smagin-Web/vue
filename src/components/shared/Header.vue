<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MContainer from '../shared/MContainer.vue'
import Logo from './Logo.vue'
import IconBurger from '../icons/IconBurger.vue'
import HeaderSocialLink from './HeaderSocialLink.vue'
import { ref } from 'vue'

const items = ref([
	'+7 498 661-07-31',
	'Концепты',
	'Процедуры',
	'Аппараты',
	'Цены',
	'burger'
])
</script>

<template>
	<header class="header">
		<MContainer>
			<template #children>
				<div class="header-flex">
					<div class="header-flex-left">
						<Logo />
						<HeaderSocialLink class="socials" />
					</div>
					<nav class="header-nav">
						<a class="header-nav-item" v-for="item in items" :key="item">
							<template v-if="item === 'burger'">
								<IconBurger class="burger-icon" />
							</template>
							<template v-else>
								<span class="header-nav-item-link">{{ item }}</span>
							</template>
						</a>
					</nav>
				</div>
			</template>
		</MContainer>
	</header>
</template>

<!-- <script lang="ts">
export default {
	data() {
		return {
			items: [
				'+7 498 661-07-31',
				'Концепты',
				'Процедуры',
				'Аппараты',
				'Цены',
				'burger'
			]
		}
	}
}
</script> -->

<style scoped>
.header {
	background: #f4eee8;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 30px 0;
	z-index: 100;
}

.header-flex {
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

@media screen and (max-width: 1480px) {
	.header-nav .header-nav-item:first-child {
		padding-right: 16px;
	}

	.header {
		padding: 24px 0;
	}
}

@media screen and (max-width: 1340px) {
	.socials {
		display: none;
	}
}

@media screen and (max-width: 1280px) {
	.header-nav-item-link {
		font-size: 14px;
	}
}

@media screen and (max-width: 1080px) {
	.header-nav .header-nav-item:first-child {
		padding-right: 0;
	}

	.header-nav {
		gap: 20px;
	}
}

@media screen and (max-width: 1000px) {
	.header-nav-item-link {
		display: none;
	}

	.header {
		padding: 12px 0 10px;
	}
}
</style>
