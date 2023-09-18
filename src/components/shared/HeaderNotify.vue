<script setup lang="ts">
import MContainer from './MContainer.vue'
import Heading from '../typography/Heading.vue'
</script>

<template>
	<div class="header-notify">
		<MContainer>
			<template #children>
				<Heading
					tag="h5"
					color="#6D6364"
					font-size-heading="20px"
					letter-spacing-heading="6.9px"
					text-transform="uppercase"
				>
					Версия сайта для слабовидящих
				</Heading>
			</template>
		</MContainer>
	</div>
</template>

<style scoped>
.header-notify {
	padding: 15px 0;
	background-color: #fff;
}
</style>
