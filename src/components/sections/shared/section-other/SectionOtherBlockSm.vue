<script  setup>
import SectionOtherCard from './SectionOtherCard.vue'
</script>

<template>
	<div>
		<div class="wrapper-cards">
			<div class="row">
				<SectionOtherCard :iconFilename="'ParallaxPhoto5.png'" class="card-parallax" />
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto1.png'"
					class="card-parallax card-absolute"
					style="top: 50%; right: 100%"
				/>
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto8.png'"
					class="card-parallax card-absolute"
					style="top: 50%; left: 100%"
				/>
			</div>
			<div class="row">
				<SectionOtherCard :iconFilename="'ParallaxPhoto2.png'" class="card-parallax" />
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto7.png'"
					class="card-parallax card-absolute"
					style="top: 50%; right: 110%"
				/>
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto6.png'"
					class="card-parallax card-absolute"
					style="top: 50%; left: 110%"
				/>
			</div>
			<div class="row">
				<SectionOtherCard :iconFilename="'ParallaxPhoto3.png'" class="card-parallax" />
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper-cards {
	display: grid;
	gap: 42px;
	justify-content: center;
	padding: 32px 0;
}

.row {
	position: relative;
	display: flex;
	justify-content: center;
}

.card-absolute {
	position: absolute;
}

.card-parallax {
	height: 160px;
}

@media (max-width: 1200px) {
	.card-parallax {
		height: 140px;
	}
}

@media (max-width: 1000px) {
	.card-parallax {
		height: 115px;
	}
}

@media (max-width: 600px) {
	.wrapper-cards {
		padding-left: 300px;
	}
}
</style>
