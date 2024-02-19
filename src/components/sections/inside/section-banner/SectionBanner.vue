<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import SectionBannerBadges from './SectionBannerBadges.vue'
</script>

<template>
	<section class="section-banner-about">
		<MContainer>
			<BreadCrumbs
				:items="['Главная', 'Концепты', 'Аппаратное лечение акне']"
			/>
		</MContainer>
		<div class="container-custom">
			<img class="banner" src="./banner.png" alt="" />
			<div class="content-info">
				<h2 class="heading">
					<span style="position: relative; z-index: 10">
						Вылечим кожу и&nbsp;избавим от&nbsp;высыпания на&nbsp;лице
					</span>
					<SectionBannerBadges class="badges" />
				</h2>
			</div>
		</div>
	</section>
</template>

<style scoped>
.container-custom {
	max-width: 1920px;
	padding: 0 46px;
	margin: 0 auto;
	display: flex;
	align-items: center;
}

.banner {
	width: 42.2%;
}

.heading {
	position: relative;
	color: black;
	font-family: 'Pelinka';
	font-weight: 700;
	font-size: 90px;
	padding-bottom: 25px;
	z-index: 10;
}

.badges {
	position: absolute;
	left: 650px;
	top: 46px;
	z-index: 0;
}

.text {
	color: #6d6364;
	font-family: 'BrisaSans', sans-serif;
	font-size: 24px;
	max-width: 650px;
}

@media (max-width: 1825px) {
	.heading {
		font-size: 82px;
	}

	.badges {
		left: 590px;
		top: 32px;
	}
}

@media (max-width: 1730px) {
	.heading {
		font-size: 70px;
	}

	.badges {
		left: 520px;
		top: 10px;
	}
}

@media (max-width: 1600px) {
	.heading {
		font-size: 60px;
	}

	.badges {
		left: 430px;
		top: 20px;
	}
}

@media (max-width: 1320px) {
	.heading {
		font-size: 50px;
	}

	.badges {
		left: 360px;
		top: 14px;
	}
}

@media (max-width: 1250px) {
	.banner {
		width: 45%;
	}
}

@media (max-width: 1150px) {
	.heading {
		font-size: 42px;
	}

	.badges {
		left: 300px;
		top: 10px;
	}
}

@media (max-width: 1000px) {
	.container-custom {
		overflow: hidden;
		flex-direction: column;
		align-items: center;

		max-width: 700px;

		padding-top: 40px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.banner {
		width: 100%;
	}
}

@media (max-width: 590px) {
	.section-banner-about {
		overflow: hidden;
	}
	.container-custom {
		padding-top: 0;
	}
	.banner {
		margin-top: -10px;
		width: 120%;
		max-width: 500px;
	}
	.heading {
		font-size: 38px;
	}

	.badges {
		left: 270px;
	}
}

@media (max-width: 490px) {
	.heading {
		font-size: 34px;
	}
}

@media (max-width: 450px) {
	.badges {
		left: 234px;
		top: 12px;
	}
}

@media (max-width: 400px) {
	.badges {
		top: 18px;
		left: 230px;
	}
}

@media (max-width: 380px) {
	.heading {
		font-size: 30px;
	}

	.badges {
		top: 12px;
		left: 205px;
	}
}
</style>
