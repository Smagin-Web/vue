<script setup lang="ts"></script>

<template>
	<div class="prices">
		<h4 class="price-old">2 500₽</h4>
		<h4 class="price-new">990₽</h4>
	</div>
</template>

<style scoped>
.prices {
	display: flex;
	flex-direction: column;

	align-items: end;
	justify-content: end;
}
.price-new {
	font-size: 100px;
	line-height: 100px;
}

.price-old {
	color: #e4b5c3;
	font-size: 40px;
	text-align: end;

	display: flex;
	justify-content: end;
	position: relative;
}

.price-old:after {
	content: '';
	display: block;
	height: 6px;
	width: 100%;

	transform: rotate(16deg);
	background-color: #d2a0af;
	position: absolute;
	top: 18px;
	border-radius: 20px;
}

@media screen and (max-width: 1000px) {
	.card-inside {
		display: grid;
		padding: 30px 16px 44px;
	}

	.heading {
		font-size: 20px;
		padding-bottom: 160px;
	}

	.buttons {
		display: grid;
		gap: 30px;
	}

	.prices {
		position: absolute;
	}
}
</style>
