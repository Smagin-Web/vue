<template>
	<a href="#">
		<button class="tag"><slot /></button>
	</a>
</template>

<style scoped>
.tag {
	border-radius: 100px;
	border: 1px solid #000;
	font-family: 'BrisaSans';
	font-size: 16px;
	font-weight: 700;

	padding: 10px 20px;
  background: transparent;
}
</style>
