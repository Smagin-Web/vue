<script setup lang="ts">
import MContainer from '../../shared/MContainer.vue'
import PicturePluses1 from '../../icons/PicturePluses1.vue'
import PicturePluses2 from '../../icons/PicturePluses2.vue'
import PicturePluses3 from '../../icons/PicturePluses3.vue'
import Heading from '../../typography/Heading.vue'
</script>

<template>
	<section class="section-pluses">
		<MContainer>
			<template #children>
				<div class="content">
					<div>
						<div class="card card-1">
							<div class="section-pluses__card-picture-1">
								<PicturePluses1 class="picture-1" />
							</div>
							<Heading tag="h4" font-size-heading="24px">
								Сертифицированные косметологи и врачи со&nbsp;стажем&nbsp;от 10
								лет
							</Heading>
						</div>
					</div>
					<div class="card card-2 pb-big">
						<Heading tag="h4" font-size-heading="24px" pb="64px">
							Парк лицензированной аппаратной косметологии
						</Heading>
						<PicturePluses2 />
					</div>
					<div class="card card-3">
						<PicturePluses3 class="picture-3" />
						<Heading tag="h4" font-size-heading="24px" max-width="460px">
							Своё закрытое сообщество, где делимся секретами молодости
						</Heading>
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.content {
	display: grid;
	align-items: start;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 24px;
	padding-bottom: 160px;
}
.card {
	position: relative;
	background: #ede4da;
	padding-top: 54px;
	padding-bottom: 40px;
	min-height: 380px;
	border-radius: 100px;
	-webkit-box-shadow: -2px 33px 64px -6px rgba(49, 34, 17, 0.1);
	-moz-box-shadow: -2px 33px 64px -6px rgba(49, 34, 17, 0.1);
	box-shadow: -2px 33px 64px -6px rgba(49, 34, 17, 0.1);
}
.card-1 {
	display: grid;
	align-content: end;
	border-radius: 150px 20px;
	margin-top: 220px;
}
.card-2 {
	margin-top: 60px;
}

.card-3 {
	display: grid;
	align-content: end;
	justify-content: center;
	border-radius: 20px 150px;
	height: 466px;
}
.picture-1 {
	position: absolute;
	bottom: 160px;
}
.picture-3 {
	position: absolute;
	bottom: 160px;
	left: 54px;
}
.section-pluses {
	margin-top: 200px;
}

.section-pluses__card {
	text-align: center;
	border-radius: 150px 20px;
	width: 100%;
	min-height: 378px;

	padding-bottom: 40px;
	padding-top: 54px;
}

.pb-big {
	padding-bottom: 95px;
}

.section-pluses__card p {
	color: #000;
	text-align: center;
	font-size: 24px;
	font-weight: 700;
	padding-left: 48px;
	padding-right: 48px;
}

.section-pluses__card-picture-1 {
	padding-left: 80px;
}
</style>
