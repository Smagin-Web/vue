<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import IconLocation from './IconLocation.vue'
import IconList from './IconList.vue'
</script>

<template>
	<section class="section-contacts-card">
		<MContainer>
			<BreadCrumbs />
			<h1 class="h-xxl heading">Филиалы</h1>

			<div class="buttons">
				<button class="button">
					<IconLocation class="button-icon" />
					На карте
				</button>
				<button class="button-outline">
					<IconList class="button-icon" />
					Списком
				</button>
			</div>

			<div class="map-place">
				<div
					style="
						position: relative;
						overflow: hidden;
						width: calc(100% + 10px);
						height: 100%;
					"
				>
					<a
						href="https://yandex.ru/maps/org/moskovskiy_kreml/1023322799/?utm_medium=mapframe&utm_source=maps"
						style="color: #eee; font-size: 12px; position: absolute; top: 0px"
					>
						Московский Кремль
					</a>
					<a
						href="https://yandex.ru/maps/213/moscow/category/museum/184105894/?utm_medium=mapframe&utm_source=maps"
						style="color: #eee; font-size: 12px; position: absolute; top: 14px"
					>
						Музей в Москве
					</a>
					<a
						href="https://yandex.ru/maps/213/moscow/category/landmark_attraction/89683368508/?utm_medium=mapframe&utm_source=maps"
						style="color: #eee; font-size: 12px; position: absolute; top: 28px"
					>
						Достопримечательность в Москве
					</a>
					<iframe
						src="https://yandex.ru/map-widget/v1/org/moskovskiy_kreml/1023322799/?ll=37.618879%2C55.751426&z=14"
						width="100%"
						height="100%"
						frameborder="1"
						allowfullscreen="true"
						style="position: relative; display: block; margin: -2px"
					/>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-contacts-card {
	padding-bottom: 150px;
}

.heading {
	padding-bottom: 50px;
}

.buttons {
	display: flex;
	gap: 30px;
	padding-bottom: 70px;
}

.button,
.button-outline {
	white-space: nowrap;
	padding: 16px 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;

	background: none;
	border-radius: 100px;
	border: 2px solid #ae8c8e;

	color: #fff;
	font-family: 'BrisaSans';
	font-size: 24px;
}

.button {
	color: #fff;
	background-color: #ae8c8e;
}

.button-outline {
	background-color: transparent;
	color: #ae8c8e;
}

.map-place {
	border-radius: 50px;
	border: 20px solid #fff;
	overflow: hidden;
	height: 814px;
}

@media (max-width: 1000px) {
	.heading {
		padding-bottom: 20px;
	}
	.buttons {
		padding-bottom: 30px;
	}
	.button,
	.button-outline {
		padding: 10px 36px;
		gap: 4px;

		border-radius: 100px;
		font-size: 18px;
	}
	.button-icon {
		width: 30px;
		height: auto;
	}
}

@media (max-width: 500px) {
	.button,
	.button-outline {
		padding: 10px 24px;
	}
	.buttons {
		gap: 10px;
	}
}
</style>
