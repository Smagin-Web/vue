<template>
	<div class="widget">
		<div class="widget-header">
			<img src="./avatar.png" alt="" class="widget-header-avatar" />
			<div>
				<h6 class="h-xs widget-header-title">Ольга Заика</h6>
				<p class="text-mini">
					Врач – косметолог, дерматовенеролог , член общества специалистов
					эстетической медицины, сертифицированный национальный тренер по
					аппаратной и инъекционной косметологии компании.
				</p>
			</div>
		</div>
		<p class="text-sm">
			В нашей клинике каждому пациенту предоставляется индивидуальный подход. Мы
			предлагаем широкий спектр самых современных методов для лечения акне,
			гарантируя качественный результат. Преимущества работы с нами – это
			профессионализм и забота о здоровье вашей кожи.
		</p>
	</div>
</template>

<style scoped>
.widget {
	padding: 40px;
	border-radius: 50px;
	background: #fff;
	margin-bottom: 50px;
}

.widget-header {
	display: grid;
	grid-template-columns: max-content 1fr;
	gap: 36px;
	align-items: center;
	padding-bottom: 40px;
}

.widget-header-title {
	padding-bottom: 10px;
}

@media (max-width: 1000px) {
	.widget {
		padding: 18px;
		border-radius: 20px;
		gap: 10px;
	}

	.widget-header {
		gap: 20px;
		padding-bottom: 24px;
		align-items: start;
	}
}

@media (max-width: 500px) {
	.widget-header-avatar {
		width: 80px;
		height: auto;
	}
}
</style>
