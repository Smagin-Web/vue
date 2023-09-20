<script setup lang="ts">
import Heading from '../../typography/Heading.vue'
import Text from '../../typography/Text.vue'
import SectionBannerBlock from './SectionBannerBlock.vue'
import MBadge from '@/components/ui/MBadge.vue'
</script>

<template>
	<section class="section-banner">
		<div class="container-custom">
			<div class="content">
				<SectionBannerBlock />
				<div class="content-info">
					<div class="content-heading">
						<Heading
							font-size-heading="90px"
							text-align-heading="left"
							pb="25px"
							position="relative"
						>
							Преобразуй
							<br />
							свою&nbsp;кожу
							<div class="content-heading-badges">
								<MBadge class="content-heading-badge-one">без&nbsp;боли</MBadge>
								<MBadge class="content-heading-badge-two"
									>без&nbsp;стресса</MBadge
								>
							</div>
						</Heading>
					</div>
					<Text font-size-text="24px" max-width="650px">
						Наслаждайся уютной обстановкой и&nbsp;профессиональной заботой
						в&nbsp;нашем Центре аппаратной косметологии.
						<br />
						<br />
						Забудь о&nbsp;временных результатах и&nbsp;начни путь
						к&nbsp;долгосрочному здоровью кожи уже сегодня!
					</Text>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.container-custom {
	max-width: 1920px;
	padding: 0 46px;
}
.section-banner {
	padding-top: 160px;
}
.content {
	gap: 50px;
	display: grid;
	grid-template-columns: minmax(0, 732px) max-content;
	align-items: center;
}

.content-info {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding-bottom: 80px;
	padding-right: 280px;
}

.content-heading {
	position: relative;
}

.content-heading-badges {
	position: absolute;
	right: 80px;
	top: 38px;
}

.content-heading-badge-one {
	position: absolute;
	left: 110px;
	top: 0;
	transform: rotate(-13deg);
	background-color: #98cbfa;
	z-index: 20;

	border-radius: 20px;
	padding: 10px 20px 12px;
}

.content-heading-badge-two {
	position: absolute;
	left: 0;
	top: 80px;
	transform: rotate(7deg);

	border-radius: 20px;
	padding: 10px 20px 12px;
}
</style>
