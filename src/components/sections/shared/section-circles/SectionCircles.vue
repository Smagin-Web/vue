<script setup >
import MContainer from '../../../shared/MContainer.vue'
import SectionCirclesArrow from './SectionCirclesArrow.vue'
import SectionCirclesArrowSm from './SectionCirclesArrowSm.vue'
import SectionCirclesBlock from './SectionCirclesBlock.vue'
</script>

<template>
	<section class="section">
		<MContainer>
			<h3 class="h-l heading">
				<span style="position: relative">
					Отзывы клиентов в&nbsp;кружочках
					<SectionCirclesArrowSm class="heading-icon-sm" />
				</span>
				<SectionCirclesArrow class="heading-icon" />
			</h3>
			<SectionCirclesBlock />
		</MContainer>
	</section>
</template>

<style scoped>
.heading {
	position: relative;
	max-width: 880px;
	padding-bottom: 80px;
}

.heading-icon {
	position: absolute;
	left: 100%;
	top: -20px;
}

.heading-icon-sm {
	display: none;
}

.section {
	padding-bottom: 100px;
	padding-top: 100px;
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
	.section {
		padding-top: 0;
	}
	.heading {
		display: grid;
		justify-content: start;
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

@media (max-width: 600px) {
	.heading span {
		max-width: 260px;
	}
	.heading-icon-sm {
		top: 10px;
	}
}

@media (max-width: 400px) {
	.heading-icon-sm {
		right: 0;
		top: 34px;
	}
}
</style>
