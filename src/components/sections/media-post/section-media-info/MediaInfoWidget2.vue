<script setup >
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
	gap: 38px;
	border-radius: 50px;
	background: #ede4da;
}

@media (max-width: 1000px) {
	.widget {
		padding: 14px;
		border-radius: 28px;
		gap: 10px;
	}
}
</style>
