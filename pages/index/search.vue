<template>
	<view>
		<relieve-navigationbar @clickLeft="back" leftIcon="../../static/back.png" title="我的"></relieve-navigationbar>

		<view class="grid-item-box-row">
			<!-- 基本用法 -->
			<uni-search-bar placeholder="搜索你想要的表情吧"></uni-search-bar>

			<view class="layoutwwww">
				<text class="top-text">热门推荐</text>
			</view>
			<uni-grid column="3" :showBorder="false" borderColor="white">
				<uni-grid-item :index="index" v-for="(item,index) in sunny_doll_imgs">

					<view class="grid-item-box-row2">

						<image class="grid-item-image" :src="item"></image>
						<view class="grid-item-box_layout">
						</view>

					</view>
				</uni-grid-item>
			</uni-grid>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				sunny_doll_imgs: [
					"../../static/doll1.png",
					"../../static/doll2.png",
					"../../static/doll3.png",
					"../../static/doll4.png"
				]
			}
		},
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
	.grid-item-box-text {
		font-size: 10px;
		margin-left: 10px;
	}

	.grid-layout {
		margin-top: 120px;
	}

	.grid-item-image {
		width: 100px;
		height: 100px;
	}

	.grid-item-image2 {
		width: 20px;
		height: 20px;
	}

	.grid-item-box_layout {
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.grid-item-box-row {
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		border-radius: 10%;
		margin-top: 110px;
	}


	.grid-item-box-row2 {
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
	}

	.top-text {
		margin-top: 120px;
		font-size: 20px;
		font-weight: bold;
	}

	.layoutwwww {
		margin-left: 5%;

	}
</style>
