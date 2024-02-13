<template>
	<h6 class="big-badge"><slot /></h6>
</template>

<style scoped>
.big-badge {
	color: #fff;
	font-family: 'UABrand';
	font-size: 48px;
	font-weight: 700;

	padding: 3px 30px 8px;
	border-radius: 14px;
	background: #b2977b;

	position: absolute;
	left: 85px;
	top: 0;
	transform: translateY(-50%);
}

@media (max-width: 1600px) {
	.big-badge {
		font-size: 38px;
	}
}

@media (max-width: 1300px) {
	.big-badge {
		font-size: 34px;
		left: 40px;
	}
}

@media (max-width: 1000px) {
	.big-badge {
		padding: 4px 30px 8px;
		font-size: 22px;
		left: 50%;
		top: -16px;
		transform: translateX(-50%);
		white-space: nowrap;
		border-radius: 10px;
	}
}

@media (max-width: 500px) {
	.big-badge {
		font-size: 14px;
		font-weight: 600;
		border-radius: 6px;
	}
}
</style>
