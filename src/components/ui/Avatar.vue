<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="avatar-wrapper">
		<a href="#" class="avatar-link" />
		<div class="avatar">
			<img src="./AvatarImg.png" alt="" class="avatar-img" />

			<IconPlay class="avatar-play-icon" />
		</div>
	</div>
</template>

<script lang="ts">
import IconPlay from '../icons/IconPlay.vue'

export default {
	props: {
		src: {
			type: String,
			default: null
		}
	},
	components: { IconPlay }
}
</script>

<style scoped>
.avatar-wrapper {
	position: relative;
}

.avatar-link {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	border-radius: 50%;
	z-index: 30;
}
.avatar {
	width: 260px;
	height: 260px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	cursor: pointer;
	z-index: 20;
}

.avatar-wrapper:hover .avatar-img {
	transform: scale(0.98);
}
.avatar-play-icon {
	position: absolute;
	left: 50%;
	bottom: 42px;
	transform: translateX(-50%);
	opacity: 0;
	transition: 0.1s;
}
.avatar-wrapper:hover .avatar-play-icon {
	opacity: 1;
}

.avatar-img {
	border-radius: 50%;
	width: 100%;
	height: 100%;
	transition: 0.2s;
}

@media (max-width: 1000px) {
	.avatar {
		width: 150px;
		height: 150px;
	}
}
</style>
