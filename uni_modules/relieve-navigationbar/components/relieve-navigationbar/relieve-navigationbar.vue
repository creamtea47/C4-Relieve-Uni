<template>
	<view class="navigation-bar animate__animated animate__pulse" style="padding-top: 2rem;">
		<image @tap="onClickLeft" :style="leftIconStyle" :src="leftIcon"></image>
		<text>{{title}}</text>
		<image @click="onClickRight" :style="rightIconStyle" :src="rightIcon"></image>
	</view>
</template>
<script>
	export default {
		emits:['clickLeft', 'clickRight'],
		props: {
			leftIcon: {
				type: String,
				value: ''
			},
			leftIconStyle:{
				type:String,
				value:''
			},
			rightIconStyle:{
				type:String,
				value:''
			},
			rightIcon: {
				type: String,
				value: ''
			},
			title:{
				type:String,
				value:""
			}
		},
		methods:{
				onClickLeft() {
					this.$emit("clickLeft");
				},
				onClickRight() {
					this.$emit("clickRight");
				},
		}
	}
</script>
<style scoped>
	/* tabbar */
	* {
		/* border:1px solid red */
	}

	.navigation-bar {
		position: fixed;
		z-index: 100;
		display: block;
		box-sizing: border-box;
		width: 100%;
		height: 100px;
		padding: 0 2rem;
		left: 0px;
		top: 0px;
		background: #FFFFFF;
		border: 1px solid #FFFFFF;
		box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.navigation-bar image {
		/* rv_img20 2 */
		box-sizing: border-box;
		width: 2rem;
		height: 2rem;
	}

	.navigation-bar text {
		font-family: 'Imprima';
		font-style: normal;
		font-weight: bold;
		font-size: 25px;
		line-height: 35px;
		/* identical to box height */
		display: flex;
		align-items: center;
		letter-spacing: 0.2px;
		color: #000000;
	}

/* 	.border {
		border: 2px solid #000000;
		border-radius: 100%;
	} */
</style>
