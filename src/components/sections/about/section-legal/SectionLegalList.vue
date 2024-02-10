<script setup lang="ts">
import SectionLegalListIcon from './SectionLegalListIcon.vue'

const listItems = [
	'График приема пациентов главным врачом',
	'Контролирующие органы',
	'ОГРН Свидетельство о постановке на учет',
	'Сведения и документы медицинской организации',
	'О правилах предоставления платных медицинских услуг',
	'Правила внутреннего распорядка для потребителей медицинских услуг в ООО "ФЭЙС КОНЦЕПТ"'
]
</script>

<template>
	<div class="section-legal-list-wrapper">
		<div class="section-legal-list">
			<div
				v-for="(item, index) in listItems"
				:key="item + index"
				class="section-legal-list-item"
			>
				<SectionLegalListIcon class="section-legal-icon-document" />
				<p class="text-sm">{{ item }}</p>
			</div>
		</div>

		<div class="section-legal-footer">
			<SectionLegalListIcon class="section-legal-icon-document" />

			<div>
				<p class="text-sm">
					Уважаемые пациенты, ООО «Центр Косметологии «Мира» уведомляет вас о
					том, что не оказывает медицинскую помощь в рамках государственной и
					региональных программ гарантий бесплатного оказания гражданам
					медицинской помощи.
				</p>
				<p class="text-sm" style="padding-top: 10px">
					— Программы государственных гарантий бесплатного оказания гражданам
					медицинской помощи
				</p>
				<p class="text-sm">
					— Территориальные программы государственных гарантий бесплатного
					оказания гражданам медицинской помощи
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.section-legal-list {
	display: grid;
	grid-template-columns: 350px 350px 350px;
	gap: 32px 50px;
}

.section-legal-icon-document {
	width: 30px;
	height: auto;
	margin-bottom: 16px;
}

.section-legal-footer {
	padding-top: 30px;
}

@media (max-width: 1500px) {
	.section-legal-list {
		grid-template-columns: 300px 300px;
	}
}

@media (max-width: 1000px) {
	.section-legal-list {
		grid-template-columns: 250px 250px;
		gap: 24px 20px;
	}
	.section-legal-icon-document {
		width: 24px;
		margin-bottom: 10px;
	}
}

@media (max-width: 700px) {
	.section-legal-list {
		grid-template-columns: 1fr;
	}
	.section-legal-list-item,
	.section-legal-footer {
		display: flex;
		align-items: start;
		max-width: 500px;
	}
	.section-legal-icon-document {
		width: 20px;
		flex-shrink: 0;

		margin-bottom: 0;
		margin-right: 10px;
	}
}

@media (max-width: 500px) {
	.section-legal-list-wrapper {
		margin-left: -6px;
	}
}
</style>
