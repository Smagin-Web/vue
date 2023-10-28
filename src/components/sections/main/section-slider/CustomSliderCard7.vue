<script setup lang="ts">
import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
import MButton from '@/components/buttons/MButton.vue'
</script>

<template>
	<div class="card">
		<div class="card-info-content">
			<h3 class="title">
				Вылечим твою кожу и&nbsp;избавим от высыпания на лице.
			</h3>
			<h5 class="subtitle">
				Задачей концепта является эффективное лечение заболевания Акне первой,
				второй и&nbsp;третьей степени.
			</h5>
			<p class="card-text">
				Комплексный подход к&nbsp;терапии угревой сыпи позволяет специалистам
				Центра косметологии Face Concept не&nbsp;только быстро избавлять наших
				пациентов от&nbsp;кожных проблем, но&nbsp;и&nbsp;предупреждать
				их&nbsp;повторное появление в&nbsp;будущем.
				<br /><br />
				Результат нашего лечения ты&nbsp;сможешь увидеть уже после первого
				посещения.
			</p>
			<div class="buttons">
				<img src="./slider.png" alt="" class="card-image" />

				<img src="./slider-picture.png" class="card-image-svg" />

				<MButton class="first-button">Записаться на приём</MButton>
				<MButtonOutline>Задать вопрос</MButtonOutline>
			</div>
		</div>
		<div class="card-badges">
			<div class="card-badge">07.</div>
			<div class="card-badge">Red Concept</div>
		</div>
	</div>
</template>

<style scoped>
.card-info-content {
	max-width: 880px;
}

.title {
	font-size: 42px;
	padding-bottom: 40px;
}

.subtitle {
	color: #6d6364;
	font-size: 24px;
	padding-bottom: 30px;
}

.card-text {
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	font-weight: 400;

	padding-bottom: 70px;
}

.buttons {
	display: flex;
	gap: 20px;
}

.card-image {
	position: absolute;
	right: 5%;
	bottom: 0;
	width: 42%;
	transition: 1s;
	transition-delay: 0.4s;
}

.card-image-svg {
	position: absolute;
	right: 17.3%;
	top: 11.9%;
	width: 20%;
	height: auto;
	transition: 1s;
	display: block;

	opacity: 0;
	transform: rotate(-1deg);
}

.active .card-image-svg {
	opacity: 1;
	transform: rotate(0);
}

.card-badges {
	position: absolute;
	display: flex;
	top: 0;
	left: 80px;
	transform: translateY(-50%);
}

.card-badge {
	color: #fff;
	font-family: 'UABrand';
	font-size: 48px;
	font-weight: 700;

	border-radius: 20px;
	background: #f88476;
	padding: 0 22px 4px;
	z-index: 20;
}

@media (max-width: 1000px) {
	.card-badge {
		font-size: 20px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 10px;
	}
	.card {
		padding: 50px 12px 32px;
		border-radius: 40px;
	}
	.title {
		font-size: 20px;
		padding-bottom: 18px;
	}
	.subtitle {
		font-size: 17px;
		padding-bottom: 25px;
	}

	.card-text {
		font-size: 16px;

		padding-bottom: 0;
	}

	.buttons {
		display: grid;
		/* grid-template-columns: max-content; */
		justify-content: center;
		justify-items: center;
		gap: 0;
	}

	.buttons button {
		width: 320px;
	}

	.first-button {
		margin-bottom: 20px;
	}

	.card-image {
		position: static;
		width: 380px;
		padding-right: 30px;
	}
}
</style>
