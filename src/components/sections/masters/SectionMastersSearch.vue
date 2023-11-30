<script setup lang="ts">
import SearchIcon from './SearchIcon.vue'
</script>

<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="Все клиники" />
		<SearchIcon class="search-icon" />
	</div>
</template>

<style scoped>
.search {
	cursor: pointer;
	margin-bottom: 100px;
	position: relative;
	border-radius: 100px;
	background: #fff;
	padding: 26px 40px;
	padding-right: 150px;
	max-width: 550px;
}

.search-input {
	border: none;
	outline: none;
	height: 26px;
	line-height: 26px;
}

.search-icon {
	position: absolute;
	right: 10px;
	bottom: 10px;
	top: 10px;
	width: auto;
}
</style>
