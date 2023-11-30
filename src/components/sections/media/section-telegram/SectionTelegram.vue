<script setup lang="ts">
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import MContainer from '@/components/shared/MContainer.vue'
import VkIcon from './VkIcon.vue'
import YouTubeIcon from './YouTubeIcon.vue'
import InstagramIcon from './InstagramIcon.vue'
</script>

<template>
	<section class="section-telegram">
		<MContainer>
			<div class="card">
        <img src="./picture.png" alt="" class="card-picture" />
				<div class="card-content">
					<h3 class="card-title">Подпишись на наш телеграм-канал</h3>
					<h6 class="card-text">
						получай полезную информациюпо уходу за кожей
					</h6>
					<MButtonBig class="card-button">Подписаться на канал</MButtonBig>
					<div class="card-other">
						<h6 class="card-text">и другие соцсети</h6>
						<VkIcon class="card-icon" />
						<InstagramIcon class="card-icon" />
						<YouTubeIcon class="card-icon" />
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

.card {
  position: relative;
	padding: 80px;
	padding-top: 125px;
	border-radius: 150px 20px;
	background: #ede4da;
}

.card-picture{
  position: absolute;
  width: 40%;
  right: 40px;
  top: 30px;
}

.card-content {
	max-width: 945px;
}

.card-title {
	color: #000;
	font-size: 60px;
	padding-bottom: 30px;
}

.card-button {
	margin: 80px 0;
}

.card-text {
	color: #6d6364;
	font-size: 34px;
}

.card-other {
	display: flex;
	align-items: center;
	gap: 30px;
}

.card-icon {
	opacity: 0.5;
}
</style>
