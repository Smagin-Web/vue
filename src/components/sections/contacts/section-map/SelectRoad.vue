<script setup lang="ts">
import SelectArrow from '@/components/icons/SelectArrow.vue'
import { ref } from 'vue'

const isActive = ref(false)
let className = ref('')

const onClickHandler = () => {
	isActive.value = !isActive.value
	if (isActive.value) {
		className.value = 'active'
	} else {
		className.value = ''
	}
}
</script>

<template>
	<div class="select-road" v-bind:class="className">
		<button class="select-road-button" :onClick="onClickHandler">
			Как добраться от МКАД на автомобиле
		</button>

		<SelectArrow class="select-road-icon" />

		<div class="select-road-list" v-bind:class="className">
			<button class="select-road-list-button">
				Как добраться от МКАД на автомобиле
			</button>
			<button class="select-road-list-button">
				Как добраться от МКАД на автомобиле
			</button>
			<button class="select-road-list-button">
				Как добраться от МКАД на автомобиле
			</button>
			<button class="select-road-list-button">
				Как добраться от МКАД на автомобиле
			</button>
			<button class="select-road-list-button">
				Как добраться от МКАД на автомобиле
			</button>
			<button class="select-road-list-button">
				Как добраться от МКАД на автомобиле
			</button>
			<button class="select-road-list-button">
				Как добраться от МКАД на автомобиле
			</button>
		</div>
	</div>
</template>

<style scoped>
.select-road {
	width: 600px;
	position: relative;

	border-radius: 40px;
	background: #f4eee8;
	box-shadow: 0px 0px 20px 0px rgba(109, 99, 100, 0.3);
	transition: 0.2s;
}

.select-road-button {
	width: 100%;
	text-align: start;
	position: relative;
	border: none;
	background: none;
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	padding: 26px 30px;
	padding-right: 30px;

	z-index: 10;
}

.select-road.active {
	box-shadow: none;
}

.select-road-icon {
	position: absolute;
	right: 10px;
	bottom: 10px;
	top: 10px;
	height: calc(100% - 20px);
	width: auto;
	z-index: 10;
	pointer-events: none;
}

.select-road-list {
	padding: 5px;
	padding-top: 80px;
	background-color: #f4eee8;
	border-radius: 40px;
	box-shadow: 0px 0px 20px 0px rgba(109, 99, 100, 0.3);

	position: absolute;
	right: 0;
	left: 0;
	top: 0;
	z-index: 1;

	opacity: 0;
	transition: 0.2s;
}

.select-road-list.active {
	opacity: 1;
}

.select-road-list-button {
	display: block;
	width: 100%;
	text-align: start;
	border-radius: 100px;
	padding: 25px 22px;

	border: none;
	background: transparent;

	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	font-weight: 400;
	z-index: 1;
}

.select-road-list-button:hover {
	background: #ede4da;
}
</style>
