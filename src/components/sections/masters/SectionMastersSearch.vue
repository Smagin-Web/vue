<script setup lang="ts">
import SearchIcon from './SearchIcon.vue'
</script>

<template>
	<div class="search-wrapper">
		<input class="search-input" type="text" placeholder="Все клиники" />
		<SearchIcon class="search-icon" />
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
</style>
