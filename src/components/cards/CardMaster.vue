<script setup lang="ts">
import Heading from '../typography/Heading.vue'
import Text from '../typography/Text.vue'
</script>

<template>
	<div class="card-master">
		<img src="./Avatar.png" class="card-master__img" />
		<Heading tag="h5" font-size-heading="30px" pb="22px">Ольга Заика</Heading>
		<Text text-align-text="center">Главный врач, врач-косметолог</Text>
	</div>
</template>

<style scoped>
.card-master {
	max-width: 402px;
}
.card-master__img {
	margin-bottom: 40px;
}
</style>
