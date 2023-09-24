<script setup lang="ts"></script>

<template>
	<div class="prices">
		<div class="price-old-wrapper">
			<h4 class="price-old">2 500₽</h4>
		</div>
		<h4 class="price-new">990₽</h4>
	</div>
</template>

<style scoped>
.prices {
	display: grid;

	align-content: end;
	justify-items: end;
}

.price-new {
	font-size: 100px;
	line-height: 100px;
}

.price-old-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
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
	height: 14%;
	width: 100%;

	transform: rotate(16deg);
	background-color: #d2a0af;
	position: absolute;
	top: 35%;
	border-radius: 20px;
}

@media screen and (max-width: 1000px) {
	.price-new {
		font-size: 54px;
	}
	.price-old {
		font-size: 28px;
	}
}

@media screen and (max-width: 600px) {
	.price-new {
		font-size: 48px;
	}
	.price-old {
		font-size: 24px;
	}
}
</style>
