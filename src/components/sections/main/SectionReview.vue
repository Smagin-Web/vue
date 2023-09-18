<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import Heading from '../../typography/Heading.vue'
</script>

<template>
	<section class="section-review">
		<MContainer>
			<template #children>
				<div class="section-review-content">
					<Heading tag="h4" font-size-heading="42px">
						Отзывы на площадках
					</Heading>
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
	gap: 16px;
}
</style>
