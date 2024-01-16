<script setup lang="ts">
import IconInfo from './IconInfo.vue'
</script>

<template>
	<div class="widget">
		<IconInfo />
		<p class="text-sm">
			В&nbsp;разные периоды жизни, будь&nbsp;то подростковый возраст или зрелые
			годы, люди сталкиваются с&nbsp;проблемой прыщей на&nbsp;лице. Это
			хроническое воспалительное заболевание кожи, проявляющееся в&nbsp;виде
			различных элементов, таких как черные точки, белые головки, папулы,
			пустулы, узлы и&nbsp;кисты.
		</p>
	</div>
</template>

<style scoped>
.widget {
	padding: 20px 40px;
	display: grid;
	grid-template-columns: 40px 1fr;
	align-items: center;
	gap: 38px;
	border-radius: 50px;
	background: #fff;
  margin-bottom: 50px;
}
</style>
