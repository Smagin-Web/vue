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
				<svg
					width="728"
					height="601"
					viewBox="0 0 728 601"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_185_7014"
						style="mask-type: alpha"
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="728"
						height="601"
					>
						<rect width="728" height="601" fill="#D9D9D9" />
					</mask>
					<g mask="url(#mask0_185_7014)">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M445.356 83.4071C573.142 35.3768 600.513 179.786 635.523 284.276C670.532 388.765 597.171 414.371 505.509 385.743C413.847 356.957 374.7 282.526 245.96 196.644C117.06 110.762 317.411 131.278 445.356 83.4071Z"
							fill="#FEFEFE"
						/>
						<path
							d="M617.906 246.33C601.01 291.493 471.87 311.144 393.999 282.001C222.179 193.589 138.639 153.558 133.998 134C165 124 292.5 127.5 309 101C358.564 21.3975 455.129 -8.64231 533 20.5013C610.87 49.6449 678.906 121.33 617.906 246.33Z"
							fill="url(#paint0_linear_185_7014)"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M328.866 72.5925C312.952 99.7885 283.035 115.056 250.89 119.032C226.701 122.054 199.33 123.486 173.868 124.122C166.548 124.281 160.501 126.03 160.182 127.939C159.864 130.006 162.092 130.801 165.593 129.847C297.039 113.466 287.809 138.754 344.938 60.1874C425.62 -16.4702 547.995 24.4032 597.963 86.27C658.594 161.178 592.871 229.407 588.097 293.341C586.506 315.289 591.439 329.284 609.421 344.711C643.953 373.975 630.717 375.873 667 404.5L701.5 415.5C685.586 405.003 636.315 357.912 619.606 338.668C607.352 324.672 609.103 304.315 610.535 293.5C617.378 243.402 649.682 181.535 643.158 130.165C611.331 25.6755 410.98 -59.8884 328.866 72.5925Z"
							fill="#B9B5A7"
						/>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M495.485 358.042C452.564 323.553 67.9836 27.4323 9.51125 163.566C-2.92968 192.585 10.5998 231.481 47.145 271.44C74.2041 301.219 136.72 348.015 176.842 357.587C192.082 361.233 191.771 358.65 176.375 353.332C139.83 340.874 86.4895 302.13 61.1411 277.669C36.7258 253.967 5.77897 211.121 13.7101 175.569C19.464 150.044 34.2376 138.345 60.3635 138.8C87.7336 135.762 126.145 147.461 166.733 165.541C299.851 224.644 414.619 356.827 505.749 396.634C539.806 411.523 565.31 400.584 614.296 402.255C686.142 404.838 717.244 433.706 708.691 459.535C700.294 484.756 657.061 506.938 612.119 498.582C593.768 495.088 579.15 489.466 565.621 481.262C549.447 471.386 553.957 477.615 564.221 485.668C658.772 559.508 805.264 437.808 667.947 400.432C602.166 382.504 548.825 401.192 495.485 358.042Z"
							fill="#B9B5A7"
						/>
					</g>
					<defs>
						<linearGradient
							id="paint0_linear_185_7014"
							x1="496.5"
							y1="36"
							x2="449.475"
							y2="250.994"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#F4EEE8" />
							<stop offset="0.479167" stop-color="#F7F3EF" />
							<stop offset="1" stop-color="white" />
						</linearGradient>
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
	transform: rotate(-1deg);
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
