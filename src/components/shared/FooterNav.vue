<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import FooterSocials from './FooterSocials.vue'
</script>

<template>
	<div class="footer-nav">
		<div class="footer-nav-only-lg" v-for="(item, index) in items" :key="index">
			<h5 class="footer-nav-title">
				{{ item.title }}
			</h5>
			<a
				v-for="(link, index) in item.links"
				:key="index"
				:href="link.href"
				class="footer-nav-link"
			>
				{{ link.text }}
			</a>
		</div>

		<div>
			<h5 class="footer-nav-title">Контакты</h5>
			<a class="footer-nav-link">+7 498 661-07-31</a>
			<a class="footer-nav-link">+7 925 726-71-81</a>
			<a class="footer-nav-link">hello@faceconcept.ru</a>
			<a class="footer-nav-link footer-nav-link-address">
				Москва, Красноказарменная 14А, корпус 6
				<span class="footer-nav-link-span"
					>Работаем с 10:00 до 22:00 без выходных</span
				>
			</a>
			<FooterSocials />
		</div>
	</div>
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
.footer-nav {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 20px;
	padding-bottom: 70px;
}

.footer-nav-title {
	padding-bottom: 14px;
	color: #ae8c8e;
	font-size: 30px;
}

.footer-nav-link {
	display: block;
	font-family: 'Pelinka', sans-serif;
	color: #6d6364;
	font-size: 22px;
	font-weight: 700;
	padding: 10px 0;

	letter-spacing: 0.1px;
}

.footer-nav-link-span {
	display: block;
	padding-top: 4px;
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 18px;
	font-weight: 400;
	padding-bottom: 28px;
}

@media (max-width: 1500px) {
	.footer-nav-only-lg {
		display: none;
	}

	.footer-nav-title {
		color: #000;
		font-family: 'Pelinka';
		font-size: 20px;
		font-weight: 700;
		padding-bottom: 30px;
	}

	.footer-nav-link {
		color: #6d6364;
		font-family: 'Pelinka';
		font-size: 24px;
		font-weight: 700;
	}

	.footer-nav-link-address {
		font-size: 17px;
	}
}


@media (max-width: 400px) {
	.footer-nav {
		grid-template-columns: minmax(100px, 100%);
	}
	.footer-nav-link {
		font-size: 18px;
	}
	.footer-nav-link-span {
		font-size: 16px;
	}
}
</style>
