<script setup lang="ts">
import Avatar from '@/components/ui/Avatar.vue'
import MContainer from '../../shared/MContainer.vue'
</script>

<template>
	<section class="section-circles">
		<MContainer>
			<template #children>
				<h3 class="heading-section heading-circles">
					Отзывы клиентов в кружочках
					<svg
						class="heading-icon"
						xmlns="http://www.w3.org/2000/svg"
						width="233"
						height="89"
						viewBox="0 0 233 89"
						fill="none"
					>
						<path
							d="M224.894 88.3592C225.652 88.6939 226.537 88.3509 226.872 87.5931L232.326 75.2439C232.661 74.4861 232.318 73.6005 231.56 73.2658C230.802 72.9311 229.917 73.2741 229.582 74.0319L224.734 85.0089L213.757 80.1607C212.999 79.826 212.113 80.169 211.779 80.9268C211.444 81.6846 211.787 82.5703 212.545 82.905L224.894 88.3592ZM2.29642 28.7582C80.7209 -20.3794 191.03 2.13715 224.101 87.5288L226.899 86.4453C192.97 -1.16203 80.2792 -23.6429 0.703568 26.216L2.29642 28.7582Z"
							fill="black"
						/>
					</svg>
				</h3>
				<div class="content-container">
					<div class="circles" style="padding-bottom: 34px">
						<Avatar />
						<Avatar style="opacity: 0; z-index: -10" />
						<Avatar />
						<Avatar style="opacity: 0; z-index: -10" />
						<Avatar />
						<Avatar style="opacity: 0; z-index: -10" />
					</div>
					<div class="circles circles-absolute">
						<Avatar style="opacity: 0; z-index: -10" />
						<Avatar />
						<Avatar style="opacity: 0; z-index: -10" />
						<Avatar />
						<Avatar style="opacity: 0; z-index: -10" />
						<Avatar />
					</div>
					<div class="circles">
						<Avatar />
						<Avatar style="opacity: 0; z-index: -10" />
						<Avatar />
						<Avatar style="opacity: 0; z-index: -10" />
						<Avatar />
						<Avatar style="opacity: 0; z-index: -10" />
					</div>
				</div>
			</template>
		</MContainer>
	</section>
</template>

<style scoped>
.heading-circles {
	max-width: 880px;

	position: relative;
	font-size: 42px;
}

.heading-icon {
	position: absolute;
	left: 100%;
	top: -20px;
}
.section-circles {
	padding-bottom: 100px;
	padding-top: 100px;
}
.circle-empty {
	width: 260px;
}
.content-container {
	position: relative;

	overflow-x: auto;
}
.circles-absolute {
	position: absolute;
	width: 100%;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
}
.circles {
	display: grid;
	grid-template-columns: repeat(6, max-content);
	align-items: start;
	justify-content: start;
}

.circle-bottom {
	margin-top: 147px;
}

@media screen and (max-width: 1720px) {
	.content-container {
		margin: 0 var(--container-padding-xxl-n);
	}
}

@media (max-width: 1420px) {
	.content-container {
		margin: 0 var(--container-padding-xl-n);
	}
}

@media (max-width: 1000px) {
	.section-circles {
		padding-top: 0;
	}
	.heading-circles {
		font-size: 22px;
	}
}

@media (max-width: 960px) {
	.content-container {
		margin: 0 var(--container-padding-l-n);
	}
}

@media (max-width: 800px) {
	.content-container {
		margin: 0 var(--container-padding-sm-n);
	}
}
</style>
