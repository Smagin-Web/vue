<template>
	<div class="sidebar">
		<div class="link-group">
			<a href="#">
				<h5 class="link-text">Все услуги</h5>
			</a>
			<a href="#">
				<h5 class="link-text">Консультации</h5>
			</a>
			<a href="#">
				<h5 class="link-text">Аппаратная косметология</h5>
			</a>
			<a href="#">
				<h5 class="link-text">Инъекционная косметология</h5>
			</a>
		</div>

		<h6 class="link-mini">Услуги по концептам</h6>

		<h6 class="sidebar-badge">AntiAcne Concept</h6>

		<div class="link-group">
			<a href="#">
				<h5 class="link-text">Clear Concept</h5>
			</a>

			<a href="#">
				<h5 class="link-text">Detox Concept</h5>
			</a>

			<a href="#">
				<h5 class="link-text">Lifting Concept</h5>
			</a>

			<a href="#">
				<h5 class="link-text">Brigth Concept</h5>
			</a>

			<a href="#">
				<h5 class="link-text">Hydro Concept</h5>
			</a>

			<a href="#">
				<h5 class="link-text">Red Concept</h5>
			</a>
		</div>
	</div>
</template>

<style scoped>
.sidebar {
	width: 400px;
	border-radius: 30px;
	background: #ede4da;
	padding: 40px;
}

.link-group {
	display: grid;
	max-width: 100%;
	gap: 32px;
}

.link-text {
	color: #000;
	font-size: 24px;
}

.link-mini {
	color: #6d6364;
	font-size: 16px;
	padding-bottom: 34px;
	padding-top: 80px;
}

.sidebar-badge {
	border-radius: 10px;
	background: #ae8c8e;
	color: #fff;
	font-size: 24px;
	padding: 8px 20px 5px;

	margin: 0 -20px;
	margin-bottom: 30px;
}
</style>
