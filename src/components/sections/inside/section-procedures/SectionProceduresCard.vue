<script setup>
import SectionProceduresBadge from './SectionProceduresBadge.vue'
import CardInfo from '@/components/card-elements/CardInfo.vue'
import CardLink from '@/components/card-elements/CardLink.vue'

const props = defineProps(['data', 'link'])
console.log(props.data)

const img_src = `https://admin.aivaga.store/storage/images/procedures/${props.data.image}`
</script>

<template>
	<div class="card">
		<div class="card-image-wrap">
			<img :src="img_src" class="card-image" alt="" />
		</div>
		<div style="display: flex; gap: 10px; flex-wrap: wrap">
			<SectionProceduresBadge
				v-if="data?.category_procedures?.length"
				v-for="category in data.category_procedures"
			>
				{{ category.title }}
			</SectionProceduresBadge>
		</div>
		<h5 class="card-heading h-sm-ultra">
			{{ data.title }}
		</h5>
		<p class="card-text text-sm">
			{{ data.description_mini }}
		</p>

		<CardInfo icon="time" title="Время процедуры" :text="data.duration" />
		<CardInfo icon="pay" title="Стоимость" :text="`${data.price}₽`" />

		<CardLink class="card-link" :link="data.link" />
	</div>
</template>

<style scoped>
.card {
	border-radius: 50px;
	background: #fff;
	padding: 40px;
	max-width: 600px;
	position: relative;
}

.card-image-wrap {
	position: relative;
	width: 100%;
	margin-bottom: 20px;
	overflow: hidden;
	border-radius: 40px;
	padding: 3px;
}

.card-image-wrap::after {
	content: '';
	display: block;
	position: absolute;

	top: -1px;
	right: -1px;
	left: -1px;
	bottom: -1px;
	border: 0px solid #ffffff;
	transition: 0.1s;
	border-radius: inherit;
}

.card-image-wrap:hover::after {
	border-width: 10px;
}

.card-image-wrap:hover {
	cursor: pointer;
}

.card-image {
	width: 100%;
	height: auto;
	display: block;
}

.card-heading {
	padding-bottom: 20px;
	padding-top: 20px;
}

.card-text {
	padding-bottom: 30px;
}

.card-link {
	position: absolute;
	right: 40px;
	bottom: 40px;
}

@media (max-width: 1400px) {
	.card-heading {
		padding-bottom: 16px;
	}
	.card {
		padding: 40px;
	}
}

@media (max-width: 1000px) {
	.card {
		border-radius: 30px;
		padding: 26px;
	}

	.card-link-icon {
		width: 100px;
		height: auto;
	}

	.card-heading {
		padding-top: 16px;
		padding-bottom: 16px;
	}

	.card-text {
		padding-bottom: 16px;
		max-width: 330px;
	}
}

@media (max-width: 900px) {
	.card {
		padding-bottom: 10px;
	}
	.card-heading {
		padding-bottom: 10px;
	}
	.card-link {
		bottom: 20px;
		right: 30px;
	}
}
</style>
