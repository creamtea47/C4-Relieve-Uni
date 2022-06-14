<template>
	<view class="home">
		<relieve-navigationbar leftIcon="../../static/back.png" title="娃娃详情" @clickLeft="onClick1()">
		</relieve-navigationbar>

		<view class="grid-item-box-row">

			<view class="grid-item-box_layout">
				<image class="grid-item-image2" src="../../static/smile1.png"></image>
				<view class="column-layout">
					<text class="text01">幸运用户01</text>
					<text class="text02">36分钟前</text>
				</view>
			</view>

			<image src="../../static/doll2.png"></image>
			<text class="text03">每次看到自己创造的晴天娃娃那么多人喜欢,我的心情以下子就好了</text>

			<view class="container">
				<view class="bottom-layout">
					<view class="bottom-layout2">
						<image src="../../static/download.png" class="grid-item-image3"></image>
					</view>
					<view class="bottom-layout2">
						<image src="../../static/share.png" class="grid-item-image3"></image>
					</view>
					<view class="bottom-layout2">
						<image src="../../static/red_love.png" class="grid-item-image3"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			onClick1() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style scoped>
	.grid-item-box-row {
		min-height: 100%;
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		padding: 15px 0;
		margin-left: 10%;
		margin-right: 10%;
		border-radius: 10%;
		margin-top: 120px;
	}

	.column-layout {
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}


	.grid-item-box_layout {
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: flex-start;
		justify-content: left;
	}

	.grid-layout {
		margin-top: 120px;
	}

	.grid-item-image {
		width: 100px;
		height: 100px;
	}

	.grid-item-image2 {
		width: 35px;
		height: 35px;
	}

	.grid-item-image3 {
		width: 30px;
		height: 30px;
	}

	.text01 {
		margin-left: 10px;
		color: black;
		font-size: 18px;
	}

	.text02 {
		margin-left: 10px;
		color: gray;
		font-size: 14px;
	}

	.text03 {
		color: gray;
		font-size: 14px;
	}

	.text04 {
		color: black;
		font-size: 10px;
	}
	.home {
		padding-top: 120px;
	}

	.container {

		bottom: 1px;
	}

	.bottom-layout {
		margin-top: 1.5rem;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
	}

	.bottom-layout * {
	}

	.test1 {
		flex: 1;
	}
</style>
