<script setup lang="ts">
import IconYandexLocation from '@/components/icons/IconYandexLocation.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import ButtonMore from '@/components/buttons/ButtonMore.vue'

defineProps<{
	masterName?: string
}>()
</script>

<template>
	<div
		class="card-wrapper"
		:class="masterName ? 'card-wrapper-with-header' : ''"
	>
		<div class="card-header" v-if="masterName">
			<img src="./CardReviewMasterAvatar.png" alt="" />
			<div>
				<p class="card-header-title">Отзыв о специалисте</p>
				<h6 class="card-header-name">{{ masterName }}</h6>
			</div>
		</div>

		<div class="card">
			<ButtonMore class="button-read-more">Читать отзыв</ButtonMore>
			<div class="card-head">
				<div>
					<h4 class="card-title">Каролина Милютина</h4>
					<div class="card-badges">
						<p class="card-calendar-badge">
							<IconCalendar />
							15.05.2023
						</p>
						<IconYandexLocation />
					</div>

					<img src="./CardReviewMasterPhoto.png" alt="" class="card-photo" />
				</div>
			</div>

			<p class="card-text">
				Не первый год пользуюсь услугами центра косметологии MIRA.С огромным
				удовольствием прихожу на приём к Ольге Владимировне.Последний раз не
				исключение, результат превосходный!!Она никогда не посоветует
				лишнего,всегда даст рекомендации,не стремиться заработать как можно
				больше денег на людях,советуя...
			</p>
		</div>
	</div>
</template>

<style scoped>
.card-wrapper {
	max-width: 544px;
	position: relative;
	margin-right: auto;
}

.card-wrapper-with-header {
	margin-top: 110px;
}

.card-header {
	position: absolute;
	top: -110px;
	left: 0;
	right: 0;
	margin-left: 20px;
	margin-right: 20px;

	border-radius: 50px;
	background: #ede4da;
	padding: 20px;
	padding-bottom: 100px;

	display: flex;
	gap: 20px;
	align-items: center;
}

.card-header-name {
	font-size: 22px;
	color: #000;
	letter-spacing: -1.5px;
}

.card-header-title {
	color: #6d6364;
	font-size: 22px;
}

.card {
	position: relative;
	border-radius: 50px;
	background: #fff;
	padding: 68px 40px 80px;
	transition: 0.2s;
	cursor: pointer;
}

.button-read-more {
	position: absolute;
	bottom: 32px;
	left: 50%;
	transform: translateX(-50%);
	opacity: 0;
	transition: 0.1s;
}

.card:hover .button-read-more {
	opacity: 1;
}

.card:hover {
	background: rgba(255, 252, 252, 0.9);
}

.card-head {
	margin-bottom: 40px;

	display: grid;
	grid-template-columns: 220px 1fr;
	position: relative;
}

.card-photo {
	position: absolute;
	bottom: 0;
	right: 0;
}

.card-title {
	color: #000;
	font-size: 30px;
	padding-bottom: 16px;
}

.card-badges {
	display: flex;
	justify-content: space-between;
}

.card-calendar-badge {
	color: #6d6364;
	font-size: 16px;

	display: flex;
	gap: 6px;
	align-items: center;
}

.card-text {
	color: #6d6364;
	font-size: 22px;
}
</style>
