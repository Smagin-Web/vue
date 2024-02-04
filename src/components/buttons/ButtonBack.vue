<template>
	<button type="button" class="button-back">
		<svg
		class="button-icon"
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
		>
			<path
				d="M16 8.00023C16 8.2913 15.9014 8.53545 15.7041 8.73269C15.5069 8.92993 15.2631 9.02821 14.9727 9.02752L3.49278 9.02752L8.5008 14.0355C8.70626 14.241 8.80899 14.4852 8.80899 14.768C8.80899 15.0508 8.70626 15.2947 8.5008 15.4994C8.29534 15.7049 8.05564 15.8076 7.7817 15.8076C7.50776 15.8076 7.26806 15.7049 7.0626 15.4994L0.282503 8.71934C0.179775 8.61661 0.10718 8.50532 0.0647185 8.38547C0.0222573 8.26562 0.000684523 8.13721 -3.41272e-07 8.00024C-3.47259e-07 7.86326 0.0215724 7.7304 0.0647184 7.60165C0.107864 7.47289 0.180459 7.36606 0.282503 7.28113L7.0626 0.501039C7.26806 0.295581 7.50776 0.192852 7.7817 0.192852C8.05564 0.192852 8.29534 0.295581 8.5008 0.501039C8.70626 0.706497 8.80899 0.950648 8.80899 1.23349C8.80899 1.51634 8.70626 1.76015 8.5008 1.96492L3.49278 6.97295L14.9727 6.97295C15.2638 6.97295 15.5079 7.07157 15.7052 7.26881C15.9024 7.46604 16.0007 7.70985 16 8.00023Z"
				fill="#AE8C8E"
			/>
		</svg>
		<slot />
	</button>
</template>

<style scoped>
.button-back {
	display: flex;
	align-items: center;
	gap: 20px;

	padding: 16px 40px;
	background: transparent;
	border-radius: 100px;
	border: 2px solid #ae8c8e;

	color: #ae8c8e;
	text-align: center;
	font-family: 'BrisaSans';
	font-size: 24px;
	font-weight: 700;

	white-space: nowrap;
}

@media (max-width: 1000px) {
	.button-back {
		font-size: 20px;
		padding: 12px 30px;
	}
}

@media (max-width: 750px) {
	.button-back {
		padding: 6px 18px;
		font-size: 16px;
		gap: 10px;
		border-radius: 10px;
	}
	.button-icon{
		width: 12px;
		height: auto;
	}
}
</style>
