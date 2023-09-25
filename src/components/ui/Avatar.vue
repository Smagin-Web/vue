<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="avatar">
		<img src="../sections/main/Avatar2.png" alt="" class="avatar-img" />
	</div>
</template>

<script lang="ts">
export default {
	props: {
		src: {
			type: String,
			default: null
		}
	}
}
</script>

<style scoped>
.avatar {
	width: 260px;
	height: 260px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}

.avatar-img {
	border-radius: 50%;
	width: 100%;
	height: 100%;
}
</style>
