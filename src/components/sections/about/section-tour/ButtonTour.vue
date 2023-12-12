<script setup lang="ts">
import MButtonBig from '@/components/buttons/MButtonBig.vue'
</script>
<template>
	<MButtonBig class="button-tour">
		<svg
		class="button-tour-icon"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M16.466 7.5C15.643 4.237 13.952 2 12 2C9.239 2 7 6.477 7 12C7 17.523 9.239 22 12 22C12.342 22 12.677 21.931 13 21.8M15.194 13.707L19.008 15.567L17.148 19.381"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M19 15.57C17.196 16.455 14.726 17 12 17C6.477 17 2 14.761 2 12C2 9.239 6.477 7 12 7C16.838 7 20.873 8.718 21.8 11"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
		3D тур
	</MButtonBig>
</template>

<style scoped>
.button-tour {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
}

@media (max-width: 1000px) {
	.button-tour {
		max-width: 200px;
		max-height: 50px;
		font-size: 16px;
		font-weight: 400;
		padding-left: 10px;
		gap: 8px;
	}
	.button-tour-icon {
		width: 16px;
		height: auto;
	}
}
</style>
