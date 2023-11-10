<template>
	<div class="picture">
		<p class="picture-text lg">Ольга Заика | Главный врач, врач-косметолог</p>
		<p class="picture-text sm">
			Ольга Заика<br />Главный врач, врач-косметолог
		</p>
		<img class="picture-photo" src="./photo.png" alt="" />
	</div>
</template>

<style scoped>
.picture {
	position: relative;
	width: 40%;
	display: flex;
	align-items: end;
	padding: 16px 25px;
	border-radius: 120px 20px;
	background: #f0dcc8;
}

.picture-photo {
	position: absolute;
	bottom: 50px;
	left: 0;
	right: 0;
	width: 100%;
}

.picture-text {
	color: #6d6364;
	font-size: 18px;
	font-weight: 300;
}

.picture-text.sm {
	display: none;
}

@media (max-width: 1220px) {
  .picture-text.sm {
    display: block;
  }
  .picture-text.lg {
    display: none;
  }
  .picture-photo {
    bottom: 70px;
  }
}

@media (max-width: 970px) {
  .picture {
    border-radius: 10px 10px 60px 10px;
    min-height: 150px;
  }
  .picture-text {
    font-size: 14px;
  }
  .picture-photo {
    bottom: 60px;
  }
}
</style>
