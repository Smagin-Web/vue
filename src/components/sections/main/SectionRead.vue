<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import Heading from '../../typography/Heading.vue'
import CardNews from '../../cards/CardNews.vue'
import Grid from '../../shared/Grid.vue'
import MButton from '../../buttons/MButton.vue'
</script>

<template>
	<section class="section-read">
		<MContainer>
			<template #children>
				<Heading
					tag="h3"
					font-size-heading="50px"
					pb="36px"
					text-align-heading="left"
				>
					Читай полезное и интересное
				</Heading>
				<Heading
					tag="h5"
					color="#6D6364"
					pb="70px"
					font-size-heading="24px"
					text-align-heading="left"
					max-width="886px"
				>
					Мы хотим поделиться с тобой некоторыми советами, которые помогут тебе
					ухаживать за кожей
				</Heading>
				<Grid gtc="1fr 1fr 1fr" gap="24px" pb="70px">
					<CardNews />
					<CardNews />
					<CardNews />
				</Grid>
				<div style="display: flex; justify-content: center">
					<MButton>Больше интересных статей</MButton>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped></style>
