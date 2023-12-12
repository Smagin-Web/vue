<script setup lang="ts">
import IconEmblem from './IconEmblem.vue'
import IconArrow from './IconArrow.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
	<div class="content">
		<div class="content-photo-wrapper">
			<img src="./photo.png" alt="" class="content-photo" />
			<IconPlay class="content-photo-icon" />
		</div>
		<IconEmblem class="content-emblem" />
		<IconArrow class="content-arrow" />
	</div>
</template>

<style scoped>
.content {
	position: relative;
}

.content-emblem {
	width: 49%;
	height: auto;
	position: absolute;
	bottom: -24%;
	left: -33%;
}

.content-arrow {
	width: 30%;
	height: auto;
	position: absolute;
	bottom: -17%;
	left: 8%;
}

.content-photo-wrapper {
	position: relative;
	display: flex;
	align-items: start;
	cursor: pointer;
}

.content-photo {
	margin-top: 32px;
	max-width: 100%;
}

.content-photo-icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	opacity: 0;
	transition: 0.1s;
}

.content-photo-wrapper:hover .content-photo-icon {
	opacity: 1;
}
</style>
