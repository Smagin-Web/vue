<script setup>
import MContainer from '@/components/shared/MContainer.vue'
import MapBadge from './MapBadge.vue'
// import SelectRoad from './SelectRoad.vue'
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
						<!-- <SelectRoad /> -->
					</div>
				</div>
				<div class="map-body">
					<iframe
						src="https://yandex.com/map-widget/v1/?um=constructor%3Aa63de5d28596bb7d89b600147a0b2ef376c90787bc240b5b12a03a754f7d10fb&amp;source=constructor"
						width="100%"
						height="780px"
						frameborder="0"
						style="
							border: none;
							position: relative;
							display: block;
							margin: -2px;
							border-radius: 50px;
						"
					/>
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
