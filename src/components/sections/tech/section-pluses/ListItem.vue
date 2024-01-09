<template>
	<div class="list-item">
		<div class="number-wrapper">
			<slot name="img" />
		</div>
		<p class="list-item-text"><slot /></p>
	</div>
</template>

<style scoped>
.list-item {
	max-width: 400px;
}

.number-wrapper {
	position: relative;
	padding: 0 14px 20px;
}

.number-wrapper :deep() img {
	width: 82px;
	height: auto;
	margin-left: -20px;
}

.list-item-text {
	color: #6d6364;
	font-size: 22px;
}

@media (max-width: 1000px) {
	.number-wrapper :deep() img {
		width: 42px;
	}
	.list-item-text {
		color: #6d6364;
		font-size: 14px;
	}
}
</style>
