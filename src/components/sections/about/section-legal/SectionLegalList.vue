<script setup lang="ts">
import SectionLegalListIcon from './SectionLegalListIcon.vue'

const listItems = [
	{
		text: 'График приема пациентов главным врачом',
		link: 'https://disk.yandex.ru/d/aSRmQUFEkbPquA'
	},
	{
		text: 'Контролирующие органы',
		link: 'https://disk.yandex.ru/d/e137aupCHHAMkA'
	},
	{
		text: 'ОГРН Свидетельство о постановке на учет',
		link: 'https://disk.yandex.ru/d/U1AevBRRwPGPHA'
	},
	{
		text: 'Сведения и документы медицинской организации',
		link: 'https://disk.yandex.ru/d/6YnHNOny3_gMNQ'
	},
	{
		text: 'О правилах предоставления платных медицинских услуг',
		link: 'https://disk.yandex.ru/i/8VtAMbp7gRp2bA'
	},
	{
		text: 'Правила внутреннего распорядка для потребителей медицинских услуг в ООО "ФЭЙС КОНЦЕПТ"',
		link: 'https://disk.yandex.ru/d/FhuHmKyynNsOEA'
	}
]
</script>

<template>
	<div class="section-legal-list-wrapper">
		<div class="section-legal-list">
			<div
				v-for="(item, index) in listItems"
				:key="item.text + index"
				class="section-legal-list-item"
			>
				<a
					:href="item.link"
					class="section-legal-link"
					target="_blank"
					rel="noopener noreferrer"
				/>
				<SectionLegalListIcon class="section-legal-icon-document" />
				<p class="text-sm">{{ item.text }}</p>
			</div>
		</div>

		<div class="section-legal-footer">
			<SectionLegalListIcon class="section-legal-icon-document" />

			<div>
				<p class="text-sm">
					Уважаемые пациенты, ООО «Центр Косметологии «Фэйс Концепт» уведомляет
					вас о том, что не оказывает медицинскую помощь в рамках
					государственной и региональных программ гарантий бесплатного оказания
					гражданам медицинской помощи.
				</p>
				<p class="text-sm" style="padding-top: 10px; position: relative">
					<a
						href="https://disk.yandex.ru/d/k5gZiEwD6BEtqA"
						class="section-legal-link"
						target="_blank"
						rel="noopener noreferrer"
					/>
					— Программы государственных гарантий бесплатного оказания гражданам
					медицинской помощи
				</p>
				<p class="text-sm" style="position: relative">
					<a
						href="https://disk.yandex.ru/i/-j6lfE9VY-97rg"
						class="section-legal-link"
						target="_blank"
						rel="noopener noreferrer"
					/>
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

.section-legal-list-item {
	position: relative;
}

.section-legal-link {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
}

.section-legal-list-item:hover svg {
	opacity: 0.6;
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
