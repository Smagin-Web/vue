<script setup lang="ts"></script>

<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="Все клиники" />
		<svg
			class="search-icon"
			xmlns="http://www.w3.org/2000/svg"
			width="60"
			height="60"
			viewBox="0 0 60 60"
			fill="none"
		>
			<circle
				cx="30"
				cy="30"
				r="30"
				transform="rotate(-180 30 30)"
				fill="#AE8C8E"
			/>
			<path
				d="M30.2308 20.4006C30.58 20.4006 30.873 20.5189 31.1097 20.7556C31.3464 20.9923 31.4643 21.2849 31.4635 21.6333L31.4635 35.4093L37.4731 29.3996C37.7197 29.1531 38.0127 29.0298 38.3521 29.0298C38.6915 29.0298 38.9841 29.1531 39.2298 29.3996C39.4763 29.6462 39.5996 29.9338 39.5996 30.2625C39.5996 30.5913 39.4763 30.8789 39.2298 31.1255L31.0937 39.2616C30.9704 39.3849 30.8369 39.472 30.693 39.5229C30.5492 39.5739 30.3951 39.5998 30.2308 39.6006C30.0664 39.6006 29.907 39.5747 29.7524 39.5229C29.5979 39.4711 29.4697 39.384 29.3678 39.2616L21.2317 31.1255C20.9852 30.8789 20.8619 30.5913 20.8619 30.2625C20.8619 29.9338 20.9852 29.6462 21.2317 29.3996C21.4783 29.1531 21.7712 29.0298 22.1107 29.0298C22.4501 29.0298 22.7427 29.1531 22.9884 29.3996L28.998 35.4093L28.998 21.6333C28.998 21.2841 29.1164 20.9911 29.353 20.7544C29.5897 20.5177 29.8823 20.3998 30.2308 20.4006Z"
				fill="white"
			/>
		</svg>
	</div>
</template>

<style scoped>
.search {
	cursor: pointer;
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
