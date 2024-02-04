<template>
	<div class="card-other">
		<a class="card-other-link" href="#" />
		<div class="card-other-photo-wrapper">
			<img src="./photo.png" class="card-other-photo" alt="" />
		</div>
		<h6 class="card-other-title">Фотоомоложение</h6>
	</div>
</template>

<style scoped>
.card-other {
	position: relative;
	margin: 0 12px;
	cursor: pointer;
}
.card-other-photo {
	transition: 0.2s;
}

.card-other-title {
	font-size: 28px;
}

.card-other-link {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
}

.card-other:hover {
	opacity: 0.8;
}

.card-other-photo-wrapper {
	position: relative;
	border-radius: 50px;
	overflow: hidden;
	height: fit-content;
	margin-bottom: 30px;
}

.card-other-photo-wrapper::after {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border-radius: 50px;
	transition: 0.2s;
	outline: 1px solid #f4eee8;
	border: 1px solid #f4eee8;
}

.card-other:hover .card-other-photo-wrapper::after {
	border-width: 10px;
}

@media (max-width: 1000px) {
	.card-other-title {
		font-size: 22px;
	}
}

@media (max-width: 600px) {
	.card-other-title {
		text-align: center;
	}
	.card-other-photo-wrapper{
		margin-bottom: 14px;
	}
}
</style>
