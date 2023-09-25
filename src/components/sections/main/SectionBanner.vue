<script setup lang="ts">
import SectionBannerBlock from './SectionBannerBlock.vue'
import SectionBannerText from './SectionBannerText.vue'
</script>

<template>
	<section class="section-banner">
		<div class="container-custom">
			<div class="content">
				<SectionBannerBlock class="banner" />
				<div class="content-info">
					<h2 class="content-heading-text">
						Преобразуй
						<br />
						свою&nbsp;кожу
						<!-- <SectionBannerBadges class="banner-badges" /> -->
					</h2>
					<SectionBannerText />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.banner-badges {
	position: absolute;
	right: 80px;
	top: 38px;
}
.container-custom {
	max-width: 1920px;
	padding: 0 46px;
}
.section-banner {
	padding-top: 170px;
}
.content {
	gap: 50px;
	display: grid;
	grid-template-columns: minmax(0, 732px) max-content;
	align-items: center;
}

.content-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding-bottom: 80px;
	padding-right: 280px;
}

.content-heading-text {
	position: relative;
	color: black;
	font-family: 'Pelinka';
	font-weight: 700;
	font-size: 90px;
	padding-bottom: 25px;
	position: relative;
}

.content-info {
	padding-right: 300px;
}
.text {
	color: #6d6364;
	font-family: 'BrisaSans', sans-serif;
	font-size: 24px;
	max-width: 650px;
}

@media screen and (max-width: 1600px) {
	.content-heading-text {
		font-size: 80px;
	}

	.content-info {
		padding-right: 280px;
	}
}

@media screen and (max-width: 1500px) {
	.content-info {
		padding-right: 120px;
	}
	.content-heading-text {
		font-size: 70px;
	}

	.banner-badges {
		right: 100px;
	}
}

@media screen and (max-width: 1200px) {
	.content {
		grid-template-columns: 1fr;
		justify-items: start;
	}

	.content-info {
		padding-right: 0;
		justify-content: start;
		padding-bottom: 0;
	}

	.content-heading-text {
		text-align: left;
		font-size: 34px;
	}

	.banner {
		width: 100%;
		max-width: 350px;
	}

	.text {
		max-width: 100%;
		text-align: center;
	}
}
</style>
