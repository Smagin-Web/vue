<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
</script>

<template>
	<section class="section-review">
		<MContainer>
			<template #children>
				<div class="section-review-content">
					<h4 class="heading">Отзывы на&nbsp;площадках</h4>
					<div class="section-review__links">
						<img src="./Yandex.png" />
						<img src="./Yandex.png" />
						<img src="./Yandex.png" />
						<img src="./Yandex.png" />
					</div>
				</div>
			</template>
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
	align-items: center;
	padding: 80px;
	border-radius: 500px;
	background-color: #ede4da;
}

.section-review__links {
	display: flex;
	gap: 12px;
}

@media screen and (max-width: 1450px) {
	.section-review-content {
		flex-direction: column;
		gap: 25px;
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

	.section-review-content img {
		width: 100%;
	}

	.section-review__links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 15px;
	}
}
</style>
