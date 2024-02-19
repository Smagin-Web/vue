<script setup >
import IconSliderArrowRight from '../icons/IconSliderArrowRight.vue'
</script>
<template>
	<div class="pagination">
		<div class="pagination-button-wrapper">
			<IconSliderArrowRight
				class="pagination-button-prev pagination-button-arrow"
			/>
			<a class="pagination-button-link" href="#" />
		</div>

		<button type="button" class="pagination-button pagination-button-active">
			1
		</button>
		<button type="button" class="pagination-button">2</button>
		<button type="button" class="pagination-button">3</button>
		<button type="button" class="pagination-button">4</button>
		<button type="button" class="pagination-button">...</button>
		<button type="button" class="pagination-button">11</button>
		<button type="button" class="pagination-button">12</button>

		<div class="pagination-button-wrapper">
			<IconSliderArrowRight
				class="pagination-button-next pagination-button-arrow"
			/>
			<a class="pagination-button-link" href="#" />
		</div>
	</div>
</template>

<style scoped>
.pagination {
	display: flex;
	gap: 30px;
	justify-content: center;
}

.pagination-button {
	flex-shrink: 0;
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

.pagination-button-wrapper {
	position: relative;
}

.pagination-button-arrow {
	transition: 0.2s;
}

.pagination-button-wrapper:hover .pagination-button-arrow {
	opacity: 0.8;
}

.pagination-button-link {
	position: absolute;
	right: 0;
	left: 0;
	bottom: 0;
	top: 0;
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

@media (max-width: 1000px) {
	.pagination {
		gap: 4px;
	}
	.pagination-button {
		font-size: 18px;
		width: 40px;
		height: 40px;
	}
	.pagination-button-prev,
	.pagination-button-next {
		width: 40px;
		height: 40px;
	}
}

@media (max-width: 500px) {
	.pagination {
		gap: 0;
		position: relative;
	}
	.pagination-button-prev {
		position: absolute;
		top: -60px;
		left: 40px;
	}
	.pagination-button-next {
		position: absolute;
		top: -60px;
		right: 40px;
	}
}
</style>
