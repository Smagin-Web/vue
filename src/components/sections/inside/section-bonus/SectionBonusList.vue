<script setup lang="ts">
import IconCheck from './IconCheck.vue'
</script>

<template>
	<ul class="list">
		<li class="list-item">
			<span class="list-icon">
				<IconCheck />
			</span>
			<h6 class="list-text">
				Номинал при покупке на&nbsp;сайте:
				от&nbsp;5&nbsp;000₽&nbsp;до&nbsp;50&nbsp;000₽
			</h6>
		</li>

		<li class="list-item">
			<span class="list-icon">
				<IconCheck />
			</span>
			<h6 class="list-text">Сертификат действует бессрочно</h6>
		</li>

		<li class="list-item">
			<span class="list-icon">
				<IconCheck />
			</span>
			<h6 class="list-text">Можно использовать на любую услугу</h6>
		</li>
	</ul>
</template>

<style scoped>
.list {
	list-style-type: none;
	display: grid;
	gap: 30px;
	padding-left: 0;
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
	color: #6d6364;
	font-size: 24px;
	height: 28px;
	max-width: 700px;
}

@media (max-width: 1380px) {
	.list-item {
		gap: 16px;
	}
	.list-text {
		font-size: 20px;
		max-width: 550px;
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

@media (max-width: 1040px) {
	.list-text {
		max-width: 400px;
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
    font-size: 18px;
	}

  .list-item {
    align-items: start;
  }
}


@media (max-width: 450px) {
  .list-text {
    font-size: 16px;
  }
  .list-item {
    gap: 8px
  }
}
</style>
