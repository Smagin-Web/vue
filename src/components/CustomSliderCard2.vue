<script setup lang="ts">
import MButtonOutline from './buttons/MButtonOutline.vue'
import MButton from './buttons/MButton.vue'
</script>

<template>
	<div class="card">
		<div class="card-info-content">
			<h3 class="title">Очищение и сужение пор, придание матовости.</h3>
			<h5 class="subtitle">
				Lorem ipsum dolor sit amet consectetur. Enim leo in neque condimentum
				dui nibh donec.
			</h5>
			<p class="card-text">
				Lorem ipsum dolor sit amet consectetur. Viverra consequat purus euismod
				porta nulla orci massa habitant massa. Magna nunc ac sodales phasellus
				enim. Adipiscing aliquam proin dignissim egestas laoreet. Vel sagittis
				penatibus eu feugiat purus sed. Erat lectus tellus nullam elit. Ut et
				ullamcorper dignissim libero aenean diam. Non eget ut odio et eget nibh
				adipiscing. Eleifend cras sagittis morbi volutpat quis sagittis
				dignissim dui.
			</p>
			<div class="buttons">
				<img src="./slider.png" alt="" class="card-image" />
				<MButton class="first-button">Записаться на приём</MButton>
				<MButtonOutline>Задать вопрос</MButtonOutline>
			</div>
		</div>
		<div class="card-badges">
			<div class="card-badge">02.</div>
			<div class="card-badge">Clear Concept</div>
		</div>
	</div>
</template>

<style scoped>
.card-info-content {
	max-width: 880px;
}

.title {
	font-size: 42px;
	padding-bottom: 40px;
}

.subtitle {
	color: #6d6364;
	font-size: 24px;
	padding-bottom: 30px;
}

.card-text {
	color: #6d6364;
	font-family: 'BrisaSans';
	font-size: 22px;
	font-weight: 400;

	padding-bottom: 70px;
}

.buttons {
	display: flex;
	gap: 20px;
}

.card-image {
	position: absolute;
	right: 5%;
	bottom: 0;
	width: 42%;
}

.card-badges {
	position: absolute;
	display: flex;
	top: 0;
	left: 80px;
	transform: translateY(-50%);
}

.card-badge {
	color: #fff;
	font-family: 'UABrand';
	font-size: 48px;
	font-weight: 700;

	border-radius: 20px;
	background: #8ac8d7;
	padding: 0 22px 4px;
	z-index: 20;
}

@media (max-width: 1000px) {
	.card-badge {
		font-size: 20px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 10px;
	}
	.card {
		padding: 50px 12px 32px;
		border-radius: 40px;
	}
	.title {
		font-size: 20px;
		padding-bottom: 18px;
	}
	.subtitle {
		font-size: 17px;
		padding-bottom: 25px;
	}

	.card-text {
		font-size: 16px;

		padding-bottom: 0;
	}

	.buttons {
		display: grid;
		/* grid-template-columns: max-content; */
		justify-content: center;
		justify-items: center;
		gap: 0;
	}

	.buttons button {
		width: 320px;
	}

	.first-button {
		margin-bottom: 20px;
	}

	.card-image {
		position: static;
		width: 380px;
		padding-right: 30px;
	}
}
</style>
