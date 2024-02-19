<script  setup>
import SectionOtherCard from './SectionOtherCard.vue'
</script>

<template>
	<div>
		<div class="wrapper-cards">
			<div class="row">
				<SectionOtherCard :iconFilename="'ParallaxPhoto5.png'" />
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto1.png'"
					class="card-absolute"
					style="top: 50%; right: 100%"
				/>
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto8.png'"
					class="card-absolute"
					style="top: 50%; left: 100%"
				/>
			</div>
			<div class="row">
				<SectionOtherCard :iconFilename="'ParallaxPhoto2.png'" />
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto7.png'"
					class="card-absolute"
					style="top: 50%; right: 110%"
				/>
				<SectionOtherCard
					:iconFilename="'ParallaxPhoto6.png'"
					class="card-absolute"
					style="top: 50%; left: 110%"
				/>
			</div>
			<div class="row">
				<SectionOtherCard :iconFilename="'ParallaxPhoto3.png'" />
			</div>
		</div>
	</div>
</template>

<style>
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
</style>
