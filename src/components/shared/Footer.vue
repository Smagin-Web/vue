<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MContainer from '../shared/MContainer.vue'
import Logo from '../icons/IconLogo.vue'
import Grid from './Grid.vue'
import Heading from '../typography/Heading.vue'
</script>

<template>
	<header class="footer">
		<MContainer>
			<template #children>
				<div>
					<div class="footer__logo">
						<Logo />
					</div>
					<Grid gtc="1fr 1fr 1fr 1fr" gap="20px" pb="70px">
						<Grid v-for="(item, index) in items" :key="index" gap="20px">
							<Heading
								tag="h5"
								font-size-heading="30px"
								color="#AE8C8E"
								text-align-heading="left"
								pb="14px"
							>
								{{ item.title }}
							</Heading>
							<a
								v-for="(link, index) in item.links"
								:key="index"
								:href="link.href"
								class="footer__link"
							>
								{{ link.text }}
							</a>
						</Grid>
					</Grid>
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
				{
					title: 'Услуги',
					links: [
						{
							text: 'Процедуры',
							href: '#'
						},
						{
							text: 'Консультации',
							href: '#'
						},
						{
							text: 'Запись',
							href: '#'
						},
						{
							text: 'Процедуры',
							href: '#'
						},
						{
							text: 'Консультации',
							href: '#'
						},
						{
							text: 'Запись',
							href: '#'
						}
					]
				},
				{
					title: 'О Центре',
					links: [
						{
							text: 'Процедуры',
							href: '#'
						},
						{
							text: 'Консультации',
							href: '#'
						},
						{
							text: 'Запись',
							href: '#'
						},
						{
							text: 'Процедуры',
							href: '#'
						},
						{
							text: 'Консультации',
							href: '#'
						},
						{
							text: 'Запись',
							href: '#'
						}
					]
				},
				{
					title: 'Клиентам',
					links: [
						{
							text: 'Процедуры',
							href: '#'
						},
						{
							text: 'Консультации',
							href: '#'
						},
						{
							text: 'Запись',
							href: '#'
						},
						{
							text: 'Процедуры',
							href: '#'
						},
						{
							text: 'Консультации',
							href: '#'
						},
						{
							text: 'Запись',
							href: '#'
						}
					]
				}
			]
		}
	}
}
</script>

<style scoped>
.footer {
	padding: 50px 0;
}

.footer__link {
	font-family: 'Pelinka', sans-serif;
	color: #6d6364;
	font-size: 22px;
	font-weight: 700;
}
.footer__logo {
	padding-bottom: 65px;
}

.footer__grid a {
	display: block;
	color: #6d6364;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 20px;
}
</style>
