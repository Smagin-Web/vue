<script setup>
import MContainer from './MContainer.vue'
import Heading from '../typography/Heading.vue'
import IconClose from '../icons/IconClose.vue'
</script>

<template>
	<div class="header-notify">
		<MContainer>
			<div style="position: relative">
				<h5 class="h-xxl">Версия сайта для слабовидящих</h5>

				<div style="position: absolute; right: 0; top: -2px">
					<a href="#">
						<IconClose />
					</a>
				</div>
			</div>
		</MContainer>
	</div>
</template>

<style scoped>
.header-notify {
	padding: 15px 0;
	background-color: #fff;
}

@media screen and (max-width: 1000px) {
	.header-notify {
		display: none;
	}
}
</style>
