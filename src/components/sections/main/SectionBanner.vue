<script setup lang="ts">
import SectionBannerBlock from './SectionBannerBlock.vue'
import MBadge from '@/components/ui/MBadge.vue'
</script>

<template>
	<section class="section-banner">
		<div class="container-custom">
			<div class="content">
				<SectionBannerBlock class="banner" />
				<div class="content-info">
					<div class="content-heading">
						<h2 class="content-heading-text">
							Преобразуй
							<br />
							свою&nbsp;кожу
							<div class="content-heading-badges">
								<MBadge class="content-heading-badge-one">без&nbsp;боли</MBadge>
								<MBadge class="content-heading-badge-two">
									без&nbsp;стресса
								</MBadge>
							</div>
						</h2>
					</div>
					<p class="text">
						Наслаждайся уютной обстановкой и&nbsp;профессиональной заботой
						в&nbsp;нашем Центре аппаратной косметологии.
						<br />
						<br />
						Забудь о&nbsp;временных результатах и&nbsp;начни путь
						к&nbsp;долгосрочному здоровью кожи уже сегодня!
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.container-custom {
	max-width: 1920px;
	padding: 0 46px;
}
.section-banner {
	padding-top: 160px;
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

.content-heading {
	position: relative;

	padding-bottom: 25px;
}
.content-heading-text {
	color: black;
	font-family: 'Pelinka';
	font-weight: 700;
	font-size: 90px;
	padding-bottom: 25px;
	position: relative;
}

.content-info {
	padding-right: 180px;
}

.content-heading-badges {
	position: absolute;
	right: 80px;
	top: 38px;
}

.content-heading-badge-one {
	position: absolute;
	left: 110px;
	top: 0;
	transform: rotate(-13deg);
	background-color: #98cbfa;
	z-index: 20;

	border-radius: 20px;
	padding: 10px 20px 12px;
}

.content-heading-badge-two {
	position: absolute;
	left: 0;
	top: 80px;
	transform: rotate(7deg);

	border-radius: 20px;
	padding: 10px 20px 12px;
}

.text {
	color: #6d6364;
	font-family: 'BrisaSans', sans-serif;
	font-size: 24px;
	max-width: 650px;
}

@media screen and (max-width: 1500px) {
	.content-heading-text {
		font-size: 70px;
	}

	.content-heading-badges {
		right: 100px;
		top: 38px;
	}

	.content-heading-badge-one {
		font-size: 32px;
		line-height: 1;
		top: 16px;
		left: 60px;
	}

	.content-heading-badge-two {
		font-size: 32px;
		line-height: 1;
	}
}

@media screen and (max-width: 1200px) {
	.content {
		grid-template-columns: 1fr;
		justify-items: center;
	}

	.content-info {
		padding-right: 0;
	}

	.content-heading {
		display: flex;
		justify-content: center;
	}

	.content-heading-text {
		text-align: center;
	}

	.content-heading-badges {
		right: 70px;
		top: 30px;
	}

	.banner {
		width: 100%;
		max-width: 500px;
	}

	.text {
		max-width: 100%;
		text-align: center;
	}
}
</style>
