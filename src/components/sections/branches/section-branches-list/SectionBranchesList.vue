<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import CardPlace from '@/components/cards/card-place/CardPlace.vue'
</script>

<template>
	<section class="section-contacts-card">
		<MContainer>
			<CardPlace class="card" />
		</MContainer>
	</section>
</template>

<style scoped>
.card {
	background-color: #fff;
	border-radius: 50px;
	padding: 40px;
}
</style>
