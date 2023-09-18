<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
</script>

<template>
	<section class="section-stories">
		<MContainer>
			<template #children>
				<h2>Истории наших клиентов</h2>
				<p>
					Это поможет тебе лучше понять структуру плана лечения
					и&nbsp;ориентироваться в&nbsp;его стоимости
				</p>
				<div class="section-stories__cards">
					<div class="section-stories__card">
						<img
							src="https://www.cosmetologist.ru/images/services/acne/acne-treatment-01-500-366.jpg"
						/>
						<p>
							Описание курса и проведёных процедур.Lorem ipsum dolor sit amet
							consectetur. Purus dui vulputate sagittis aliquam ac pellentesque
							condimentum lectus amet. Mollis vitae sit gravida tellus vel
							faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit
							non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam
							nisi tempor.
						</p>
						<div class="section-stories__card-links">
							<a>Срок</a>
							<a>Стоимость</a>
						</div>
					</div>
					<div class="section-stories__card">
						<img
							src="https://www.cosmetologist.ru/images/services/acne/acne-treatment-01-500-366.jpg"
						/>
						<p>
							Описание курса и проведёных процедур.Lorem ipsum dolor sit amet
							consectetur. Purus dui vulputate sagittis aliquam ac pellentesque
							condimentum lectus amet. Mollis vitae sit gravida tellus vel
							faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit
							non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam
							nisi tempor.
						</p>
						<div class="section-stories__card-links">
							<a>Срок</a>
							<a>Стоимость</a>
						</div>
					</div>
					<div class="section-stories__card">
						<img
							src="https://www.cosmetologist.ru/images/services/acne/acne-treatment-01-500-366.jpg"
						/>
						<p>
							Описание курса и проведёных процедур.Lorem ipsum dolor sit amet
							consectetur. Purus dui vulputate sagittis aliquam ac pellentesque
							condimentum lectus amet. Mollis vitae sit gravida tellus vel
							faucibus. Purus elementum tortor lectus scelerisque non. Vitae sit
							non velit elit nisl ut egestas. Felis nulla faucibus rhoncus diam
							nisi tempor.
						</p>
						<div class="section-stories__card-links">
							<a>Срок</a>
							<a>Стоимость</a>
						</div>
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-stories {
	padding-bottom: 150px;
}

.section-stories h2 {
	padding-bottom: 40px;

	color: #000;
	font-size: 50px;
	font-weight: 700;
}

.section-stories p {
	padding-bottom: 60px;
	max-width: 828px;

	color: #6d6364;
	font-size: 24px;
	font-weight: 700;
}

.section-stories__cards {
	display: grid;
	max-width: 100%;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 24px;
}

.section-stories__card {
	padding: 40px 40px 48px;
	background-color: #fff;
	border-radius: 50px;
}

.section-stories__card img {
	max-width: 100%;
	border-radius: 30px;
	margin-bottom: 40px;
}

.section-stories__card p {
	color: #6d6364;
	font-size: 22px;
	font-weight: 400;
	padding-bottom: 30px;
}
.section-stories__card-links {
	display: flex;
	gap: 32px;
	justify-content: space-between;
	padding-right: 40px;
}
.section-stories__card a {
	color: #000;
	font-size: 24px;
	font-weight: 700;
}
</style>
