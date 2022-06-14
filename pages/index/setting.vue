<template>
	<view>
		<relieve-navigationbar 
		leftIcon="../../static/back.png" 
		@clickLeft="back"
		title="我的" ></relieve-navigationbar>
		<view>
			<image class="smile" src="../../static/smile1.png"></image>
			<text class="text_name">DullFan</text>
			<text class="text_input">希望明天过的更好</text>

		</view>
		<view class="view_card">
			<text class="text_password">密码</text>
			<image src="../../static/Switch.png" class="image_setting"></image>
			<view class="underline"></view>
			<text class="text_password" style="top: 50px;">通知</text>
			<image src="../../static/Switch.png" class="image_setting" style="top: 50px;"></image>
		</view>
		<view class="view_card1" style="margin-top: 130px;">
			<text class="text_password">我的收藏</text>
			<image src="../../static/file.png" class="image_setting1"></image>
			<view class="underline"></view>
			<text class="text_password" style="top: 52px;">我的喜欢</text>
			<image src="../../static/love.png" class="image_setting1" style="top: 50px;"></image>
			<view class="underline1"></view>
			<text class="text_password" style="top: 102px;">图表视图</text>
			<image src="../../static/view.png" class="image_setting1" style="top: 100px;"></image>
		</view>
		<view class="view_card1" style="margin-top: 310px;">
			<text class="text_password">偏好设置</text>
			<image src="../../static/set_up.png" class="image_setting1"></image>
			<view class="underline"></view>
			<text class="text_password" style="top: 52px;">样式库</text>
			<image src="../../static/ghost.png" class="image_setting1" style="top: 50px;"></image>
			<view class="underline1"></view>
			<text class="text_password" style="top: 102px;">导出数据</text>
			<image src="../../static/could.png" class="image_setting1" style="top: 100px;"></image>
			<image></image>
		</view>
		<view class="view_card" style="top:720px ;">
			<text class="text_password">鼓励和建议</text>
			<image src="../../static/good.png" class="image_setting1"></image>
			<view class="underline"></view>
			<text class="text_password" style="top: 50px;">更好的使用</text>
			<image src="../../static/doubt.png" class="image_setting1" style="top: 50px;"></image>
		</view>
		<view class="view_card_back">
			<text style="
			font-size: 20px;
			">退出</text>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			back(){
				uni.navigateBack({					delta: 1				});
			}
		}
	}
</script>

<style scoped>
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
		width: 90%;
		opacity: 0.3;
		top: 55px;
		margin-left: 20px;
		border: 1px solid #A5A5A5;
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
		width: 40px;
		height: 20px;
		margin-top: 20px;
		margin-left: 85%;
		float: right;
	}

	.image_setting1 {
		position: absolute;
		width: 26px;
		height: 26px;
		margin-top: 20px;
		margin-left: 86.5%;
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
		left: 112px;
		top: 154px;
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
		width: 90%;
		height: 109px;
		margin-left: 20px;
		top: 232px;
		background: #FFFFFF;
		box-shadow: -7px 7px 14px rgba(224, 224, 224, 0.2), 7px -7px 14px rgba(224, 224, 224, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		border-radius: 10px;
	}

	.view_card1 {
		position: absolute;
		width: 90%;
		height: 159px;
		margin-left: 20px;
		top: 232px;
		background: #FFFFFF;
		box-shadow: -7px 7px 14px rgba(224, 224, 224, 0.2), 7px -7px 14px rgba(224, 224, 224, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		border-radius: 10px;
	}
</style>
