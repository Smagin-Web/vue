<script setup lang="ts">
import IconMessage from '../icons/IconMessage.vue'
</script>

<template>
	<div class="buttons-fixed">
		<div class="background" />
		<button class="button-fixed">Запись на приём</button>
		<button class="button-fixed-two">
			<IconMessage class="button-icon" />
		</button>
	</div>
</template>

<style scoped>
.background {
	display: none;
}
.button-fixed {
	color: #fff;
	text-align: center;
	font-family: 'BrisaSans';
	font-size: 34px;
	font-weight: 700;
	padding: 19px 40px;

	border-radius: 100px;
	background: #ae8c8e;
	border: none;
}

.buttons-fixed {
	z-index: 120;
	position: fixed;
	bottom: 40px;
	right: 40px;

	display: flex;
	gap: 20px;
}

.button-fixed-two {
	padding: 25px 24.5px;

	border-radius: 100px;
	background: #81cca4;
	border: none;
}
@media (max-width: 1000px) {
	.buttons-fixed {
		left: 0;
		right: 0;
		bottom: 0;
		justify-content: center;
		background-color: #f4eee8;
		padding: 10px;
		gap: 10px;
	}

	.button-fixed {
		font-size: 16px;
		height: 40px;
		padding: 0 45px;
	}

	.button-icon {
		width: 16px;
		height: auto;
	}

	.button-fixed-two {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;
		width: 40px;
		height: 40px;
	}

	.background {
		display: block;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 100%;
		background: linear-gradient(#f4eee8 0%, rgba(244, 238, 232, 0) 100%);
		height: 18px;
		transform: rotate(180deg);
	}
}
</style>
