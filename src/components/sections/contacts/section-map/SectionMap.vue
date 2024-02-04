<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import MapBadge from './MapBadge.vue'
import SelectRoad from './SelectRoad.vue'

// import YmapPlugin from 'vue-yandex-maps'
// import Vue from 'vue'

// // const settings = {
// // 	apiKey: '',
// // 	lang: 'ru_RU',
// // 	coordorder: 'latlong',
// // 	enterprise: false,
// // 	version: '2.1'
// // }
// // Vue.use(YmapPlugin, settings)
</script>

<template>
	<section class="section-map">
		<MContainer>
			<h3 class="h-xl">Как добраться</h3>
			<div class="map">
				<div class="map-header">
					<h6 class="h-sm-ultra map-header-title">Ближайшие станции метро</h6>
					<div class="map-header-flex">
						<div class="map-header-badges">
							<MapBadge number="8">Авиамоторная</MapBadge>
							<MapBadge number="8">Площадь Ильича</MapBadge>
							<MapBadge number="11" color="#7ECECE">Лефортово</MapBadge>
							<MapBadge number="10" color="#BED968">Римская</MapBadge>
						</div>
						<SelectRoad />
					</div>
				</div>
				<div class="map-body">
					<div
						ref="map"
						style="
							border: none;
							position: relative;
							display: block;
							margin: -2px;
							border-radius: 50px;
						"
					/>
					<!-- <iframe
						class="ymaps-map"
						src="https://yandex.ru/map-widget/v1/org/moskovskiy_kreml/1023322799/?ll=37.618879%2C55.751426&z=14"
						width="100%"
						height="780px"
						allowfullscreen="true"
						disableDragging
						style="
							border: none;
							position: relative;
							display: block;
							margin: -2px;
							border-radius: 50px;
						"
					/> -->
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-map {
	overflow: visible;
	padding-bottom: 150px;
}

.ymaps-map {
	-ms-touch-action: auto !important;
	touch-action: auto !important;
}

.map {
	padding-top: 40px;
	padding-bottom: 16px;
	border-radius: 50px;
	background: #fff;
}

.map-header {
	padding-left: 40px;
	padding-right: 40px;
}

.map-header-flex {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 20px;
}

.map-header-badges {
	padding-top: 32px;
	padding-bottom: 32px;
	display: flex;
	gap: 30px;
	flex-wrap: wrap;
}

.map-body {
	padding-left: 20px;
	padding-right: 20px;
}

.map-header-title {
	padding-bottom: 6px;
}

@media (max-width: 1750px) {
	.map-header-flex {
		display: grid;
	}
}
@media (max-width: 1000px) {
	.section-map {
		padding-bottom: 50px;
	}
}

@media (max-width: 800px) {
	.map {
		border-radius: 24px;
	}
	.map-header {
		padding-left: 20px;
		padding-right: 28px;
	}
}
</style>
