<template>
	<a href="#" style="display: flex">
		<span class="badge">
			<slot></slot>
		</span>
	</a>
</template>

<style scoped>
.badge {
	color: white;
	border-radius: 10px;
	background: #eea3a3;
	padding: 8px 10px;
	line-height: 20px;
	color: #fff;

	font-family: 'UABrand';
	font-size: 16px;
	font-weight: 700;
	white-space: nowrap;
}

@media (max-width: 1150px) {
	.badge {
		font-size: 14px;
		padding: 5px 10px;
	}
}
</style>
