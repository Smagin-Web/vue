<script setup lang="ts">
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import MContainer from '@/components/shared/MContainer.vue'
</script>

<template>
	<section class="section-stories">
		<MContainer>
			<h2 class="heading">Истории наших клиентов</h2>
			<h5 class="text">
				Это поможет тебе лучше понять структуру плана лечения
				и&nbsp;ориентироваться в&nbsp;его стоимости
			</h5>
		</MContainer>
		<MContainer class="container-custom">
			<div class="card-group">
				<Swiper
					class="swiper-custom"
					:breakpoints="{
						300: { slidesPerView: 1.2 },
						600: { slidesPerView: 2.2 },
						900: { slidesPerView: 3 }
					}"
					:space-between="24"
				>
					<swiper-slide>
						<div class="card">
							<img src="./model.jpg" class="card-img" />
							<p class="card-text">
								Описание курса и проведёных процедур.Lorem ipsum dolor sit amet
								consectetur. Purus dui vulputate sagittis aliquam ac
								pellentesque condimentum lectus amet. Mollis vitae sit gravida
								tellus vel faucibus. Purus elementum tortor lectus scelerisque
								non. Vitae sit non velit elit nisl ut egestas. Felis nulla
								faucibus rhoncus diam nisi tempor.
							</p>
							<div class="card-link-group">
								<a class="card-link">Срок</a>
								<a class="card-link">Стоимость</a>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="card">
							<img src="./model.jpg" class="card-img" />
							<p class="card-text">
								Описание курса и проведёных процедур.Lorem ipsum dolor sit amet
								consectetur. Purus dui vulputate sagittis aliquam ac
								pellentesque condimentum lectus amet. Mollis vitae sit gravida
								tellus vel faucibus. Purus elementum tortor lectus scelerisque
								non. Vitae sit non velit elit nisl ut egestas. Felis nulla
								faucibus rhoncus diam nisi tempor.
							</p>
							<div class="card-link-group">
								<a class="card-link">Срок</a>
								<a class="card-link">Стоимость</a>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="card">
							<img src="./model.jpg" class="card-img" />
							<p class="card-text">
								Описание курса и проведёных процедур.Lorem ipsum dolor sit amet
								consectetur. Purus dui vulputate sagittis aliquam ac
								pellentesque condimentum lectus amet. Mollis vitae sit gravida
								tellus vel faucibus. Purus elementum tortor lectus scelerisque
								non. Vitae sit non velit elit nisl ut egestas. Felis nulla
								faucibus rhoncus diam nisi tempor.
							</p>
							<div class="card-link-group">
								<a class="card-link">Срок</a>
								<a class="card-link">Стоимость</a>
							</div>
						</div>
					</swiper-slide>
				</Swiper>
			</div>
		</MContainer>
	</section>
</template>

<script lang="ts">
export default {
	components: {
		Swiper,
		SwiperSlide
	},

	data() {
		return {}
	}
}
</script>

<style scoped>
.section-stories {
	padding-bottom: 150px;
}

.heading {
	padding-bottom: 40px;
	font-size: 50px;
}

.text {
	color: #6d6364;
	font-size: 24px;
	padding-bottom: 60px;
	max-width: 870px;
}

.card {
	padding: 40px 40px 48px;
	background-color: #fff;
	border-radius: 50px;
}

.card-img {
	max-width: 100%;
	border-radius: 30px;
	margin-bottom: 40px;
}

.card-text {
	color: #6d6364;
	font-size: 22px;
	font-weight: 400;
	padding-bottom: 30px;
}
.card-link-group {
	display: flex;
	gap: 32px;
	justify-content: space-between;
	padding-right: 40px;
}
.card-link {
	color: #000;
	font-size: 24px;
	font-weight: 700;
	font-family: 'Pelinka';
}

@media screen and (max-width: 1300px) {
	.heading {
		padding-bottom: 40px;
		font-size: 20px;
	}

	.text {
		color: #6d6364;
		font-size: 17px;
		padding-bottom: 34px;
	}

	.card {
		padding: 20px;
		border-radius: 20px;
	}

	.card-link {
		font-size: 17px;
	}

	.card-link-group {
		padding-right: 0;
	}

	.card-text {
		font-size: 14px;
		padding-bottom: 22px;
	}

	.card-img {
		border-radius: 15px;
		margin-bottom: 22px;
	}
}

@media (max-width: 900px) {
	.container-custom {
		padding: 0;
	}

	.swiper-custom {
		padding: 0 24px;
	}
}
</style>
