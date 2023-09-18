<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MContainer from '../shared/MContainer.vue'
import IconGoogle from '../icons/IconGoogle.vue'
import IconYandex from '../icons/IconYandex.vue'
import IconLogo from '../icons/IconLogo.vue'
</script>

<template>
	<header class="header">
		<MContainer>
			<template #children>
				<div class="header-flex">
					<div class="header-flex__left">
						<div>
							<a href="#">
								<IconLogo></IconLogo>
							</a>
						</div>
						<div class="header__icons">
							<a><IconGoogle></IconGoogle></a>
							<a><IconYandex></IconYandex></a>
						</div>
					</div>
					<div>
						<nav class="header-nav">
							<a v-for="item in items" :key="item">
								{{ item }}
							</a>
						</nav>
					</div>
				</div>
			</template>
		</MContainer>
	</header>
</template>

<script lang="ts">
export default {
	data() {
		return {
			items: [
				'+7 498 661-07-31',
				'Концепты',
				'Процедуры',
				'Аппараты',
				'Цены',
				'='
			]
		}
	}
}
</script>

<style scoped>
.header {
	padding: 45px 0 30px;
}

.header-flex {
	display: flex;
	justify-content: space-between;
}

.header-flex__left {
	display: flex;
	gap: 85px;
}

.header__icons {
	display: flex;
	gap: 22px;
}

.header-nav {
	display: flex;
	gap: 30px;
}

.header-nav a {
	color: #6d6364;
	font-size: 20px;
	font-weight: 700;
}

.header-nav a:first-child {
	padding-right: 50px;
}

.logo {
	margin-left: 85px;
}
</style>
