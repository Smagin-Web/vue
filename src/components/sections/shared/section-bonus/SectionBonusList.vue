<script setup lang="ts">
import IconCheck from './IconCheck.vue'
</script>

<template>
	<ul class="list">
		<li class="list-item">
			<span class="list-icon">
				<IconCheck />
			</span>
			<h6 class="list-text text-lg">
				Любой номинал сертификата при покупке на&nbsp;сайте
			</h6>
		</li>

		<li class="list-item">
			<span class="list-icon">
				<IconCheck />
			</span>
			<h6 class="list-text text-lg">Сертификат действует 6&nbsp;месяцев</h6>
		</li>

		<li class="list-item">
			<span class="list-icon">
				<IconCheck />
			</span>
			<h6 class="list-text text-lg">
				Можно использовать на&nbsp;любую услугу или товар
			</h6>
		</li>
	</ul>
</template>

<style scoped>
.list {
	list-style-type: none;
	display: grid;
	gap: 30px;
	padding-left: 0;
	max-width: 700px;
}

.list-item {
	display: flex;
	align-items: center;
	gap: 30px;
}

.list-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: #6d6364;
	flex: none;
}

.list-text {
	height: 28px;
}

@media (max-width: 1400px) {
	.list-item {
		gap: 16px;
	}
	.list-icon {
		width: 38px;
		height: 38px;
	}
	.list-icon svg {
		width: 14px;
		height: auto;
	}
}

@media (max-width: 850px) {
	.list-icon {
		width: 28px;
		height: 28px;
	}
	.list-icon svg {
		width: 12px;
	}

	.list-text {
		max-width: auto;
		height: auto;
	}

	.list-item {
		align-items: start;
	}
}

@media (max-width: 450px) {
	.list-item {
		gap: 8px;
	}
}
</style>
