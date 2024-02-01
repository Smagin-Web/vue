<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
</script>

<template>
	<section class="section-review">
		<MContainer>
			<div class="section-review-content">
				<h4 class="heading">Отзывы на&nbsp;площадках</h4>
				<div class="section-review__links">
					<!-- <div class="section-review-item">
						<img src="./yandex.png" />
					</div> -->
					<div class="section-review-item">
						<img src="./zoon.png" />
					</div>

					<div class="section-review-item">
						<img src="./gmaps.png" />
					</div>

					<div class="section-review-item">
						<img src="./twogis.png" />
					</div>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.heading {
	font-size: 42px;
}
.section-review {
	padding-bottom: 160px;
}
.section-review-content {
	display: flex;
	justify-content: space-between;
	gap: 80px;
	align-items: center;
	padding: 80px;
	border-radius: 500px;
	background-color: #ede4da;
}

.section-review__links {
	display: flex;
	gap: 12px;
}

.section-review-item {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 172px;
	height: 100px;
	border-radius: 50px;
	background: #fff;
}

.section-review-item img {
	width: 130px;
	height: auto;
}

@media screen and (max-width: 1550px) {
	.section-review-content {
		flex-direction: column;
		gap: 25px;
		padding: 70px;
	}
}

@media screen and (max-width: 1000px) {
	.heading {
		font-size: 22px;
	}

	.section-review {
		padding-bottom: 50px;
	}

	.section-review-content {
		padding: 40px 14px;
		border-radius: 40px;
	}

	.section-review__links {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 15px;
		align-items: start;
	}

	.section-review-item {
		width: 100%;
		height: 74px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
