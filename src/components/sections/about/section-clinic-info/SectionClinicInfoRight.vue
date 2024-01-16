<script setup lang="ts">
import IconEmblem from './IconEmblem.vue'
import IconArrow from './IconArrow.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
</script>

<template>
	<div class="content-clinic-right">
		<div class="content-photo-wrapper">
			<img src="./photo.png" alt="" class="content-photo" />
			<IconPlay class="content-photo-icon" />
		</div>
		<IconEmblem class="content-emblem" />
		<IconArrow class="content-arrow" />
	</div>
</template>

<style scoped>
.content-clinic-right {
	padding-top: 30px;
	position: relative;
	display: flex;
	align-items: start;
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

.content-photo-wrapper::after {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: 0.1s;
	border-radius: 38px;
	border: 6px solid #f4eee8;
}

.content-photo-wrapper:hover::after {
	border: 15px solid #f4eee8;
}

.content-photo {
	max-width: 100%;
}

.content-photo-icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	transition: 0.2s;
}

.content-photo-wrapper:hover .content-photo-icon {
	opacity: 0.8;
}
</style>
