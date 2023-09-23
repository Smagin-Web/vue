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
	width: 360px;
	overflow: visible;
	position: absolute;
	height: 200px;
}

.badge-1,
.badge-2 {
	position: absolute;
	height: 100%;
}

.badge-1 {
	transform: rotate(-13deg);
}

.badge-2 {
	transform: rotate(7deg);
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
