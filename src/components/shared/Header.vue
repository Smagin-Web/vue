<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MContainer from '../shared/MContainer.vue'
import IconGoogle from '../icons/IconGoogle.vue'
import IconYandex from '../icons/IconYandex.vue'
import IconLogo from '../icons/IconLogo.vue'
import Text from '../typography/Text.vue'
import IconBurger from '../icons/IconBurger.vue'
</script>

<template>
	<header class="header">
		<MContainer>
			<template #children>
				<div class="header-flex">
					<div class="header-flex__left">
						<div>
							<a href="#">
								<IconLogo />
							</a>
						</div>
						<div class="header__icons">
							<a class="header__social-link">
								<IconGoogle />
								<Text font-size-text="14px" font-weight-text="700" pt="3px"
									>5</Text
								>
							</a>
							<a class="header__social-link">
								<IconYandex />
								<Text font-size-text="14px" font-weight-text="700" pt="3px"
									>4.5</Text
								>
							</a>
						</div>
					</div>
					<div>
						<nav class="header-nav">
							<a v-for="item in items" :key="item">
								<template v-if="item === 'burger'">
									<IconBurger />
								</template>
								<template v-else>
									{{ item }}
								</template>
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
				'burger'
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

.header__social-link {
	display: flex;
	align-items: center;
	gap: 6px;
}

.header__icons {
	display: flex;
	gap: 22px;
}

.header-nav {
	display: flex;
	gap: 30px;
	align-items: center;
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
