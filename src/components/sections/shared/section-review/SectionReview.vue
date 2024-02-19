<script setup >
import MContainer from '@/components/shared/MContainer.vue'
</script>

<template>
	<section class="section-review">
		<MContainer>
			<div class="section-review-content">
				<h4 class="h-l">Отзывы на&nbsp;площадках</h4>
				<div class="section-review__links">
					<div class="section-review-item">
						<a href="#" class="section-review-item-link" />
						<img src="./yandex2.png" />
					</div>
					<div class="section-review-item">
						<a href="#" class="section-review-item-link" />
						<img src="./zoon2.png" />
					</div>

					<div class="section-review-item">
						<a href="#" class="section-review-item-link" />
						<img src="./gmaps2.png" />
					</div>

					<div class="section-review-item">
						<a href="#" class="section-review-item-link" />
						<img src="./twogis2.png" />
					</div>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
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
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 172px;
	height: 100px;
	border-radius: 50px;
	background: #fff;

	overflow: hidden;
	transition: 0.2s;
}

.section-review-item:hover {
	opacity: 0.8;
}

.section-review-item-link {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
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

@media (max-width: 1000px) {
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
