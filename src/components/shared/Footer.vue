<!-- eslint-disable vue/multi-word-component-names -->
<script setup >
import MContainer from '../shared/MContainer.vue'
import Logo from '../icons/IconLogo.vue'
import FooterNav from './FooterNav.vue'
import FooterInfo from './FooterInfo.vue'
</script>

<template>
	<footer class="footer">
		<MContainer>
			<div>
				<div class="footer-logo">
					<Logo />
				</div>
				<FooterNav />
			</div>
			<FooterInfo />
		</MContainer>
	</footer>
</template>

<script >
export default {
	data() {
		return {
			items: [
				{
					title: 'Услуги',
					links: [
						{
							text: 'Запись',
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
	padding-bottom: 150px;
	overflow: hidden;
}

.footer-logo {
	padding-bottom: 65px;
}

.footer__grid a {
	display: block;
	color: #6d6364;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 20px;
}

@media (max-width: 1500px) {
	.footer-logo {
		display: none;
	}
}
</style>
