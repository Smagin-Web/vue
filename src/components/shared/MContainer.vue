<template>
	<div class="container">
		<slot name="children"></slot>
	</div>
</template>

<style scoped>
.container {
	max-width: 1920px;
	margin: auto;
	padding: 0 120px;
}

@media screen and (max-width: 1720px) {
	.container {
		padding: 0 80px;
	}
}

@media screen and (max-width: 1420px) {
	.container {
		padding: 0 60px;
	}
}

@media screen and (max-width: 960px) {
	.container {
		padding: 0 40px;
	}
}


@media screen and (max-width: 800px) {
	.container {
		padding: 0 20px;
	}
}
</style>
