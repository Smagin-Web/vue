<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import Heading from '../../typography/Heading.vue'
</script>

<template>
	<section class="section-tech">
		<MContainer>
			<template #children>
				<Heading
					tag="h3"
					pb="50px"
					color="#6D6364"
					font-size-heading="50px"
					max-width="1200px"
					m="auto"
				>
					Мы&nbsp;разработали новый продукт в&nbsp;косметологии
				</Heading>
				<Heading
					tag="h3"
					color="white"
					font-size-heading="150px"
					class="big-heading"
					pb="160px"
				>
					8&nbsp;концептов твоей красоты
				</Heading>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-tech {
	padding: 104px 0 160px;
}

.big-heading {
	text-shadow: 0px 10px 20px #d0c3b4;
}
</style>
