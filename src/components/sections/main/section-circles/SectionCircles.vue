<script setup lang="ts">
import Avatar from '@/components/ui/Avatar.vue'
import MContainer from '../../../shared/MContainer.vue'
import SectionCirclesArrow from './SectionCirclesArrow.vue'
import SectionCirclesArrowSm from './SectionCirclesArrowSm.vue'
</script>

<template>
	<section class="section-circles">
		<MContainer>
			<template #children>
				<h3 class="heading-section heading-circles">
					<span style="position: relative">
						Отзывы клиентов в&nbsp;кружочках
						<SectionCirclesArrowSm class="heading-icon-sm" />
					</span>
					<SectionCirclesArrow class="heading-icon" />
				</h3>
				<div class="content-container">
					<div style="display: grid">
						<div class="circles" style="padding-bottom: 34px">
							<Avatar />
							<Avatar style="opacity: 0; z-index: -10" />
							<Avatar />
							<Avatar style="opacity: 0; z-index: -10" />
							<Avatar />
							<Avatar style="opacity: 0; z-index: -10" />
						</div>
						<div class="circles circles-absolute">
							<Avatar style="opacity: 0; z-index: -10" />
							<Avatar />
							<Avatar style="opacity: 0; z-index: -10" />
							<Avatar />
							<Avatar style="opacity: 0; z-index: -10" />
							<Avatar />
						</div>
						<div class="circles">
							<Avatar />
							<Avatar style="opacity: 0; z-index: -10" />
							<Avatar />
							<Avatar style="opacity: 0; z-index: -10" />
							<Avatar />
							<Avatar style="opacity: 0; z-index: -10" />
						</div>
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.heading-icon-sm {
	display: none;
}

.heading-circles {
	max-width: 880px;

	position: relative;
	font-size: 42px;
}

.heading-icon {
	position: absolute;
	left: 100%;
	top: -20px;
}
.section-circles {
	padding-bottom: 100px;
	padding-top: 100px;
}
.circle-empty {
	width: 260px;
}
.content-container {
	position: relative;

	overflow-x: auto;
}
.circles-absolute {
	position: absolute;
	width: 100%;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}
.circles {
	display: grid;
	grid-template-columns: repeat(6, max-content);
	align-items: start;
	justify-content: start;
}

.circle-bottom {
	margin-top: 147px;
}

@media (max-width: 1720px) {
	.content-container {
		margin: 0 var(--container-padding-xxl-n);
	}

	.circles {
		padding: 0 var(--container-padding-xxl);
		max-width: auto;
	}
}

@media (max-width: 1420px) {
	.content-container {
		margin: 0 var(--container-padding-xl-n);
		padding-bottom: 20px;
	}

	.circles {
		padding: 0 var(--container-padding-xl);
	}
}

@media (max-width: 1300px) {
	.heading-circles {
		max-width: 700px;
	}
	.heading-icon {
		left: 80%;
	}
}

@media (max-width: 1000px) {
	.section-circles {
		padding-top: 0;
	}
	.heading-circles {
		display: grid;
		justify-content: start;
		font-size: 22px;
		padding-bottom: 48px;
	}

	.heading-icon {
		display: none;
	}

	.heading-icon-sm {
		display: block;
		position: absolute;
		top: 0;
		right: -100px;
	}
}

@media (max-width: 960px) {
	.content-container {
		margin: 0 var(--container-padding-l-n);
	}
	.circles {
		padding: 0 var(--container-padding-l);
	}
}

@media (max-width: 800px) {
	.content-container {
		margin: 0 var(--container-padding-sm-n);
	}
	.circles {
		padding: 0 var(--container-padding-sm);
	}
}

@media (max-width: 600px) {
	.heading-circles span {
		max-width: 260px;
	}

	.heading-icon-sm {
		top: 10px;
	}
}
</style>
