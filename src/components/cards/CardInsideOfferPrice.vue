<script setup></script>

<template>
	<div class="card-inside-prices">
		<div class="prices-old-wrapper">
			<h4 class="prices-old">2000₽</h4>
		</div>
		<h4 class="prices-new">0₽</h4>
	</div>
</template>

<style scoped>
.card-inside-prices {
	display: grid;

	align-content: end;
	justify-items: end;
}

.prices-new {
	font-size: 100px;
	line-height: 100px;
}

.prices-old-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
}

.prices-old {
	color: #e4b5c3;
	font-size: 40px;
	text-align: end;

	display: flex;
	justify-content: end;
	position: relative;
}

.prices-old:after {
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

@media (max-width: 1400px) {
	.prices-new {
		font-size: 70px;
		line-height: 70px;
	}
	.prices-old {
		font-size: 28px;
	}
}

@media (max-width: 800px) {
	.prices-new {
		font-size: 60px;
	}
	.prices-old {
		font-size: 24px;
	}
}

@media (max-width: 600px) {
	.prices-new {
		font-size: 48px;
		line-height: 40px;
	}
	.prices-old {
		font-size: 24px;
	}
}
</style>
