<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import Text from '../../typography/Text.vue'
</script>

<template>
	<section class="section-info">
		<MContainer>
			<template #children>
				<h3 class="heading">
					Наш Центр специализируется на&nbsp;аппаратной косметологии лица
					и&nbsp;имеет медицинскую лицензию
				</h3>

				<p class="text">
					Мы&nbsp;уверены, что аппаратная косметология&nbsp;&mdash; это
					безболезненные процедуры без стресса и&nbsp;реабилитации, при которых
					клетки начинают работать лучше, улучшая состояние твоей кожи
					на&nbsp;клеточном уровне.
					<br />
					<br />
					В&nbsp;отличие от&nbsp;инъекций, которые дают быстрый,
					но&nbsp;временный результат, мы&nbsp;заботимся о&nbsp;долгосрочном
					здоровье твоей кожи.
				</p>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-info {
	background: linear-gradient(180deg, #bac3d8 0%, #7986a5 100%);
	padding: 164px 0;
}

.section-info h2 {
	max-width: 1000px;
	margin: auto;
	padding-bottom: 80px;
}

.heading {
	color: #fff;
	text-align: center;
	font-family: 'Pelinka';
	font-size: 50px;
	font-weight: 700;
	padding-bottom: 80px;
}

.text {
	color: #fff;
	font-family: 'BrisaSans';
	text-align: center;
	font-size: 24px;
	font-weight: 300;
	max-width: 880px;
	margin: auto;
}

@media screen and (max-width: 1000px) {
	.heading {
		font-size: 22px;
		padding-bottom: 45px;
	}

	.text {
		font-size: 16px;
	}

	.section-info {
		padding: 76px 0;
	}
}
</style>
