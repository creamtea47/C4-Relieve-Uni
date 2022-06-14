<template>
	<view>

		<relieve-navigationbar @clickLeft="back" @clickRight="search" leftIcon="../../static/back.png"
			rightIcon="../../static/select.png" title="我的">
		</relieve-navigationbar>

		<uni-grid column="2" :showBorder="false" borderColor="white">
			<uni-grid-item :index="index" v-for="(item,index) in sunny_doll_imgs" @click="onClick3()">
				<!-- <view class="grid-item-box-row" @click="onClick3"> -->
				<view class="grid-item-box-row">
					<image class="grid-item-image" :src="item"></image>
					<view class="grid-item-box_layout">
						<image class="grid-item-image2" src="../../static/smile1.png"></image>
						<text class="grid-item-box-text">幸运用户01</text>
						<image class="grid-item-image2" src="../../static/red_love.png"></image>
					</view>
				</view>
			</uni-grid-item>
		</uni-grid>

		<view>
			<relieve-floatactionbutton msg="#" textStyle="font-size:30px"
				style="position: fixed;right: 5.5%;bottom: 5%;" @click="onClick1">
			</relieve-floatactionbutton>
			<relieve-floatactionbutton msg="👤" textStyle="font-size:25px"
				style="position: fixed;right: 5.5%;bottom: 15%;" @click="onClick2">
			</relieve-floatactionbutton>
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
					"../../static/doll4.png",
					"../../static/doll5.png",
					"../../static/doll6.png",
					"../../static/doll7.png",
					"../../static/doll8.png",
					"../../static/doll9.png",
				]
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			search() {
				uni.navigateTo({
					url: "search"
				})
			},
			onClick1() {

				// uni.navigateTo({
				// 	url: "person"
				// })
			},

			onClick2() {

				uni.navigateTo({
					url: "person"
				})
			},

			onClick3() {
				uni.navigateTo({
					url: 'world_details',
					success: res => {
						console.log("success")
					},
					fail: (e) => {
						console.log(e)
					},
					complete: (e) => {
						console.log(e)
					}
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
		align-items: center;
		justify-content: center;
		padding: 15px 0;
		border-radius: 10%;
		margin-top: 120px;
	}
</style>
