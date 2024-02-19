<script setup >
import MContainer from '@/components/shared/MContainer.vue'
// import BreadCrumbs from '@/components/shared/BreadCrumbs.vue'
import ConceptPicture1 from '../concept-pictures/ConceptPicture1.vue'

const props = defineProps(['title'])
</script>

<template>
	<section class="section-concept-main">
		<MContainer>
			<!-- <BreadCrumbs
				:items="['Главная', 'Концепты', 'Аппаратное лечение акне']"
			/> -->
		</MContainer>
		<div class="container-custom">
			<ConceptPicture1 class="concept-picture" />

			<div class="content-info">
				<h2 class="h-xxxl">
					{{ props.title }}
				</h2>
			</div>
		</div>
	</section>
</template>

<style scoped>
.section-concept-main {
	overflow: visible;
}
.container-custom {
	max-width: 1920px;
	padding: 0 46px;
	padding-top: 100px;
	margin: 0 auto;
	display: flex;
	gap: 50px;
	justify-content: space-between;
	align-items: center;
}

.concept-picture {
	flex-shrink: 0;
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

@media (max-width: 1800px) {
	.concept-picture {
		max-width: 600px;
	}
	.badges {
		left: 590px;
		top: 32px;
	}
}

@media (max-width: 1700px) {
	.badges {
		left: 520px;
		top: 10px;
	}
}

@media (max-width: 1600px) {
	.concept-picture {
		max-width: 550px;
	}
	.badges {
		left: 430px;
		top: 20px;
	}
}

@media (max-width: 1400px) {
	.container-custom {
		padding-top: 50px;
	}
	.concept-picture {
		max-width: 460px;
	}
}

@media (max-width: 1200px) {
	.concept-picture {
		max-width: 400px;
	}
	.banner {
		width: 45%;
	}
}

@media (max-width: 1100px) {
	.concept-picture {
		max-width: 360px;
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

		padding-top: 100px;
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
