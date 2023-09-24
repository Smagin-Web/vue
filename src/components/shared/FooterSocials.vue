<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import IconTelegram from '../icons/IconTelegram.vue'
import IconWhatsapp from '../icons/IconWhatsapp.vue'
import IconVk from '../icons/IconVk.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconYoutube from '../icons/IconYoutube.vue'
import IconAppStore from '../icons/IconAppStore.vue'
import IconGooglePlay from '../icons/IconGooglePlay.vue'
</script>

<template>
	<div class="footer-socials">
		<div class="footer-socials-icons">
			<IconTelegram />
			<IconWhatsapp />
			<IconVk />
			<IconInstagram />
			<IconYoutube />
		</div>
		<div class="footer-socials-stores">
			<IconAppStore />
			<IconGooglePlay />
		</div>
	</div>
</template>

<style scoped>
.footer-socials {
	width: 350px;
  max-width: 350px;
}

.footer-socials-icons {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 28px;
}

.footer-socials-stores {
	display: flex;
	justify-content: space-between;
}
</style>
