<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
</script>

<template>
	<section class="section-banner">
		<MContainer>
			<img src="./photo.png" alt="" class="photo" />
		</MContainer>
	</section>
</template>

<style scoped>
.section-banner {
	padding-bottom: 160px;
}

.photo {
	max-width: 100%;
  height: auto;
}
</style>
