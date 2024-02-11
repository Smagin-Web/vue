<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import PictureReviews from '@/components/icons/PictureReviews.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import ButtonLink from '@/components/buttons/ButtonLink.vue'
</script>

<template>
	<section class="section-review-pactients">
		<MContainer>
			<div class="content">
				<h3 class="heading h-l">
					Наши пациенты стали нам добрыми друзьями.
					<br /><br />
					Они хорошеют год от&nbsp;года и оставляют положительные отзывы.
					<br /><br />
					Присоединяйся и ты!
				</h3>
				<div class="picture-wrapper">
					<PictureReviews />
				</div>
			</div>
			<div class="buttons">
				<MButtonBig class="button-big">Перейти к отзывам</MButtonBig>
				<ButtonLink>Оставить отзыв</ButtonLink>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-review-pactients {
	padding-bottom: 100px;
	overflow: visible;
}
.content {
	display: grid;
	grid-template-columns: max-content 1fr;
	gap: 60px;
}

.button-big {
	min-width: 300px;
}

.heading {
	min-height: 612px;
	padding-top: 100px;
	max-width: 690px;
}

.buttons {
	margin-top: -190px;
	display: flex;
	gap: 48px;
	align-items: center;
}

@media (max-width: 1850px) {
	.buttons {
		margin-top: -150px;
	}
}

@media (max-width: 1780px) {
	.buttons {
		margin-top: -50px;
	}
}

@media (max-width: 1600px) {
	.content {
		gap: 0;
	}
	.heading {
		padding-top: 0;
	}
	.buttons {
		margin-top: -150px;
	}
}

@media (max-width: 1500px) {
	.heading {
		min-height: 500px;
	}
}

@media (max-width: 1400px) {
	.picture-wrapper {
		width: 100%;
	}
	.content {
		justify-items: end;
		gap: 20px;
	}
	.heading {
		padding-top: 0;
		max-width: 600px;
	}
	.picture-wrapper {
		max-width: 500px;
	}
	.buttons {
		margin-top: -200px;
	}
}

@media (max-width: 1200px) {
	.content {
		gap: 60px;
		grid-template-columns: minmax(200px, 700px);
		justify-items: start;
	}

	.heading {
		font-size: 36px;
		max-width: 600px;
		min-height: auto;
	}

	.buttons {
		margin-top: 0;
		padding-top: 30px;
	}
}

@media screen and (max-width: 1000px) {
	.heading {
		font-size: 22px;
	}

	.buttons {
		justify-content: center;
		display: grid;
		gap: 30px;
	}
}
</style>
