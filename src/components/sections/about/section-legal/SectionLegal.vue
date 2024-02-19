<script setup >
import MContainer from '@/components/shared/MContainer.vue'
import SectionLegalList from './SectionLegalList.vue'
</script>

<template>
	<section class="section-legal">
		<MContainer>
			<div class="card-legal">
				<h4 class="h-l">Правовая информация</h4>
				<SectionLegalList />
			</div>
		</MContainer>
	</section>
</template>

<style scoped>
.section-legal {
	padding-top: 60px;
	padding-bottom: 90px;
}

.card-legal {
	display: grid;
	gap: 50px;

	padding: 86px 80px;
	background-color: #ede4da;
	border-radius: 70px;
}

.card-legal-title {
	font-size: 42px;
}

@media (max-width: 1200px) {
	.section-legal {
		padding-top: 40px;
		padding-bottom: 50px;
	}
	.card-legal {
		border-radius: 40px;
		padding: 50px 40px;
	}
}

@media (max-width: 1000px) {
	.card-legal {
		gap: 36px;
	}
}

@media (max-width: 700px) {
	.card-legal {
		padding: 40px 30px;
		border-radius: 32px;
	}
}

@media (max-width: 500px) {
	.card-legal {
		padding: 40px 18px;
		border-radius: 28px;
	}
}
</style>
