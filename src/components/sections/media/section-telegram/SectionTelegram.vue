<script setup >
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import MContainer from '@/components/shared/MContainer.vue'
import VkIcon from './VkIcon.vue'
import YouTubeIcon from './YouTubeIcon.vue'
import InstagramIcon from './InstagramIcon.vue'
</script>

<template>
	<section class="section-telegram">
		<MContainer>
			<div class="card-wrapper">
				<img src="./shadow.png" class="card-shadow" alt="" />

				<div class="card-telegram">
					<img src="./picture.png" alt="" class="card-picture" />
					<div class="card-content">
						<h3 class="h-xxl card-title">Подпишись на наш телеграм-канал</h3>
						<h6 class="card-text">
							получай полезную информацию по&nbsp;уходу за&nbsp;кожей
						</h6>
						<MButtonBig class="card-button">Подписаться на канал</MButtonBig>
						<div class="card-other">
							<h6 class="card-text card-text-other">и другие соцсети</h6>
							<div class="card-icons">
								<a href="#"><VkIcon class="card-icon" /></a>
								<a href="#"><InstagramIcon class="card-icon" /></a>
								<a href="#"><YouTubeIcon class="card-icon" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-telegram {
	padding-bottom: 150px;
}

.card-telegram {
	position: relative;
	padding: 80px;
	padding-top: 125px;
	border-radius: 150px 20px;
	background: #ede4da;
}

.card-wrapper {
	position: relative;
}

.card-shadow {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%) translateY(25%);

	width: 80%;
}

.card-picture {
	position: absolute;
	width: 46%;
	right: 40px;
	top: 30px;
}

.card-content {
	max-width: 945px;
}

.card-title {
	padding-bottom: 30px;
}

.card-button {
	margin: 80px 0;
}

.card-text {
	color: #6d6364;
	font-size: 34px;
	max-width: 760px;
}

.card-other {
	display: flex;
	align-items: center;
	gap: 50px;
}

.card-icons {
	display: flex;
	gap: 30px;
}

.card-icon {
	opacity: 0.5;
}

.card-text-other {
	white-space: nowrap;
}

@media (max-width: 1650px) {
	.card-text {
		color: #6d6364;
		font-size: 30px;
	}
}

@media (max-width: 1500px) {
	.card-title {
		max-width: 700px;
	}
	.card-text {
		font-size: 26px;
		max-width: 670px;
	}
}

@media (max-width: 1400px) {
	.card-telegram {
		padding-bottom: 50px;
		padding-left: 50px;
		padding-top: 80px;
		border-radius: 80px 30px 80px 30px;
	}
	.card-text {
		font-size: 20px;
		max-width: 500px;
	}
	.card-button {
		margin-top: 40px;
		margin-bottom: 40px;
	}
}

@media (max-width: 1300px) {
	.card-telegram {
		padding: 60px;
		padding-top: 80px;
		border-radius: 100px 20px;
	}
	.card-picture {
		width: 35%;
	}
}

@media (max-width: 1200px) {
	.card-title {
		max-width: 600px;
	}
	.card-text {
		font-size: 24px;
	}
	.card-button {
		margin-top: 50px;
		margin-bottom: 50px;
	}
}

@media (max-width: 1000px) {
	.card-other {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.card-text-other {
		text-align: center;
	}
	.section-telegram {
		padding-bottom: 40px;
	}
	.card-telegram {
		padding: 40px;
		border-radius: 40px 10px;
	}
	.card-title {
		max-width: 450px;
	}
	.card-text {
		max-width: 500px;
		font-size: 18px;
	}
	.card-icon {
		width: 80px;
		height: auto;
	}
}

@media (max-width: 800px) {
	.card-title {
		max-width: 400px;
	}
	.card-text {
		max-width: 350px;
	}
}

@media (max-width: 700px) {
	.card-other {
		gap: 14px;
	}
	.card-text {
		font-size: 15px;
		max-width: 300px;
	}
	.card-picture {
		width: 30%;
	}
}

@media (max-width: 600px) {
	.card-picture {
		top: 60px;
	}
}

@media (max-width: 500px) {
	.card-telegram {
		padding: 16px;
		padding-top: 40px;
		border-radius: 30px 10px;
	}
	.card-text-other {
		width: 100%;
		text-align: center;
	}
	.card-other {
		flex-wrap: wrap;
		justify-content: center;
	}
	.card-button {
		width: 100%;
		max-width: 100%;
		margin-bottom: 30px;
	}
	.card-picture {
		right: 20px;
		top: 80px;
	}
}
</style>
