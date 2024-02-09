<script setup lang="ts">
import MSearchIcon from './MSearchIcon.vue'
</script>

<template>
	<div class="search-wrapper">
		<input class="search-input" type="text" placeholder="Все клиники" />
		<MSearchIcon class="search-icon" />

		<div class="search-input-list">
			<div class="search-input-list-item text-sm">text</div>
			<div class="search-input-list-item text-sm">text</div>
		</div>
	</div>
</template>

<style scoped>
.search-wrapper {
	position: relative;
	border-radius: 100px;
	background: #fff;
	max-width: 550px;
}

.search-input {
	position: relative;
	z-index: 20;
	width: 100%;
	border: none;
	outline: none;
	border-radius: 100px;
	padding: 26px 140px 26px 40px;
}

.search-input,
.search-input::placeholder {
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	transition: 0.1s;
}

.search-input:focus::placeholder,
.search-input:hover::placeholder {
	opacity: 0.5;
}

.search-icon {
	z-index: 20;
	cursor: pointer;
	position: absolute;
	right: 10px;
	bottom: 10px;
	top: 10px;
	width: auto;
	transition: 0.1s;
}

.search-icon:hover {
	opacity: 0.8;
}

.search-input-list {
	width: 100%;
	padding: 80px 5px 0;
	border-radius: 40px;
	position: absolute;
	top: 0;
	background-color: #fff;
	z-index: 10;
}

.search-input-list-item {
	padding: 22px 34px;
	color: #6d6364;
	border-radius: 100px;
}

.search-input-list-item:hover {
background-color: #EDE4DA;
}

@media (max-width: 1000px) {
	.search-input,
	.search-input::placeholder {
		font-size: 16px;
	}
	.search-input {
		padding: 18px 90px 18px 26px;
	}
	.search-icon {
		top: 8px;
		right: 8px;
		height: calc(100% - 16px);
		width: auto;
	}
}
</style>
