<template>
	<relieve-navigationbar @clickLeft="back" leftIcon="../../static/back.png" title="我的"></relieve-navigationbar>

	<view class="view_card" style="
		margin-left: 5%;width: 90%;height: 120px;
		margin-top: 120px;">
		<view style="width: 100%;height: 100%;" class="view">
			<image src="../../static/doll7.png" style="width: 60%;height: 60%;"></image>
			<text> 开心</text>
		</view>
		<view style="width: 10%;height: 100%;">
		</view>
		<view style="width: 100%;height: 100%;" class="view">
			<image src="../../static/doll3.png" style="width: 60%;height: 60%;"></image>
			<text> 伤心</text>
		</view>
		<view style="width: 10%;height: 100%;"></view>
		<view style="width: 100%;height: 100%;" class="view">
			<image src="../../static/doll1.png" style="width: 60%;height: 60%;"></image>
			<text> 忧虑</text>
		</view>
	</view>
	<view class="view_card" style="
		margin-left: 5%;width: 90%;height: 120px;
		margin-top: 20px;">
		<view style="width: 100%;height: 100%;" class="view">
			<image src="../../static/doll2.png" style="width: 60%;height: 60%;"></image>
			<text> 害羞</text>
		</view>
		<view style="width: 10%;height: 100%;">
		</view>
		<view style="width: 100%;height: 100%;" class="view">
			<image src="../../static/doll9.png" style="width: 60%;height: 60%;"></image>
			<text> 生气</text>
		</view>
		<view style="width: 10%;height: 100%;"></view>
		<view style="width: 100%;height: 100%;" class="view">
			<image src="../../static/doll8.png" style="width: 60%;height: 60%;"></image>
			<text> 受气</text>
		</view>
	</view>
	<view class="view_card" style="
		margin-left: 5%;width: 90%;height: 120px;
		margin-top: 20px;">
		<view style="width: 100%;height: 100%;" class="view">
			<image src="../../static/doll5.png" style="width: 60%;height: 60%;"></image>
			<text> 满足</text>
		</view>
		<view style="width: 10%;height: 100%;">
		</view>
		<view style="width: 100%;height: 100%;" class="view">
			<image src="../../static/doll6.png" style="width: 60%;height: 60%;"></image>
			<text> 棒！</text>
		</view>
		<view style="width: 10%;height: 100%;"></view>
		<view style="width: 100%;height: 100%;" class="">
		</view>
	</view>
	<!-- 	<view class="view_card">
			<image src="../../static/doll.png" class="image_setting"></image>
			<text style="position: absolute;
		margin-top: 77%;
		margin-left: 28%;
		float: right;">like you</text>
		</view> -->

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

<style>
	.view {
		background: #FFFFFF;
		/* 扁平 */
		box-shadow: -7px 7px 14px rgba(224, 224, 224, 0.2), 7px -7px 14px rgba(224, 224, 224, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly
	}

	.view_card {
		/* 扁平 */
		margin-top: 17rem;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
	}
</style>
