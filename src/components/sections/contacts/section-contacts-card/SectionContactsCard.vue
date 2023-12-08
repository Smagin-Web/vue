<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'

import IconWhatsApp from './IconWhatsApp.vue'
import IconTelegram from './IconTelegram.vue'
import CardInfo from './CardInfo.vue'
import MButtonOutlineBig from '@/components/buttons/MButtonOutlineBig.vue'
</script>

<template>
	<section class="section-contacts-card">
		<MContainer>
			<BreadCrumbs />
			<div class="content">
				<div>
					<h1 class="h-xxl contacts-title">Контакты</h1>

					<div class="numbers">
						<p class="text-sm numbers-title">Запись и консультация</p>
						<h5 class="h-xxl numbers-item">
							+7 498 661-07-30
							<IconWhatsApp />
							<IconTelegram />
						</h5>

						<h5 class="h-xxl">+7 925 726-71-81</h5>
					</div>

					<a href="#">
						<p class="h-md contacts-mail">hello@faceconcept.ru</p>
					</a>

					<p class="h-md contacts-info">
						Москва, улица Красноказарменная 14А, корпус 6
					</p>

					<p class="text-sm">с 10:00 до 22:00 без выходных</p>
				</div>
				<div class="content-right">
					<CardInfo />
					<MButtonOutlineBig class="button-show-all">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="31"
							height="30"
							viewBox="0 0 31 30"
							fill="none"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M15.2296 1.875C10.0007 1.875 5.64599 5.88556 5.21644 11.0967C4.98517 13.9025 5.85185 16.6885 7.63392 18.8679L13.6253 26.1951C14.594 27.3799 16.4051 27.3799 17.3739 26.1951L23.3651 18.8679C25.1473 16.6885 26.0139 13.9025 25.7826 11.0967C25.3531 5.88556 20.9984 1.875 15.7695 1.875H15.2296ZM15.4995 16.25C17.9158 16.25 19.8745 14.2912 19.8745 11.875C19.8745 9.45875 17.9158 7.5 15.4995 7.5C13.0833 7.5 11.1245 9.45875 11.1245 11.875C11.1245 14.2912 13.0833 16.25 15.4995 16.25Z"
								fill="black"
							/>
						</svg>
						Филиалы
					</MButtonOutlineBig>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-contacts-card {
	padding-top: 150px;
	padding-bottom: 150px;
}

.content-right {
	max-width: 348px;
}

.content {
	display: flex;
	justify-content: space-between;
	align-items: end;
	gap: 32px;
}

.button-show-all {
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.contacts-title {
	padding-bottom: 50px;
}

.contacts-mail {
	display: inline-block;
	border-bottom: 2px solid #000;
	padding-bottom: 2px;
	margin-bottom: 40px;
}

.contacts-info {
	padding-bottom: 20px;
}

.numbers {
	padding-bottom: 40px;
}

.numbers-title {
	padding-bottom: 20px;
}

.numbers-item {
	padding-bottom: 20px;
	display: flex;
	gap: 30px;
}
</style>
