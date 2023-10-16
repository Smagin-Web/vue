<template>
	<div class="container">
		<slot name="children"></slot>
	</div>
</template>

<style scoped>
.container {
	max-width: 1920px;
	margin: auto;
	padding: 0 var(--container-padding-xxxl);
}

@media screen and (max-width: 1720px) {
	.container {
		padding: 0 var(--container-padding-xxl);
	}
}

@media screen and (max-width: 1420px) {
	.container {
		padding: 0 var(--container-padding-xl);
	}
}

@media screen and (max-width: 960px) {
	.container {
		padding: 0 var(--container-padding-l);
	}
}

@media screen and (max-width: 800px) {
	.container {
		padding: 0 var(--container-padding-sm);
	}
}
</style>
