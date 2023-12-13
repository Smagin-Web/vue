<script setup lang="ts">
import MButtonOutline from '@/components/buttons/MButtonOutline.vue'
import MButton from '@/components/buttons/MButton.vue'

const props = defineProps([
	'title',
	'subtitle',
	'p1',
	'p2',
	'badgeNumber',
	'badgeName',
	'badgeColor',
	'iconSrc',
	'iconBigSrc'
])

const getImageUrl = () => {
	return new URL(
		`${props.iconSrc || props.iconBigSrc}`,
		import.meta.url
	).toString()
}
</script>

<template>
	<div class="card">
		<div class="card-info-content">
			<h3 class="h-l title" v-html="props.title" />
			<h5 class="text-lg subtitle" v-html="props.subtitle" />
			<p class="text-sm card-text">
				<span v-html="props.p1" />
				<span v-html="props.p2" />
			</p>

			<div class="buttons">
				<div class="card-image-wrapper">
					<img src="./slider.png" alt="" class="card-image" />
					<img v-if="props.iconSrc" :src="getImageUrl()" class="svg-picture" />
					<img
						v-if="props.iconBigSrc"
						:src="getImageUrl()"
						class="svg-picture-head"
					/>
				</div>

				<MButton class="first-button">Записаться на приём</MButton>
				<MButtonOutline>Задать вопрос</MButtonOutline>
			</div>
		</div>

		<div class="card-badges">
			<div
				class="card-badge"
				:style="`background: ${props.badgeColor}`"
				v-html="props.badgeNumber"
			/>
			<div
				class="card-badge"
				:style="`background: ${props.badgeColor}`"
				v-html="props.badgeName"
			/>
		</div>
	</div>
</template>

<style scoped>
.card {
	position: relative;

	padding: 80px;
	padding-top: 90px;

	border-radius: 100px;
	background: #fff;
	height: 650px;
	z-index: 30;
}
.card {
	position: relative;

	padding: 80px;
	padding-top: 90px;

	border-radius: 100px;
	background: #fff;
	height: 650px;
	z-index: 30;
}
.svg-picture {
	display: block;
	position: absolute;
	top: 18%;
	right: 23.3%;
	height: 74%;
	width: auto;
}

.card-image-wrapper {
	position: absolute;
	right: 5%;
	bottom: 0;
	width: 42%;
}

.card-image {
	display: block;
	width: 100%;
	height: auto;
}
.svg-picture-head {
	display: block;
	position: absolute;
	top: 0;
	width: 103.2%;
	height: auto;
}
.card-info-content {
	max-width: 880px;
}

.title {
	padding-bottom: 40px;
}

.subtitle {
	padding-bottom: 30px;
}

.card-text {
	display: grid;
	gap: 26px;
	padding-bottom: 70px;
}

.buttons {
	display: flex;
	gap: 20px;
}

.card-badges {
	position: absolute;
	display: flex;
	top: 0;
	left: 80px;
	transform: translateY(-50%);
}

.card-badge {
	color: #fff;
	font-family: 'UABrand';
	font-size: 48px;
	font-weight: 700;

	border-radius: 20px;
	padding: 0 22px 4px;
	z-index: 20;
}

@media (max-width: 1600px) {
	.card-info-content {
		max-width: 900px;
	}

	.card-image-wrapper {
		max-width: 500px;
	}
}

@media (max-width: 1500px) {
	.card-info-content {
		max-width: 750px;
	}
	.card-badge {
		font-size: 30px;
		border-radius: 14px;
	}
}

@media (max-width: 1300px) {
	.card-info-content {
		max-width: 550px;
	}
	.buttons {
		display: grid;
		max-width: 400px;
	}
	.card-text {
		padding-bottom: 40px;
	}
	.card {
		padding: 50px;
		border-radius: 60px;
	}
	.title {
		padding-bottom: 22px;
	}
	.subtitle {
		padding-bottom: 20px;
	}
	.card-text {
		gap: 14px;
	}
}

@media (max-width: 1150px) {
	.card-image-wrapper {
		max-width: 350px;
	}
}

@media (max-width: 1000px) {
	.card-badge {
		font-size: 20px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 10px;
	}
	.card {
		padding: 50px 12px 32px;
		border-radius: 40px;
		max-height: 100%;
		height: auto;
	}
	.title {
		padding-bottom: 18px;
	}
	.subtitle {
		padding-bottom: 25px;
	}

	.card-text {
		font-size: 16px;

		padding-bottom: 0;
	}

	.buttons {
		display: grid;
		/* grid-template-columns: max-content; */
		justify-content: center;
		justify-items: center;
		gap: 0;
	}

	.buttons button {
		width: 320px;
	}

	.first-button {
		margin-bottom: 20px;
	}

	.card-image-wrapper {
		margin-top: 20px;
		position: relative;
		width: 250px;
	}

	.card-info-content {
		max-width: 100%;
	}
}
</style>
