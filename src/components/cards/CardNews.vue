<script setup >
import IconNew from '../icons/IconNew.vue'
import ButtonDecor from '../buttons/ButtonDecor.vue'

const props = defineProps(['isArticle', 'isNews'])
</script>

<template>
	<div class="card-wrapper">
		<a href="#" class="card-link" />
		<div class="card">
			<div class="card-img-container">
				<img
					class="card-img"
					src="https://static.zdravcity.ru/upload/main/fdd/1024_768_%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0.jpg"
				/>
			</div>
			<div class="card-head-info">
				<div class="card-head-info-date">
					<IconNew />
					<span class="card-date-text">15.05.2024</span>
				</div>
				<ButtonDecor class="card-tag" v-if="props.isNews">Новость</ButtonDecor>
				<ButtonDecor class="card-tag" v-if="props.isArticle">
					Статья
				</ButtonDecor>
			</div>
			<h5 class="h-sm-ultra card-heading" v-if="props.isNews">
				Название публикации
			</h5>
			<h5 class="h-sm-ultra card-heading" v-if="props.isArticle">
				Более длинное название публикации в 2 строчки
			</h5>

			<p class="text-sm">
				Краткий анонс публикации. Lorem ipsum dolor sit amet consectetur. Purus
				dui vulputate sagittis aliquam ac pellentesque condimentum lectus amet.
				Mollis vitae sit gravida tellus vel faucibus. Purus elementum tortor
				lectus scelerisque non. Vitae sit non velit elit nisl ut egestas.
			</p>
		</div>
	</div>
</template>

<style scoped>
.card-wrapper {
	position: relative;
	padding: 10px 0;
}

.card-wrapper:hover .card-img-container:after {
	border: 10px solid white;
}
.card {
	display: grid;
	gap: 20px;

	background-color: #fff;
	border-radius: 50px;
	padding: 40px;
	max-width: 600px;

	transition: 0.2s;
}

.card-heading {
	line-clamp: 2;
	text-overflow: ellipsis;

	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.card-head-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 16px;
}

.card-head-info-date {
	display: flex;
	align-items: center;
	gap: 5px;
}

.card-tag {
	position: relative;
	z-index: 20;
}

.card-link {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 50px;
	z-index: 10;
}

.card-img {
	display: block;
	max-width: 100%;
	border-radius: 30px;
}

.card-img-container {
	position: relative;
}

.card-img-container:after {
	content: '';
	display: block;
	position: absolute;
	bottom: -1px;
	right: -1px;
	left: -1px;
	top: -1px;

	border-radius: 30px;
	transition: 0.2s;
	border: 1px solid white;
}

.card-date-text {
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 16px;
}

@media (max-width: 1600px) {
	.card {
		padding: 24px 24px 30px;
		border-radius: 30px;
	}
}

@media (max-width: 1000px) {
	.card {
		padding: 20px;
		border-radius: 20px;
	}

	.card-text {
		font-size: 14px;
	}

	.card-date-text {
		font-size: 12px;
	}

	.card-img {
		border-radius: 15px;
	}

	.card-img-container:after {
		border-radius: 15px;
	}
}
</style>
