<script lang="ts" setup>
import { ref, onMounted } from 'vue'

defineProps<{
	title: string
	text: string
}>()

const textRef = ref()
const titleRef = ref()
const itemRef = ref()

const onResize = () => {
	isActive.value = false
	heightItem.value = ''
}

onMounted(() => {
	window.addEventListener('resize', onResize)
})

let isActive = ref(false)
let heightItem = ref('')

const handler = () => {
	isActive.value = !isActive.value

	if (isActive.value) {
		heightItem.value = `height: ${itemRef.value.offsetHeight}px`
		setTimeout(() => {
			heightItem.value = `height: ${
				itemRef.value.offsetHeight + textRef.value.offsetHeight
			}px;`
		}, 10)
	} else {
		heightItem.value = ''
	}
}
</script>

<template>
	<div class="item" @click="handler" :style="heightItem" ref="itemRef">
		<h6 class="item-title" ref="titleRef">
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
	padding: 50px 140px 50px 50px;

	border-radius: 50px;
	background: #fff;
	cursor: pointer;
	transition: 0.2s;

	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	-webkit-tap-highlight-color: transparent;
}

.item-title {
	display: flex;
	width: 100%;
	align-items: center;
	line-height: 24px;
	min-height: 50px;
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

	opacity: 0;

	padding-right: 142px;
	user-select: none;
	pointer-events: none;
}

.item-text.active {
	opacity: 1;
	transition: 0.2s;
	transition-delay: 0.2s;
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

	width: 100%;
	height: 100%;
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
	width: 50%;
	height: 3px;
	background-color: #fff;
	border-radius: 4px;
	transition: 0.2s;
}

.item-icon:before {
	transform: translateX(-50%) translateY(-50%) rotate(90deg);
}

@media (max-width: 1200px) {
	.item-icon-wrapper {
		width: 50px;
		height: 50px;
	}
	.item {
		height: auto;
		padding-top: 30px;
		padding-bottom: 30px;
		padding-left: 30px;
		border-radius: 30px;
	}
	.item-text {
		padding-top: 20px;
	}
}

@media (max-width: 1000px) {
	.item {
		padding-top: 20px;
		padding-left: 20px;
		padding-bottom: 20px;
		border-radius: 20px;
	}
	.item-title {
		font-size: 18px;
	}
	.item-text {
		font-size: 18px;
		bottom: 20px;
		padding-top: 6px;
	}
}

@media (max-width: 800px) {
	.item {
		padding-right: 80px;
	}
	.item-icon-wrapper {
		right: 20px;
		width: 38px;
		height: 38px;
	}
}

@media (max-width: 500px) {
	.item {
		padding-top: 14px;
		padding-left: 14px;
		padding-bottom: 10px;
		border-radius: 10px;
		padding-right: 60px;
	}
	.item-title {
		font-size: 14px;
		line-height: 1.3;
	}
	.item-text {
		font-size: 14px;
		padding-top: 10px;
		bottom: 10px;
		padding-right: 60px;
	}
	.item-icon-wrapper {
		width: 32px;
		height: 32px;
		right: 10px;
	}
}
</style>
