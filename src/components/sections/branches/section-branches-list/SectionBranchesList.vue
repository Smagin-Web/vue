<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import CardPlace from '@/components/cards/card-place/CardPlace.vue'
</script>

<template>
	<section>
		<MContainer>
			<CardPlace class="card" title="Face Concept Лефортово" />
		</MContainer>
	</section>
</template>

<style scoped>
.card {
	background-color: #fff;
	border-radius: 50px;
	padding: 40px;
}

@media (max-width: 550px) {
	.card {
		padding: 26px;
		border-radius: 38px;
	}
}
</style>
