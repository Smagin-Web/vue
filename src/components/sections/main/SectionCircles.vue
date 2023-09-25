<script setup lang="ts">
import Avatar from '@/components/ui/Avatar.vue'
import MContainer from '../../shared/MContainer.vue'
</script>

<template>
	<section class="section-circles">
		<MContainer>
			<template #children>
				<h3 class="heading-section">Отзывы клиентов в кружочках</h3>
				<div class="content-container">
					<div class="circles" style="padding-bottom: 34px">
						<Avatar />
						<div class="circle-empty" />
						<Avatar />
						<div class="circle-empty" />
						<Avatar />
						<div class="circle-empty" />
					</div>
					<div class="circles circles-absolute">
						<div class="circle-empty" />
						<Avatar />
						<div class="circle-empty" />
						<Avatar />
						<div class="circle-empty" />
						<Avatar />
					</div>
					<div class="circles">
						<Avatar />
						<div class="circle-empty" />
						<Avatar />
						<div class="circle-empty" />
						<Avatar />
						<div class="circle-empty" />
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-circles {
	padding-bottom: 100px;
	padding-top: 100px;
}
.circle-empty {
	width: 260px;
}
.content-container {
	position: relative;
}
.circles-absolute {
	position: absolute;
	width: 100%;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}
.circles {
	display: flex;
	align-items: start;
	justify-content: space-between;
}

.circle-bottom {
	margin-top: 147px;
}
</style>
