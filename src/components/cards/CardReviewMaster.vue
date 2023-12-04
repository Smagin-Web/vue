<script setup lang="ts">
import IconYandexLocation from '@/components/icons/IconYandexLocation.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import ButtonMore from '@/components/buttons/ButtonMore.vue'
</script>

<template>
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
			лишнего,всегда даст рекомендации,не стремиться заработать как можно больше
			денег на людях,советуя...
		</p>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	border-radius: 50px;
	background: #fff;
	padding: 68px 40px 80px;
	max-width: 544px;
}

.button-read-more {
	position: absolute;
	bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
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
