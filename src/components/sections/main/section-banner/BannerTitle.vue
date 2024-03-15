<script setup>
import SectionBannerBadges from './SectionBannerBadges.vue'
</script>

<template>
	<h2 class="banner-title">
		Преобразуй свою&nbsp;кожу
		<SectionBannerBadges class="banner-badges" />
	</h2>
</template>

<style scoped>
.banner-badges {
	position: absolute;
	right: 0;
	transform: translateX(65%);
	bottom: 0;
}

.banner-title {
	position: relative;
	font-size: 90px;
	padding-bottom: 25px;
}

@media (max-width: 1900px) {
	.banner-badges {
		width: 350px;
		transform: translateX(80%);
	}
}

@media (max-width: 1800px) {
	.banner-title {
		font-size: 80px;
	}

	.banner-badges {
		width: 350px;
		transform: none;
		left: 85%;
	}
}

@media (max-width: 1600px) {
	.banner-title {
		font-size: 80px;
	}

	.banner-badges {
		width: 300px;
	}
}

@media (max-width: 1500px) {
	.banner-title {
		font-size: 70px;
	}

	.banner-badges {
		width: 250px;
		right: 100px;
	}
}

@media (max-width: 1200px) {
	.banner-title {
		max-width: 600px;
	}

	.banner-badges {
		left: 85%;
		bottom: -10px;
		width: 140px;
	}

	.banner-title {
		text-align: left;
		font-size: 34px;
	}
}

@media (max-width: 1000px) {
	.banner-title {
		max-width: 300px;
	}
	.banner-badges {
		left: 75%;
		bottom: 0;
		transform: none;
	}
}

@media (max-width: 375px) {
	.banner-title {
		font-size: 30px;
	}

	.banner-badges {
		width: 120px;
		bottom: 16px;
		left: 200px;
	}
}
</style>
