<script setup lang="ts">
import MContainer from '@/components/shared/MContainer.vue'
import SectionBonusList from './SectionBonusList.vue'
import MButtonBig from '@/components/buttons/MButtonBig.vue'
import SectionBonusPicture from './SectionBonusPicture.vue'
import BigBadge from '@/components/ui/big-badge/BigBadge.vue'

const props = defineProps(['openModal'])
</script>

<template>
	<section class="section-bonus">
		<MContainer>
			<div class="card">
				<BigBadge style="background: #b2977b">Подарочный сертификат</BigBadge>
				<div class="card-content">
					<h5 class="card-heading h-l">
						Сделайте приятный сюрприз близкому человеку
					</h5>
					<SectionBonusList class="card-list" />
					<MButtonBig @click="props.openModal">Оформить сертификат</MButtonBig>
				</div>
				<SectionBonusPicture class="card-picture" />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-bonus {
	overflow: visible;
	padding-bottom: 160px;
	padding-top: 34px;
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

@media (max-width: 1800px) {
	.card-picture {
		height: 100%;
	}
}

@media (max-width: 1600px) {
	.card-picture {
		height: 80%;
	}
}

@media (max-width: 1400px) {
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
	.card {
		padding: 40px;
		padding-top: 48px;
	}
	.card-picture {
		height: 70%;
		right: 30px;
	}
}

@media (max-width: 1000px) {
	.card-badge {
		font-size: 28px;
		border-radius: 10px;
		padding: 3px 16px;
	}
	.card-heading {
		max-width: 600px;
	}
}

@media (max-width: 900px) {
	.section-bonus {
		padding-bottom: 90px;
	}
	.card {
		padding-bottom: 360px;
	}
	.card-heading {
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
}
</style>
