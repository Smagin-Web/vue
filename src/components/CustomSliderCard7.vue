<script setup lang="ts">
import MButtonOutline from './buttons/MButtonOutline.vue'
import MButton from './buttons/MButton.vue'
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

				<svg
					width="304"
					height="241"
					viewBox="0 0 304 241"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<rect width="304" height="241" fill="#F5F5F5" />
					<rect
						width="3979"
						height="3807"
						transform="translate(-3106 -2140)"
						fill="#F4EEE8"
					/>
					<rect
						x="-1067"
						y="-92"
						width="1680"
						height="651"
						rx="100"
						fill="white"
					/>
					<rect
						x="-167"
						y="-229"
						width="703"
						height="788"
						fill="url(#pattern0)"
					/>
					<rect width="304" height="241" fill="url(#pattern1)" />
					<defs>
						<pattern
							id="pattern0"
							patternContentUnits="objectBoundingBox"
							width="1"
							height="1"
						>
							<use
								xlink:href="#image0_0_1"
								transform="scale(0.00109464 0.000976562)"
							/>
						</pattern>
						<pattern
							id="pattern1"
							patternContentUnits="objectBoundingBox"
							width="1"
							height="1"
						>
							<use
								xlink:href="#image1_0_1"
								transform="matrix(0.00257391 0 0 0.00324675 -0.000624786 0)"
							/>
						</pattern>
					</defs>
				</svg>

				<MButton class="first-button">Записаться на приём</MButton>
				<MButtonOutline>Задать вопрос</MButtonOutline>
			</div>
		</div>
		<div class="card-badges">
			<div class="card-badge">08.</div>
			<div class="card-badge">Personal Concept</div>
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

	opacity: 0;
}

.active .card-image {
	opacity: 1;
}

.card-image + svg {
	position: absolute;
	right: 4%;
	top: -22%;
	width: 44%;
	height: auto;
	transition: 1s;
	display: block;

	opacity: 0;
	transform: rotate(-4deg);
}

.active .card-image + svg {
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
	background: #b9b5a7;
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
