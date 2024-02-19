<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import FooterSocials from './FooterSocials.vue'
</script>

<template>
	<div class="footer-nav">
		<div class="footer-nav-left">
			<div v-for="(item, index) in items" :key="index">
				<h5 class="footer-nav-title">
					{{ item.title }}
				</h5>
				<router-link
					v-for="(link, index) in item.links"
					:key="index"
					:to="link.href"
					class="footer-nav-link"
				>
					{{ link.text }}
				</router-link>
			</div>
		</div>

		<div class="footer-nav-right">
			<h5 class="footer-nav-title">Контакты</h5>
			<a class="footer-nav-link" href="tel:+74952913578">+7 495 291-35-78</a>
			<a class="footer-nav-link" href="tel:+79774122010">+7 977 412-20-10</a>
			<a class="footer-nav-link">hello@faceconcept.ru</a>
			<a class="footer-nav-link footer-nav-link-address">
				Москва, Красноказарменная 14А, корпус 6
				<span class="footer-nav-link-span">
					Работаем с 10:00 до 22:00 без выходных
				</span>
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
					title: 'Концепты',
					links: [
						{
							text: 'AntiAcne Concept',
							href: '/concept/antiacne'
						},
						{
							text: 'Clear Concept',
							href: '/concept/clear'
						},
						{
							text: 'Detox Concept',
							href: '/concept/detox'
						},
						{
							text: 'Lifting Concept',
							href: '/concept/lifting'
						},
						{
							text: 'Brigth Concept',
							href: '/concept/brigth'
						},
						{
							text: 'Hydro Concept',
							href: '/concept/hydro'
						},
						{
							text: 'Red Concept',
							href: '/concept/red'
						},
						{
							text: 'Personal  Concept',
							href: '/concept/personal'
						}
					]
				},
				{
					title: 'Клиентам',
					links: [
						{
							text: 'О клинике',
							href: '#'
						},
						{
							text: 'Цены',
							href: '#'
						},
						{
							text: 'Контакты',
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
	display: flex;
	justify-content: space-between;
	gap: 32px;
	padding-bottom: 60px;
}

.footer-nav-left {
	display: flex;
	justify-content: space-between;
	width: 700px;
}

.footer-nav-right {
	max-width: 550px;
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

@media (max-width: 1600px) {
	.footer-nav-left {
		width: 550px;
	}
}

@media (max-width: 1250px) {
	.footer-nav-left {
		width: 410px;
	}
	.footer-nav-right {
		width: 400px;
	}
	.footer-nav-link {
		font-size: 20px;
	}
}

@media (max-width: 1000px) {
	.footer-nav-left {
		display: none;
	}
	.footer-nav-right {
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
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
