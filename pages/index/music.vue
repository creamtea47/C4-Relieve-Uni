<template>
	<view>
		<relieve-navigationbar @clickLeft="back" leftIcon="../../static/back.png" title="独享"></relieve-navigationbar>
	</view>
	<view class="home">
		<!-- <view class="switch" @click="sentence">
			<text class="text_input">音</text>
			<image src="../../static/conversion.png" class="image_setting2"></image>
		</view> -->
		<image src="../../static/music.png" class="center"></image>
		<view class="center" style="margin-top: 2rem;align-items: center;top: 500px;height: 80px;">
			<text class="text_center" style="font-size: 10px;color:#A0A0A0;">00:12/02:55</text>
			<text class="text_center" style="font-size: 20px;top: 20px;">Death bed</text>
			<text class="text_center" style="font-size: 10px;top: 50px;color:#A0A0A0;">powfu ft (Santamonika)</text>
		</view>
		<view class="center1">
			<view class="radio">
				<image src="../../static/share2.png" class="image_setting1"></image>
			</view>
			<view class="radio">
				<image src="../../static/Vector.png" class="image_setting1"></image>
			</view>
			<view class="radio">
				<image src="../../static/black_love.png" class="image_setting1"></image>
			</view>

		</view>
	</view>
</template>
<script>
	export default {
		methods: {
			sentence() {
				uni.navigateTo({
					url: "sentence"
				})
			},
			back(){
				uni.navigateBack({					delta: 1				});
			}
		}
	}
</script>
<style>
	.switch {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.switch * {
		padding: .3rem;
	}

	.home {
		padding-top: 120px;
	}

	.center1 {
		margin-top: 1.5rem;
		display: flex;
		padding: 0 5rem;
		justify-content: space-evenly;
		align-items: flex-end;
	}

	.radio {
		width: 60px;
		height: 60px;
		left: 20px;
		background: #FFFFFF;
		box-shadow: -7px 7px 14px rgba(224, 224, 224, 0.2), 7px -7px 14px rgba(224, 224, 224, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.5s all;

	}

	.radio:nth-child(2) {
		width: 80px;
		height: 80px;
		left: 20px;
		background: #FFFFFF;
		box-shadow: -7px 7px 14px rgba(224, 224, 224, 0.2), 7px -7px 14px rgba(224, 224, 224, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.5s all;

	}

	.radio:hover {
		transition: 0.5s all;
		transform: scale(1.2);
	}

	.text_center {
		align-items: center;
	}

	.center {
		top: 20px;
		width: 250px;
		height: 250px;
		display: flex;
		margin: 0 auto;
		justify-content: center;
		flex-direction: column;
	}

	* {
		/* border: 1px solid red */
	}

	.image_setting1 {
		width: 26px;
		height: 26px;
		transform: scale(0.8);
	}


	.image_setting2 {
		margin-right: 20px;
		width: 20px;
		height: 20px;
	}

	.text_input {
		font-family: 'Sansation';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 18px;
		color: #000000;
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
