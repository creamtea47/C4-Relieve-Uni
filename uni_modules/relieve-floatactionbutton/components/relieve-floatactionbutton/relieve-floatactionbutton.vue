<template>
	<view class="fab" :style="style">
		<text :style="textStyle">{{msg}}</text>
	</view>
</template>
<script>
	export default {
		props: {
			style: {
				type: String,
				value: ''
			},
			msg: {
				type: String,
				value: '+',
			},
			textStyle: {
				type:String,
				value:''
			}
		}
	}
</script>
<style scoped>
	.fab {
		position: fixed;
		box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		filter: drop-shadow(-7px 7px 14px rgba(224, 224, 224, 0.2)) drop-shadow(7px -7px 14px rgba(224, 224, 224, 0.2)) drop-shadow(-7px -7px 14px rgba(255, 255, 255, 0.9)) drop-shadow(7px 7px 18px rgba(224, 224, 224, 0.9));
		width: 60px;
		height: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40px;
		font-weight: 100;
		color: white;
		border-radius: 100%;
		background: #DAEFF1;
	}

	.fab text {}
</style>
