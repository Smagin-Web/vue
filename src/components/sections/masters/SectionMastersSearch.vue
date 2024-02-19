<script setup >
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
