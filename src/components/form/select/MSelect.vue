<script setup lang="ts">
import SelectIcon from './SelectIcon.vue'
import { ref } from 'vue'

const isActive = ref(false)

const onClickHandler = () => {
	isActive.value = !isActive.value
}

const listItems = [
	'AntiAcne Concept',
	'Clear Concept',
	'Lifting Concept',
	'AntiAcne Concept'
]
</script>

<template>
	<div class="select-wrapper">
		<button
			class="select-button text-sm"
			@click="onClickHandler"
			type="button"
			placeholder="Все клиники"
		>
			Все клиники
		</button>

		<SelectIcon class="select-icon" v-bind:class="isActive ? 'active' : null" />

		<div class="select-list" v-bind:class="isActive ? 'active' : null">
			<button
				class="select-list-button text-sm"
				v-for="(item, index) in listItems"
				@click="onClickHandler"
				:key="item + index"
			>
				{{ item }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.select-wrapper {
	position: relative;
	border-radius: 100px;
	background: #fff;
	max-width: 550px;
}

.select-button {
	background-color: #fff;

	line-height: 28px;

	text-align: left;
	position: relative;
	z-index: 20;
	width: 100%;
	border: none;
	outline: none;
	border-radius: 100px;
	padding: 26px 140px 26px 40px;
}

.select-icon {
	position: absolute;
	right: 10px;
	bottom: 10px;
	top: 10px;
	z-index: 20;

	pointer-events: none;
	transition: 0.1s;
	cursor: pointer;
}

.select-icon.active {
	transform: rotate(180deg);
}

.select-icon:hover {
	opacity: 0.8;
}

.select-list {
	width: 100%;
	padding: 80px 5px 5px;
	border-radius: 40px;
	position: absolute;
	top: 0;
	background-color: #fff;
	z-index: 10;
	opacity: 0;
	transition: 0.2s;
}

.select-list.active {
	opacity: 1;
	box-shadow: 0px 0px 20px 0px rgba(109, 99, 100, 0.3);
}

.select-list-button {
	display: block;
	width: 100%;
	padding: 22px 34px;

	text-align: left;

	color: #6d6364;
	background-color: #fff;

	border-radius: 100px;
	border: none;
}

.select-list-button:hover {
	background-color: #ede4da;
}

@media (max-width: 1000px) {
	.select-button {
		padding: 18px 90px 18px 26px;
	}
	.select-icon {
		top: 8px;
		right: 8px;
		height: calc(100% - 16px);
		width: auto;
	}
	.select-list {
		padding-top: 60px;
		border-radius: 30px;
	}
	.select-list-button {
		padding: 16px 22px;
	}
}
</style>
