<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import MBadge from '../../ui/MBadge.vue'
import MButtonOutline from '../../buttons/MButtonOutline.vue'
import MButton from '../../buttons/MButton.vue'
</script>

<template>
	<section class="section-offer">
		<MContainer>
			<template #children>
				<div class="section-offer-card">
					<div class="section-offer-card__badge">
						<MBadge></MBadge>
					</div>
					<div class="section-offer-card-inside">
						<h4>
							Первичный приём врача дерматолога +<br />диагностика Antera 3D
						</h4>
						<div class="section-offer-card-inside__buttons">
							<MButton>Записаться на приём</MButton>
							<MButtonOutline></MButtonOutline>
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
}

.section-offer-card-inside {
	background-color: #fff;
	padding: 80px;
	border-radius: 50px;
}

.section-offer-card__badge {
	position: absolute;
	left: 80px;
	top: 0;
	transform: translateY(-50%);
}

.section-offer-card-inside h4 {
	color: #000;
	font-size: 34px;
	font-weight: 700;
	padding-bottom: 70px;
}
.section-offer-card-inside__buttons {
	display: flex;
	gap: 20px;
}
</style>
