<script setup >
import IconWhatsapp from './IconWhatsapp.vue'
import IconTelegram from './IconTelegram.vue'
</script>

<template>
	<div class="contacts">
		<a href="#">
			<h6 class="h-xxl">
				<a href="tel:+79257267181" style="color: inherit">+7 925 726-71-81 </a>
			</h6>
		</a>

		<div class="contacts-socials">
			<a
				href="https://wa.me/79774122010"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconWhatsapp class="contacts-icon" />
			</a>
			<a
				href="https://t.me/FaceConcept_bot"
				target="_blank"
				rel="noopener noreferrer"
			>
				<IconTelegram class="contacts-icon" />
			</a>
		</div>
	</div>
</template>

<style scoped>
.contacts {
	display: grid;
	gap: 24px;
	grid-template-columns: max-content max-content;
	padding-bottom: 50px;
}

.contacts-socials {
	display: flex;
	gap: 30px;
	align-items: center;
	padding-bottom: 8px;
}

@media (max-width: 1600px) {
	.contacts {
		align-items: center;
	}
}

@media (max-width: 1300px) {
	.contacts-icon {
		width: 40px;
		height: auto;
	}
}

@media (max-width: 1000px) {
	.contacts {
		grid-template-columns: 1fr;
	}
}

@media (max-width: 600px) {
	.contacts {
		display: grid;
		gap: 16px;
		padding-bottom: 36px;
	}
	.contacts-icon {
		width: 32px;
		height: auto;
	}
}
</style>
