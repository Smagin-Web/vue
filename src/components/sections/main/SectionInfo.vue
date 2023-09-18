<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import Heading from '../../typography/Heading.vue'
import Text from '../../typography/Text.vue'
</script>

<template>
	<section class="section-info">
		<MContainer>
			<template #children>
				<Heading tag="h3" color="#fff" font-size-heading="50px" pb="80px">
					Наш Центр специализируется на&nbsp;аппаратной косметологии лица
					и&nbsp;имеет медицинскую лицензию
				</Heading>
				<Text color="#fff" font-size-text="24px" text-align-text="center" font-weight-text="300" max-width="880px" pb="30px">
					Мы&nbsp;уверены, что аппаратная косметология&nbsp;&mdash; это
					безболезненные процедуры без стресса и&nbsp;реабилитации, при которых
					клетки начинают работать лучше, улучшая состояние твоей кожи
					на&nbsp;клеточном уровне.
				</Text>
				<Text color="#fff" font-size-text="24px" text-align-text="center" font-weight-text="300" max-width="880px">
					В&nbsp;отличие от&nbsp;инъекций, которые дают быстрый,
					но&nbsp;временный результат, мы&nbsp;заботимся о&nbsp;долгосрочном
					здоровье твоей кожи.
				</Text>
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

.section-info p {
	color: #fff;
	text-align: center;
	font-size: 24px;
	font-weight: 400;
	max-width: 800px;
	margin: auto;
}
</style>
