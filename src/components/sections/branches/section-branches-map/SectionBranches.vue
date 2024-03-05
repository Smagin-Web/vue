<script setup>
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import IconLocation from './IconLocation.vue'
import IconList from './IconList.vue'
import { ref } from 'vue'
// import YandexMap from '../../../YandexMap.vue'

const mapWrapper = ref('')

const onMapScroll = e => {
	e.preventDefault()
}
</script>

<template>
	<section class="section-branches">
		<MContainer>
			<BreadCrumbs :items="['Главная', 'Филиалы']" />
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
					

					<div class="map-wrapper" ref="mapWrapper">
						<!-- <YandexMap /> -->
						<iframe
							src="https://yandex.com/map-widget/v1/?um=constructor%3Aa63de5d28596bb7d89b600147a0b2ef376c90787bc240b5b12a03a754f7d10fb&amp;source=constructor"
							width="100%"
							height="100%"
							frameborder="1"
							allowfullscreen="true"
							style="position: relative; display: block; margin: -2px"
						/>
					</div>
				</div>
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-branches {
	padding-bottom: 150px;
}

.map-wrapper {
	height: 100%;
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
	.section-branches {
		padding-bottom: 80px;
	}
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
