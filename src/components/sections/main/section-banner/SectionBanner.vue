<script setup>
import BannerTitle from './BannerTitle.vue'
import SectionBannerBlock from './SectionBannerBlock.vue'
import SectionBannerText from './SectionBannerText.vue'
</script>

<template>
	<section class="section-banner">
		<div class="container-custom">
			<div class="content">
				<SectionBannerBlock class="banner" />
				<div class="content-info">
					<BannerTitle />
					<SectionBannerText />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.container-custom {
	max-width: 1920px;
	padding: 0 46px;
	margin: 0 auto;
}

.section-banner {
	padding-top: 100px;
	overflow: visible;
}

.content {
	display: flex;
	gap: 50px;
	align-items: center;
}

.banner {
	flex-shrink: 0;
}

.content-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding-bottom: 80px;
	padding-right: 280px;
}

.text {
	color: #6d6364;
	font-family: 'BrisaSans', sans-serif;
	font-size: 24px;
	max-width: 650px;
}

@media (max-width: 1500px) {
	.banner-badges {
		left: calc(100% - 100px);
		bottom: 40px;
		width: 250px;
	}
}

@media (max-width: 1200px) {
	.content {
		grid-template-columns: 1fr;
		justify-items: start;
	}

	.content-info {
		padding-right: 0;
		justify-content: start;
		padding-bottom: 0;
	}

	.banner {
		width: 100%;
		max-width: 350px;
	}

	.text {
		max-width: 100%;
		text-align: center;
	}
	.container-custom {
		padding: 0 14px;
	}
}

@media (max-width: 1000px) {
	.section-banner {
		padding-top: 50px;
	}
}

@media (max-width: 800px) {
	.content {
		display: grid;
		max-width: 450px;
	}
}

@media (max-width: 400px) {
	.section-banner {
		overflow: hidden;
		padding-top: 65px;
	}
}

@media (max-width: 375px) {
	.content-heading-text {
		font-size: 30px;
	}
	.banner-badges {
		width: 120px;
		bottom: 24px;
		left: 200px;
	}
}
</style>
