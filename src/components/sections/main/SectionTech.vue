<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
</script>

<template>
	<section class="section-tech">
		<MContainer>
			<template #children>
				<h4 class="heading">
					Мы&nbsp;разработали новый&nbsp;продукт в&nbsp;косметологии
				</h4>
				<h4 class="big-heading">8&nbsp;концептов твоей красоты</h4>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-tech {
	padding: 104px 0 160px;
}

.heading {
	color: #6d6364;
	text-align: center;
	font-family: 'Pelinka';
	font-size: 50px;
	font-weight: 700;
	padding-bottom: 50px;
}

.big-heading {
	color: #fff;
	text-align: center;
	text-shadow: 0px 10px 20px #d0c3b4;
	font-size: 150px;
}

@media screen and (max-width: 1000px) {
	.section-tech {
		padding: 70px 0;
	}

	.heading {
		font-size: 22px;
	}

	.big-heading {
		font-size: 42px;
	}
}

@media (max-width: 600px) {
	.big-heading {
		font-size: 38px;
	}
}
</style>
