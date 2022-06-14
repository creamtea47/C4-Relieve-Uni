<template>
	<view>
		<!-- <relieve-navigationbar-my></relieve-navigationbar-my> -->

		<relieve-navigationbar @clickLeft="back" leftIcon="../../static/back.png" title="我的"></relieve-navigationbar>
		<view>
			<image class="smile" src="../../static/smile1.png"></image>
			<text class="text_name">DullFan</text>
			<text class="text_input">希望明天过的更好</text>
		</view>
		<text class="tab">作品</text>
		<view class="underline"></view>
		<view class="view_card">
			<image src="../../static/doll.png" class="image_setting"></image>
			<image src="../../static/hear_image.png" class="image_setting1"></image>
			<text style="position: absolute;
		margin-top: 77%;
		margin-left: 28%;
		float: right;">like you</text>
			<image src="../../static/red_love.png" class="image_setting2"></image>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	.tab {
		font-family: 'Imprima';
		font-style: normal;
		font-size: 25px;
		line-height: 35px;
		/* identical to box
			height */
		display: flex;
		letter-spacing: 0.2px;
		color: #000000;
		position: absolute;
		left: 45%;
		top: 250px;
	}

	.view_card_back {
		padding-top: 20px;
		position: absolute;
		text-align: center;
		width: 90%;
		height: 50px;
		margin-left: 20px;
		top: 900px;
		background: #FFFFFF;
		box-shadow: -7px 7px 14px rgba(224, 224, 224, 0.2), 7px -7px 14px rgba(224, 224, 224, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		border-radius: 10px;
	}

	.underline {
		position: absolute;
		width: 50px;
		opacity: 0.8;
		top: 55px;
		left: 45%;
		border: 1px solid #000000;
		top: 290px;
	}

	.underline1 {
		position: absolute;
		width: 90%;
		opacity: 0.3;
		top: 109px;
		margin-left: 20px;
		border: 1px solid #A5A5A5;
	}

	.image_setting {
		position: absolute;
		width: 100px;
		height: 100px;
		margin-top: 20px;
		margin-left: 24%;
		float: right;
	}

	.image_setting1 {
		position: absolute;
		width: 26px;
		height: 26px;
		margin-top: 75%;
		margin-left: 10%;
		float: right;
	}

	.image_setting2 {
		position: absolute;
		width: 26px;
		height: 26px;
		margin-top: 75%;
		margin-left: 75%;
		float: right;
	}



	.text_password {
		position: absolute;
		margin: 20px;
		font-family: 'Sansation';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 18px;
		color: #181818;
	}

	.smile {
		position: absolute;
		width: 80px;
		height: 80px;
		left: 16px;
		top: 124px;
		border: 1px solid #000000;
		border-radius: 80px
	}

	.text_name {
		position: absolute;
		width: 71px;
		height: 22px;
		left: 111px;
		top: 124px;
		font-family: 'Sansation';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 22px;
		color: #000000;
	}

	.text_input {
		/* 希望明天过的更好 */
		position: absolute;
		width: 128px;
		height: 18px;
		left: 20px;
		top: 220px;
		font-family: 'Sansation';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 18px;
		/* identical to box height */
		color: #000000;
		opacity: 0.6;
	}

	.view_card {
		position: absolute;
		width: 184px;
		height: 184px;
		left: 20px;
		top: 311px;

		background: #FFFFFF;
		/* 扁平 */

		box-shadow: -7px 7px 14px rgba(224, 224, 224, 0.2), 7px -7px 14px rgba(224, 224, 224, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		border-radius: 10px;
	}
</style>
