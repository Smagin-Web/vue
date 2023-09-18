<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import MBadge from '../../ui/MBadge.vue'
import MButtonOutline from '../../buttons/MButtonOutline.vue'
import MButton from '../../buttons/MButton.vue'
import Heading from '../../typography/Heading.vue'
</script>

<template>
	<section class="section-offer">
		<MContainer>
			<template #children>
				<div class="section-offer-card">
					<div class="section-offer-card__badge">
						<MBadge></MBadge>
					</div>
					<div class="card-inside">
						<div>
							<Heading
								font-size-heading="34px"
								max-width="945px"
								text-align-heading="left"
								pb="70px"
							>
								Первичный приём врача дерматолога +<br />диагностика Antera 3D
							</Heading>
							<div class="card-inside__buttons">
								<MButton>Записаться на приём</MButton>
								<MButtonOutline></MButtonOutline>
							</div>
						</div>
						<div class="card-inside__prices">
							<Heading
								tag="h5"
								color="#E4B5C3"
								font-size-heading="40px"
								text-align-heading="end"
								class="card-inside__old-price"
							>
								2 500₽
							</Heading>
							<Heading tag="h5" font-size-heading="100px">990₽</Heading>
						</div>
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-offer {
	padding-bottom: 100px;
}
.section-offer-card {
	position: relative;
	border-radius: 100px;
	background: #ede4da;
	padding: 80px;
	padding-bottom: 50px;
}

.card-inside {
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	padding: 80px;
	border-radius: 50px;
}

.card-inside__prices {
	display: grid;
	align-items: end;
}

.card-inside__old-price {
	display: flex;
	justify-content: end;
	margin-bottom: -60px;
	position: relative;
}

.card-inside__old-price:after {
	content: '';
	display: block;
	height: 6px;
	width: 55%;

	transform: rotate(13deg);
	background-color: #D2A0AF;
	position: absolute;
	top: 18px;
	border-radius: 20px;
}

.section-offer-card__badge {
	position: absolute;
	left: 80px;
	top: 0;
	transform: translateY(-50%);
}

.card-inside__buttons {
	display: flex;
	gap: 20px;
}
</style>
