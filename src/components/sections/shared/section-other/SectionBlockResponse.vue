<script setup >
import SectionOtherBlockSm from './SectionOtherBlockSm.vue'
import SectionOtherBlockMd from './SectionOtherBlockMd.vue'
import SectionOtherBlockLg from './SectionOtherBlockLg.vue'
</script>

<template>
	<div>
		<SectionOtherBlockLg class="pictures-block-lg" />
		<SectionOtherBlockMd class="pictures-block-md" />
		<SectionOtherBlockSm class="pictures-block-sm" />
	</div>
</template>

<style scoped>
.pictures-block-lg {
	display: block;
}
.pictures-block-sm {
	display: none;
}

.pictures-block-md {
	display: none;
}

@media (max-width: 1700px) {
	.pictures-block-lg {
		display: none;
	}
	.pictures-block-md {
		display: block;
	}
}

@media (max-width: 1400px) {
	.pictures-block-sm {
		display: block;
	}
	.pictures-block-md {
		display: none;
	}
}

@media (max-width: 600px) {
	.pictures-block-sm {
		overflow: scroll;
		margin: 0 -20px;
	}
}
</style>
