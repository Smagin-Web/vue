<script setup lang="ts">
import { ref } from 'vue'

let isActive = ref(false)

const onClickHandler = () => {
	isActive.value = !isActive.value
}
</script>

<template>
	<div class="nav" :onClick="onClickHandler">
		<button class="nav-main-button">Все услуги</button>
		<span class="nav-icon-button">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
			>
				<circle
					cx="20"
					cy="20"
					r="20"
					transform="rotate(-180 20 20)"
					fill="#AE8C8E"
				/>
				<path
					d="M20.1545 13.6063C20.3873 13.6063 20.5827 13.6851 20.7405 13.8429C20.8982 14.0007 20.9769 14.1958 20.9763 14.4281L20.9763 23.612L24.9827 19.6056C25.1471 19.4412 25.3424 19.3591 25.5687 19.3591C25.795 19.3591 25.99 19.4412 26.1538 19.6056C26.3182 19.77 26.4004 19.9617 26.4004 20.1809C26.4004 20.4 26.3182 20.5918 26.1538 20.7562L20.7298 26.1802C20.6476 26.2624 20.5586 26.3205 20.4627 26.3545C20.3668 26.3884 20.2641 26.4057 20.1545 26.4062C20.0449 26.4062 19.9386 26.389 19.8356 26.3545C19.7326 26.32 19.6471 26.2619 19.5792 26.1802L14.1551 20.7562C13.9908 20.5918 13.9086 20.4 13.9086 20.1809C13.9086 19.9617 13.9908 19.77 14.1551 19.6056C14.3195 19.4412 14.5148 19.3591 14.7411 19.3591C14.9674 19.3591 15.1624 19.4412 15.3262 19.6056L19.3327 23.612L19.3327 14.4281C19.3327 14.1952 19.4116 13.9999 19.5693 13.8421C19.7271 13.6843 19.9222 13.6057 20.1545 13.6063Z"
					fill="white"
				/>
			</svg>
		</span>
		<div class="nav-list" v-bind:class="{ 'nav-list-active': isActive }">
			<div class="nav-list-scroll">
				<button class="nav-list-button">Аппаратная косметология</button>
				<button class="nav-list-button">Инъекционная косметология</button>
				<button class="nav-list-button">AntiAcne Concept</button>
				<button class="nav-list-button">Clear Concept</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.nav {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	position: relative;
	max-width: 450px;
	background-color: #fff;
	border-radius: 100px;
	margin: 0 auto;
}

.nav-main-button {
	position: relative;
	padding: 20px;
	padding-right: 80px;
	width: 100%;
	border-radius: 100px;
	border: none;
	background: none;
	text-align: left;

	color: #000;
	font-family: 'Pelinka';
	font-size: 16px;
	font-weight: 700;
	z-index: 10;
}

.nav-icon-button {
	position: absolute;
	right: 10px;
	top: 10px;
	bottom: 10px;
	width: auto;
	height: auto;
	z-index: 10;
	pointer-events: none;
}

.nav-list {
	overflow: hidden;
	position: absolute;
	top: 50%;
	height: 1px;
	background-color: #fff;
	border-radius: 30px;
	transition: 0.2s;
	width: 100%;
	opacity: 0;
	z-index: 1;
}

.nav-list-scroll {
	overflow-y: scroll;
	scrollbar-color: #458245 #714826;
	scrollbar-width: auto;
}

.nav-list-scroll::-webkit-scrollbar {
	width: 7px; /* ширина для вертикального скролла */
	background-color: #f7f4f4;
	border-radius: 20px;
}

.nav-list-scroll::-webkit-scrollbar-thumb {
	background-color: #ae8c8e;
	border-radius: 20px;
}

.nav-list-active {
	min-height: 250px;
	transform: translateY(-30px);
	z-index: 1;

	padding-top: 60px;
	padding-left: 10px;
	padding-bottom: 30px;
	padding-right: 10px;
	opacity: 1;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.nav-list-button {
	padding: 11px 10px;
	display: block;
	width: 100%;
	background: none;
	border: none;
	text-align: start;

	color: #000;
	font-family: 'Pelinka';
	font-size: 16px;
	font-weight: 700;
	border-radius: 20px;
}

.nav-list-button:hover {
	background-color: #f7f4f4;
}
</style>
