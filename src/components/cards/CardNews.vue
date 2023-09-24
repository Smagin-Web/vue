<script setup lang="ts">
import IconNew from '../icons/IconNew.vue'
import ButtonDecor from '../buttons/ButtonDecor.vue'
</script>

<template>
	<div class="card">
		<img
			class="card-img"
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
				<span class="card-date-text">15.05.2023</span>
			</div>
			<ButtonDecor>Новость</ButtonDecor>
		</div>
		<h5 class="card-heading">Название публикации</h5>

		<p class="card-text">
			Краткий анонс публикацииLorem ipsum dolor sit amet consectetur. Purus dui
			vulputate sagittis aliquam ac pellentesque condimentum lectus amet. Mollis
			vitae sit gravida tellus vel faucibus. Purus elementum tortor lectus
			scelerisque non. Vitae sit non velit elit nisl ut egestas.
		</p>
	</div>
</template>

<style scoped>
.card {
	background-color: #fff;
	border-radius: 50px;
	padding: 40px;
	max-width: 550px;
}

.card-img {
	max-width: 100%;
	border-radius: 30px;
	margin-bottom: 20px;
}

.card-date-text {
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 16px;
}

.card-heading {
	font-size: 24px;
	padding-bottom: 20px;
}

.card-text {
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
}

@media screen and (max-width: 1000px) {
	.card {
		padding: 20px;
		border-radius: 20px;
	}

	.card-heading {
		font-size: 17px;
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
}
</style>
