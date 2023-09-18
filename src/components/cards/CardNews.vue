<script setup lang="ts">
import IconNew from '../icons/IconNew.vue'
import Heading from '../typography/Heading.vue'
import Text from '../typography/Text.vue'
import ButtonDecor from '../buttons/ButtonDecor.vue'
</script>

<template>
	<div class="card-news">
		<img
			class="card-news__img"
			src="https://static.zdravcity.ru/upload/main/fdd/1024_768_%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0.jpg"
		/>
		<div
			style="
				padding-bottom: 24px;
				display: flex;
				justify-content: space-between;
				align-items: center;
			"
		>
			<div style="display: flex; align-items: center; gap: 5px">
				<IconNew />
				<Text tag="span" font-size-text="16px">15.05.2023</Text>
			</div>
			<ButtonDecor>Новость</ButtonDecor>
		</div>
		<Heading
			tag="h5"
			font-size-heading="24px"
			text-align-heading="left"
			pb="20px"
		>
			Название публикации
		</Heading>

		<Text>
			Краткий анонс публикацииLorem ipsum dolor sit amet consectetur. Purus dui
			vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis
			vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus
			scelerisque non. Vitae sit non velit elit nisl ut egestas.
		</Text>
	</div>
</template>

<style scoped>
.card-news {
	background-color: #fff;
	border-radius: 50px;
	padding: 40px;
	max-width: 550px;
}

.card-news__text {
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	font-weight: 400;
}

.card-news__img {
	max-width: 100%;
	border-radius: 30px;
	margin-bottom: 20px;
}
</style>
