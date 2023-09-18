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
				<div class="section-pluses-content">
					<div>
						<div class="section-pluses__card">
							<div class="section-pluses__card-picture-1">
								<PicturePluses1></PicturePluses1>
							</div>
							<Heading
								tag="h4"
								font-size-heading="24px"
								style="padding-bottom: 64px"
							>
								Сертифицированные косметологи и врачи со&nbsp;стажем&nbsp;от 10
								лет
							</Heading>
						</div>
					</div>
					<div>
						<div class="section-pluses__card pb-big">
							<Heading
								tag="h4"
								font-size-heading="24px"
								style="padding-bottom: 64px"
							>
								Парк лицензированной аппаратной косметологии
							</Heading>
							<PicturePluses2></PicturePluses2>
						</div>
					</div>
					<div>
						<PicturePluses3></PicturePluses3>
						<div class="section-pluses__card"></div>
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.section-pluses {
	margin-top: 200px;
}
.section-pluses-content {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 25px;
}

.section-pluses__card {
	text-align: center;
	border-radius: 150px 20px;
	background: #ede4da;
	width: 100%;
	min-height: 378px;

	padding-bottom: 40px;
	padding-top: 54px;
}

.section-pluses__card.pb-big {
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
