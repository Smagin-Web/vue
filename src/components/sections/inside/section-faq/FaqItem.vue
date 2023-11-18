<script lang="ts" setup>
import { ref, onMounted } from 'vue'

defineProps<{
	title: string
	text: string
}>()

const textRef = ref()

onMounted(() => {
	console.log(textRef.value.offsetHeight)
})

let isActive = ref(false)
let heightItem = ref('')

const handler = () => {
	isActive.value = !isActive.value

	if (isActive.value) {
		heightItem.value = `height: ${150 + textRef.value.offsetHeight}px;`
	} else {
		heightItem.value = ''
	}
}
</script>

<template>
	<div class="item" @click="handler" :style="heightItem">
		<h6 class="item-title">
			{{ title }}
		</h6>
		<p class="item-text" v-bind:class="{ active: isActive }" ref="textRef">
			{{ text }}
		</p>
		<div class="item-icon-wrapper">
			<div class="item-icon" v-bind:class="{ active: isActive }" />
		</div>
	</div>
</template>

<style scoped>
.item {
	position: relative;
	padding-right: 142px;

	border-radius: 50px;
	background: #fff;

	cursor: pointer;
	transition: 0.2s;
	height: 150px;
	padding-left: 40px;
}

.item-title {
	height: 150px;
	display: flex;
	width: 100%;
	align-items: center;
}

.item:hover {
	background-color: rgb(255, 249, 249);
}

.item:hover .item-icon {
	background-color: #b69597;
}

.item-title {
	color: #000;
	font-size: 20px;
	line-height: 24px;
	user-select: none;
}

.item-text {
	position: absolute;
	bottom: 40px;

	color: #6d6364;
	font-size: 22px;
	font-weight: 300;

	transition: 0.1s linear;
	opacity: 0;

	padding-right: 142px;
	user-select: none;
}

.item-text.active {
	opacity: 1;
}

.item-icon-wrapper {
	position: absolute;
	right: 40px;
	top: 50%;
	transform: translateY(-50%);
	height: 60px;
	width: 60px;
}

.item-icon {
	position: relative;

	width: 60px;
	height: 60px;
	background-color: #ae8c8e;
	border-radius: 50%;
	transition: 0.2s;
}

.item-icon.active:before {
	transform: translateX(-50%) translateY(-50%);
}

.item-icon:after,
.item-icon:before {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);

	content: '';
	display: block;
	width: 30px;
	height: 3px;
	background-color: #fff;
	border-radius: 4px;
	transition: 0.2s;
}

.item-icon:before {
	transform: translateX(-50%) translateY(-50%) rotate(90deg);
}
</style>
