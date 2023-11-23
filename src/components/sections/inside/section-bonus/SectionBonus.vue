<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionBonusList from './SectionBonusList.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import SectionBonusPicture from './SectionBonusPicture.vue'
</script>

<template>
	<section class="section-bonus">
		<MContainer>
			<div class="card">
				<h6 class="card-badge">Подарочный сертификат</h6>
				<div class="card-content">
					<h5 class="card-heading">
						Сделайте приятный сюрприз близкому человеку
					</h5>
					<SectionBonusList class="card-list" />
					<MButtonBig>Купить сертификат</MButtonBig>
				</div>
				<SectionBonusPicture class="card-picture" />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-bonus {
	padding-bottom: 160px;
}

.card {
	position: relative;

	padding: 80px;
	padding-top: 86px;
	border-radius: 100px;
	background: #ede4da;
}

.card-content {
	max-width: 816px;
}

.card-heading {
	color: #000;
	font-size: 42px;
	padding-bottom: 40px;
}

.card-list {
	padding-bottom: 50px;
}

.card-picture {
	position: absolute;
	bottom: 0;
	right: 60px;
	display: block;
	height: 116%;
	width: auto;
}

.card-badge {
	position: absolute;
	left: 85px;
	top: 0;
	transform: translateY(-50%);

	padding: 0 20px 6px;

	border-radius: 20px;
	background: #b2977b;

	color: #fff;

	font-family: 'UABrand';
	font-size: 48px;
	font-weight: 700;
}

@media (max-width: 1650px) {
	.card-heading {
		font-size: 38px;
	}
	.card-badge {
		font-size: 38px;
		border-radius: 16px;
	}

	.card-picture {
		height: 80%;
	}
}

@media (max-width: 1380px) {
	.card {
		border-radius: 48px;
		padding: 60px;
		padding-top: 68px;
	}
}

@media (max-width: 1300px) {
	.section-bonus {
		padding-bottom: 130px;
	}
	.card-heading {
		font-size: 34px;
	}
}

@media (max-width: 1150px) {
	.card {
		padding: 40px;
		padding-top: 48px;
	}
	.card-picture {
		height: 70%;
		right: 30px;
	}
	.card-badge {
		font-size: 34px;
		left: 40px;
	}
}

@media (max-width: 1000px) {
	.card-badge {
		font-size: 28px;
		border-radius: 10px;
		padding: 3px 16px;
	}
	.card-heading {
		font-size: 28px;
		max-width: 600px;
	}
}

@media (max-width: 850px) {
	.section-bonus {
		padding-bottom: 90px;
	}
	.card-badge {
		font-size: 22px;
		left: 50%;
		top: -16px;
		transform: translateX(-50%);
		white-space: nowrap;
	}
	.card {
		padding-bottom: 360px;
	}
	.card-heading {
		font-size: 24px;
		padding-bottom: 20px;
	}
	.card-picture {
		max-height: 330px;
		right: auto;
		left: 50%;
		transform: translateX(-50%);
	}
}

@media (max-width: 450px) {
	.card {
		padding-left: 30px;
		padding-right: 30px;
		padding-top: 40px;
		border-radius: 30px;
	}
	.card-heading {
		font-size: 20px;
	}
	.card-badge {
		font-size: 14px;
		font-weight: 600;
		border-radius: 6px;
	}
}
</style>
