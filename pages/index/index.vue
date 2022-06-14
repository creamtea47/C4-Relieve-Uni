<template>
	<view class="content animate__animated animate__fadeIn	">
		<relieve-navigationbar leftIcon="../../static/navigationbar_person.png" @clickLeft="setting" @clickRight="music"
			title="释怀" rightIcon="../../static/Vector.png" rightIconStyle="transform:scale(0.7)">
		</relieve-navigationbar>
		<view class="home">
			<image class="home_sun" src="../../static/home_sun.png"></image>

			<text class="home_start_text">{{home_start_text}}</text>

			<image class="home_sunny_doll" src="../../static/home_sunny_doll.png" v-show="show_sunny_doll"
				@click="test"></image>

			<uni-grid v-show="show_sunny_doll_grid" :column="3" :showBorder="false" borderColor="white">
				<uni-grid-item :index="index" v-for="(item,index) in sunny_doll_imgs">
					<view class="grid-item-box-row">
						<image class="grid-item-image" :src="item"></image>
					</view>
				</uni-grid-item>
			</uni-grid>
			<relieve-floatactionbutton v-show="show_float_action_button"
				style="position: fixed;left: 42.5%;bottom: 10%;" @click="onStartRecord" msg="+">
			</relieve-floatactionbutton>
			<image src="../../static/drawing_board.png"
				style="position: fixed;width: 40px;height: 40px;right: 10%;bottom: 11%;" @click="world"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				show_sunny_doll: true,
				show_float_action_button: true,
				show_sunny_doll_grid: false,
				home_start_text: "开始记录吧",
				sunny_doll_imgs: [
					"../../static/sunny_doll_0.png",
					"../../static/sunny_doll_1.png",
					"../../static/sunny_doll_2.png",
					"../../static/sunny_doll_3.png",
					"../../static/sunny_doll_4.png",
					"../../static/sunny_doll_5.png",
					"../../static/sunny_doll_6.png",
					"../../static/sunny_doll_7.png",
				]
			}
		},
		onLoad() {

		},
		methods: {
			onStartRecord() {
				uni.navigateTo({
					url: "index-next"
				})
			},
			setting() {
				uni.navigateTo({
					url: "setting"
				})
			},
			music() {
				uni.navigateTo({
					url: "music"
				})
			},
			world() {

				uni.navigateTo({
					url: "world"
				})
			}
		}
	}
</script>

<style scoped>
	* {
		/* border: 1px solid red; */
	}

	.content {
		height: 848px;
		background: linear-gradient(180deg, rgba(162, 215, 220, 0.5) 0%, rgba(162, 215, 220, 0) 100%);
		background-blend-mode: darken;
	}

	.home {
		display: flex;
		flex-direction: column;
		/* padding-top: 7rem; */
		width: 100%;
		padding-top: 120px;
		/* position: relative; */
	}

	.home_sun {
		width: 70px;
		height: 70px;
		margin-left: 20px;
	}

	.home_start_text {
		text-align: center;
		font-family: 'Imprima';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		color: #242424;

	}

	.home_sunny_doll {
		width: 90%;
		height: 150px;
		margin: 0 auto;
		object-fit: cover;
	}

	.grid-item-image {
		width: 150px;
		height: 150px;
	}

	.grid-item-box-row {
		flex: 1;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 15px 0;
	}
</style>
