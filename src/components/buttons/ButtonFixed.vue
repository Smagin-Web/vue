<script setup lang="ts">
import IconMessage from '../icons/IconMessage.vue'
import { useModalsStore } from '@/stores/modals'

const store = useModalsStore()
</script>

<template>
	<div class="buttons-fixed">
		<div class="background" />
		<button class="button-one" @click="store.openModalApplication">Запись на приём</button>
		<button class="button-two">
			<a
				href="https://wa.me/79774122010"
				class="button-two-link"
				target="_blank"
				rel="noopener noreferrer"
			/>
			<IconMessage class="button-icon" />
		</button>
	</div>
</template>

<style scoped>
.buttons-fixed {
	position: fixed;
	bottom: 40px;
	right: 40px;
	z-index: 120;

	display: flex;
	gap: 20px;
}

.background {
	display: none;
}

.button-one {
	font-family: 'BrisaSans';
	font-size: 34px;
	font-weight: 700;
	text-align: center;

	color: #fff;
	background: #ae8c8e;
	border: none;
	border-radius: 100px;

	padding-right: 40px;
	padding-left: 40px;
}

.button-one:hover {
	opacity: 1;
	background: #a87b7e;
}

.button-two {
	position: relative;
	height: 80px;
	width: 80px;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;
	background: #81cca4;
	border: none;
}

.button-two-link {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
}

.button-two:hover {
	opacity: 1;
	background: #63ac86;
}

@media (max-width: 1600px) {
	.button-one {
		font-size: 28px;
		height: 70px;
	}
	.button-two {
		height: 70px;
		width: 70px;
	}
}

@media (max-width: 1300px) {
	.button-one {
		font-size: 24px;
		height: 60px;
	}
	.button-two {
		height: 60px;
		width: 60px;
	}
	.button-icon {
		width: 26px;
		height: auto;
	}
}

@media (max-width: 1000px) {
	.buttons-fixed {
		padding: 20px;

		justify-content: center;
		gap: 10px;

		left: 0;
		right: 0;
		bottom: 0;

		background-color: #f4eee8;
	}
	.button-one {
		font-size: 16px;
		height: 40px;
		padding: 0 45px;
	}
	.button-icon {
		width: 16px;
	}
	.button-two {
		width: 100px;
		height: 40px;
		border-radius: 20px;
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
@/stores/modals