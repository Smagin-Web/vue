<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionBlockResponse from './SectionBlockResponse.vue'
</script>

<template>
	<section class="section-other">
		<MContainer>
			<h4 class="h-xl heading-section--other">
				Другие примеры результата, к&nbsp;которому мы&nbsp;помогли придти
			</h4>
			<SectionBlockResponse />
		</MContainer>
	</section>
</template>

<style scoped>
.section-other {
	max-width: 100%;
	overflow: hidden;
}
.heading-section--other {
	max-width: 790px;
	padding-top: 24px;
}

@media (max-width: 1780px) {
	.heading-section--other {
		max-width: 760px;
	}
}

@media (max-width: 1000px) {
	.heading-section--other {
		max-width: 500px;
	}
}
</style>
