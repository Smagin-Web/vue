<script setup lang="ts">
import CardInfo from '@/components/card-elements/CardInfo.vue'
import CardLink from '@/components/card-elements/CardLink.vue'
import IconPlay from '@/components/icons/IconPlay.vue'
import BadgeMd from '@/components/ui/BadgeMd.vue'
import MainTag from '@/components/ui/MainTag.vue'
</script>

<template>
	<div class="card">
		<CardLink class="card-link" />
		<div class="card-left">
			<h5 class="h-md card-title">Skinova Pro</h5>
			<div class="badges">
				<BadgeMd type="1">AntiAcne Concept</BadgeMd>
				<BadgeMd type="2">AntiAcne Concept</BadgeMd>
				<BadgeMd type="3">AntiAcne Concept</BadgeMd>
			</div>
			<p class="text-sm card-text">
				Клеточная реконструкция высокочастотным ультразвуком. Единственная
				технология, регулирующая уровень кавеолина — структурного белка
				клеточной мембраны, который находится практически во всех клетках кожи.
			</p>

			<p class="card-title-mini">Показания</p>
			<div class="card-tags">
				<MainTag>Морщины</MainTag>
				<MainTag>Дряблость кожи</MainTag>
				<MainTag>Угревая сыпь, акне</MainTag>
				<MainTag>Атопический дерматит</MainTag>
				<MainTag>Экзема</MainTag>
				<MainTag>Трофические язвы</MainTag>
				<MainTag>Келоиды</MainTag>
				<MainTag>Волчанка</MainTag>
				<MainTag>Постакне</MainTag>
			</div>
		</div>
		<div class="card-right">
			<div class="card-photo-wrapper">
				<IconPlay class="card-photo-icon" />
				<img src="./card-photo.png" alt="" class="card-photo" />
			</div>
			<CardInfo title="Время процедуры" icon="time" text="60 минут" />
			<CardInfo title="Стоимость" icon="pay" text="от 4 500₽" />
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;
	border-radius: 50px;
	background: #fff;
	padding: 40px;
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

.card-link {
	position: absolute;
	bottom: 40px;
	left: 40px;
}

.card-left {
	max-width: 1000px;
}

.card-title {
	padding-bottom: 12px;
}

.badges {
	display: flex;
	gap: 10px;
	padding-bottom: 22px;
}

.card-text {
	padding-bottom: 20px;
}

.card-title-mini {
	color: #6d6364;
	font-size: 16px;
	padding-bottom: 10px;
}

.card-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}

.card-photo-wrapper {
	cursor: pointer;
	position: relative;
	border-radius: 36px;
	margin-bottom: 30px;
}

.card-photo-wrapper:after {
	display: block;
	content: '';
	position: absolute;
	left: -7px;
	right: -7px;
	bottom: -7px;
	top: -7px;

	border: 0 solid #fff;
	border-radius: 36px;
	transition: 0.2s;
}

.card-photo-wrapper:hover::after {
	border-width: 14px;
}

.card-photo {
	display: block;
	height: auto;
}

.card-photo-icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	opacity: 0;
	transition: 0.2s;
}

.card-photo-wrapper:hover .card-photo-icon {
	opacity: 1;
}

@media (max-width: 1300px) {
	.card-link-icon {
		width: 100px;
		height: auto;
	}
	.card-photo-wrapper {
		width: 350px;
	}
	.card-photo {
		width: 100%;
		height: auto;
	}
	.card-tags {
		gap: 10px;
	}
	.badges {
		flex-wrap: wrap;
	}
}

@media (max-width: 1200px) {
	.card {
		padding: 20px;
		border-radius: 20px;
	}
	.card-left {
		padding-bottom: 80px;
	}
	.card-link {
		bottom: 20px;
		left: 20px;
	}
}

@media (max-width: 800px) {
	.card {
		display: block;
		padding-bottom: 80px;
	}
	.card-left {
		padding-bottom: 20px;
	}
}

@media (max-width: 430px) {
	.card-right {
		width: 100%;
	}
	.card-photo-wrapper {
		width: 100%;
	}
	.card-photo {
		width: 100%;
	}
}
</style>
