<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import SectionPlusesPicture1 from './SectionPlusesPicture1.vue'
import SectionPlusesPicture2 from './SectionPlusesPicture2.vue'
import SectionPlusesPicture3 from './SectionPlusesPicture3.vue'
</script>

<template>
	<section class="section-pluses">
		<MContainer>
			<template #children>
				<div class="cards">
					<SectionPlusesPicture1 />
					<SectionPlusesPicture2 />
					<SectionPlusesPicture3 />
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.cards {
	display: grid;
	align-items: start;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 24px;
	padding-bottom: 160px;
}
.section-pluses {
	margin-top: 200px;
}

@media screen and (max-width: 1450px) {
	.cards {
		grid-template-columns: minmax(100px, 500px);
	}
}
</style>
