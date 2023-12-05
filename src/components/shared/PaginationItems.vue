<script setup lang="ts">
import IconSliderArrowRight from '../icons/IconSliderArrowRight.vue'
</script>
<template>
	<div class="pagination">
		<IconSliderArrowRight class="pagination-button-prev" />
		<button type="button" class="pagination-button pagination-button-active">
			1
		</button>
		<button type="button" class="pagination-button">2</button>
		<button type="button" class="pagination-button">3</button>
		<button type="button" class="pagination-button">4</button>
		<button type="button" class="pagination-button">...</button>
		<button type="button" class="pagination-button">11</button>
		<button type="button" class="pagination-button">12</button>

		<IconSliderArrowRight class="pagination-button-next" />
	</div>
</template>

<style scoped>
.pagination {
	display: flex;
	gap: 30px;
	justify-content: center;
}

.pagination-button {
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 6px;

	font-family: 'Pelinka';
	font-weight: 700;
	font-size: 34px;

	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: 2px solid transparent;
	background: transparent;
}

.pagination-button-active {
	border: 2px solid black;
}

.pagination-button-next {
	margin-left: 20px;
}

.pagination-button-prev {
	transform: rotate(180deg);
	margin-right: 20px;
}
</style>
