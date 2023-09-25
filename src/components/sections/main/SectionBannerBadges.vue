<script setup lang="ts">
import PictureBannerBadge1 from '@/components/icons/PictureBannerBadge1.vue'
import PictureBannerBadge2 from '@/components/icons/PictureBannerBadge2.vue'
</script>

<template>
	<div class="badge-group">
		<PictureBannerBadge1 class="badge-1" />
		<PictureBannerBadge2 class="badge-2" />
	</div>
</template>

<style scoped>
.badge-group {
	overflow: visible;
	position: absolute;
}

.badge-1,
.badge-2 {
	position: absolute;
	height: 70px;
	width: auto;
}

.badge-1 {
	transform: rotate(-13deg);
	height: 80px;
	z-index: 10;
	top: 0;
	left: 20px;
}

.badge-2 {
	transform: rotate(7deg);
	height: 70px;
	z-index: 0;
	top: 50px;
}

@media screen and (max-width: 1500px) {
	.badge-one {
		font-size: 32px;
		line-height: 1;
		top: 16px;
		left: 60px;
		border-radius: 15px;
	}

	.badge-two {
		font-size: 32px;
		line-height: 1;
		border-radius: 15px;
	}
}

@media screen and (max-width: 1200px) {
}
</style>
