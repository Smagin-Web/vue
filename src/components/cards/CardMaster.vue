<script setup lang="ts">
import Heading from '../typography/Heading.vue'
import Text from '../typography/Text.vue'
</script>

<template>
	<div class="card">
		<img src="./Avatar.png" class="card-img" />
		<h5 class="card-heading">Ольга Заика</h5>
		<p class="card-text">Главный врач, врач-косметолог</p>
	</div>
</template>

<style scoped>
.card {
	max-width: 402px;
	min-width: 260px;
}
.card-img {
	width: 100%;
	height: auto;
	margin-bottom: 40px;
}

.card-heading {
	text-align: center;
	font-size: 30px;
	padding-bottom: 22px;
}

.card-text {
	color: #6d6364;
	text-align: center;
	font-family: 'BrisaSans';
	font-size: 22px;
}

@media screen and (max-width: 1000px) {
	.card {
		max-width: 300px;
	}

	.card-heading {
		font-size: 17px;
		padding-bottom: 18px;
	}

	.card-text {
		font-size: 16px;
	}
}
</style>
