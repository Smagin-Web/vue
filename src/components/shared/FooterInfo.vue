<script setup lang="ts">
import IconAge18 from '../icons/IconAge18.vue'
</script>

<template>
	<div class="footer-info">
		<div class="footer-info-left">
			<p class="footer-info-text">
				Copyright&nbsp;©&nbsp;2019-2024.
				ООО&nbsp;«Центр&nbsp;косметологии&nbsp;FACE&nbsp;CONCEPT»
				<br />
				<br class="spacing-sm" />
				<a href="#" class="footer-link">
					Лицензия №&nbsp;ЛО-50-01-010568&nbsp;от&nbsp;05.02.2019
				</a>
			</p>
			<p class="footer-info-text footer-info-width-limit">
				<a href="#" class="footer-link">
					Политика по обработке персональных данных
				</a>
			</p>
		</div>
		<div class="footer-info-right">
			<p class="footer-info-text">
				<a href="#" class="footer-link">Разработка сайта Pixl.ru</a>
			</p>
			<p class="footer-info-text footer-info-width-limit">
				Сайт может содержать материалы для лиц старше 18 лет
				<IconAge18 class="footer-info-icon-18" />
			</p>
		</div>
	</div>
</template>

<style scoped>
.footer-info {
	display: flex;
	justify-content: space-between;
}
.footer-info-left {
	display: grid;
	gap: 8px;
	max-width: 580px;
}
.footer-info-text {
	position: relative;
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	font-weight: 400;
}

.footer-info-right {
	display: grid;
	justify-items: end;
}

.footer-info-right .footer-info-text {
	text-align: right;
}

.footer-info-right .footer-info-text:nth-child(1) {
	padding-bottom: 32px;
}

.footer-info-right .footer-info-text:nth-child(2) {
	padding-left: 32px;
}

.footer-info-icon-18 {
	position: absolute;
	left: 0;
	top: 2px;
}

.spacing-sm {
	display: none;
}

.footer-link {
	color: #6d6364;
}

@media (max-width: 1400px) {
	.footer-info {
		flex-direction: column;
		align-items: center;
		gap: 32px;
	}

	.footer-info-right {
		text-align: center;
		justify-items: center;
		align-items: center;
	}

	.footer-info-left {
		text-align: center;
	}
}

@media (max-width: 1000px) {
	.footer-info {
		gap: 0;
	}
	.footer-info-right {
		display: flex;
		flex-direction: column-reverse;
		justify-items: center;
	}
	.footer-info-text {
		font-size: 16px;
		text-align: center;
		padding-bottom: 20px;
		text-align: center !important;
	}

	.footer-info-right .footer-info-text:nth-child(2) {
		padding-left: 0;
		margin-top: 60px;
	}

	.footer-info-icon-18 {
		left: 50%;
		top: -38px;
		transform: translateX(-50%);
		width: 31px;
		height: 31px;
	}

	.spacing-sm {
		display: block;
	}

	.footer-info-width-limit {
		max-width: 270px;
		margin: 0 auto;
	}
}
</style>
