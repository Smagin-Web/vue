<!-- eslint-disable vue/multi-word-component-names -->
<script setup >
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
			<a
				href="https://t.me/faceconceptru"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconTelegram />
			</a>
			<a
				href="https://wa.me/79774122010"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconWhatsapp />
			</a>
			<a
				href="https://vk.com/face_concept"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconVk />
			</a>
			<a
				href="https://www.instagram.com/face_concept_ru/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconInstagram />
			</a>
			<a
				href="https://www.youtube.com/@FaceConceptru"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconYoutube />
			</a>
		</div>
		<!-- <div class="footer-socials-stores">
			<a href="#"><IconAppStore /></a>
			<a href="#"><IconGooglePlay /></a>
		</div> -->
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

@media (max-width: 400px) {
	.footer-socials {
		max-width: 100%;
	}
	.footer-socials-icons {
		width: 100%;
		gap: 0;
		max-width: 100%;
	}
	.footer-socials-icons svg {
		width: 32px;
		height: auto;
	}
	.footer-socials-stores {
		gap: 0;
	}
}
</style>
