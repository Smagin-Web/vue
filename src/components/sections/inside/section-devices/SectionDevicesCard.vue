<script setup >
import CardInfo from '@/components/card-elements/CardInfo.vue'
import CardLink from '@/components/card-elements/CardLink.vue'
</script>
<template>
	<div class="card-devices-big">
		<div class="card-content">
			<div class="card-info">
				<h5 class="h-md">Skinova Pro</h5>
				<p class="text-sm">
					Клеточная реконструкция высокочастотным ультразвуком. Единственная
					технология, регулирующая уровень кавеолина&nbsp;&mdash; структурного
					белка клеточной мембраны, который находится практически во&nbsp;всех
					клетках кожи.
				</p>
				<div class="card-price-and-link">
					<CardInfo
						class="card-price"
						title="Стоимость 1 процедуры"
						icon="pay"
						text="от 4 500₽"
					/>

					<CardLink path="youtube.com" />
				</div>
			</div>

			<div class="card-img-wrapper">
				<img src="./photo.png" class="card-img" alt="" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-devices-big {
	padding: 40px;
	border-radius: 50px;
	background-color: #fff;
}
.card-content {
	position: relative;
	display: flex;
	justify-content: space-between;
}

.card-info {
	padding-top: 10px;
	display: grid;
	gap: 20px;
	max-width: 930px;
}

.card-img-wrapper {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 0;

	max-height: 356px;
}

.card-img {
	height: 100%;
	width: auto;
}

.card-price {
	padding-bottom: 40px;
}

@media (max-width: 1780px) {
	.card-info {
		max-width: 800px;
	}
}

@media (max-width: 1600px) {
	.card-info {
		max-width: 700px;
	}
}

@media (max-width: 1450px) {
	.card-img-wrapper {
		max-height: 300px;
	}
	.card-img {
		max-height: 300px;
	}
}

@media (max-width: 1350px) {
	.card-info {
		max-width: 600px;
	}
}

@media (max-width: 1280px) {
	.card-info {
		max-width: 500px;
	}
}

@media (max-width: 1140px) {
	.card-img-wrapper {
		bottom: 0;
		top: auto;
		right: 0;
		transform: none;
		max-height: 200px;
	}
	.card-img {
		max-height: 200px;
	}
	.card-info {
		max-width: 100%;
	}
}

@media (max-width: 1000px) {
	.card-devices-big {
		border-radius: 20px;
		padding: 30px;
	}
	.card-price {
		padding-bottom: 20px;
	}
}

@media (max-width: 700px) {
	.card-img-wrapper {
		position: static;
	}
	.card-img {
		height: 100%;
	}
	.card-content {
		display: block;
	}
	.card-price-and-link {
		display: flex;
		justify-content: space-between;
	}
}

@media (max-width: 500px) {
	.card-devices-big {
		padding: 20px;
	}
}
</style>
