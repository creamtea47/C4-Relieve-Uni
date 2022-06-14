<template>
	<view class="fab" :style="style">+</view>
</template>
<script>
	export default {
		props: {
			style: {
				type: String,
				value: ''
			},
		}
	}
</script>
<style>
	.fab {
		box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		filter: drop-shadow(-7px 7px 14px rgba(224, 224, 224, 0.2)) drop-shadow(7px -7px 14px rgba(224, 224, 224, 0.2)) drop-shadow(-7px -7px 14px rgba(255, 255, 255, 0.9)) drop-shadow(7px 7px 18px rgba(224, 224, 224, 0.9));
		width: 75px;
		height: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
		font-weight: 100;
		color: white;
		border-radius: 100%;
		background: #DAEFF1;
	}
</style>
