<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import MapBadge from './MapBadge.vue'
import SelectRoad from './SelectRoad.vue'
</script>

<template>
	<section class="section-map">
		<MContainer>
			<h3 class="h-xl">Как добраться</h3>
			<div class="map">
				<div class="map-header">
					<h6 class="map-header-title">Ближайшие станции метро</h6>
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
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.4343035283673!2d37.61500057720295!3d55.75095739213286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1702030838589!5m2!1sru!2sru"
						width="600"
						height="450"
						style="border: 0; width: 100%; border-radius: 34px"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-map {
	padding-bottom: 150px;
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
}

.map-body {
	padding-left: 20px;
	padding-right: 20px;
}

.map-header-title {
	color: #000;
	font-size: 24px;
	padding-bottom: 6px;
}
</style>
