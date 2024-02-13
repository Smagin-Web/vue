<template>
	<div class="item">
		<div class="item-part">
			<div>
				<p class="item-title">Код услуги</p>
				<h6 class="item-text">А22.30.022</h6>
			</div>

			<div>
				<p class="item-title">Наименование</p>
				<h6 class="item-text">Наименование процедуры</h6>
			</div>
		</div>

		<div class="item-part">
			<div>
				<p class="item-title">Время процедуры</p>
				<h6 class="item-text">120 мин</h6>
			</div>

			<div>
				<p class="item-title">Стоимость</p>
				<h6 class="item-text">44 900₽</h6>
			</div>
		</div>
	</div>
</template>

<style scoped>
.item {
	border-radius: 30px;
	background: #fff;

	padding: 20px 40px;

	display: flex;
	justify-content: space-between;
}

.item-part {
	display: flex;
	gap: 90px;
}

.item-title {
	color: #6d6364;
	font-size: 16px;
	font-weight: 400;
	padding-bottom: 10px;
}

.item-text {
	color: #000;
	font-size: 20px;
}

@media (max-width: 1200px) {
	.item-part {
		gap: 50px;
	}
}

@media (max-width: 1100px) {
	.item-part {
		gap: 30px;
	}
	.item-text {
		font-size: 18px;
	}
}

@media (max-width: 1000px) {
	.item {
		display: grid;
		gap: 30px;
	}
	.item-part {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: stretch;
	}
}

@media (max-width: 650px) {
	.item {
		padding: 16px;
		border-radius: 16px;
	}
	.item-part {
		grid-template-columns: 1fr 2fr;
	}
}

@media (max-width: 600px) {
	.item-text {
		font-size: 16px;
	}
}

@media (max-width: 500px) {
	.item-part {
		grid-template-columns: 2fr 3fr;
	}
	.item-text {
		font-size: 14px;
	}
	.item-title {
		font-size: 14px;
	}
}
</style>
