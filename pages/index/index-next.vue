<template>
	<view class="content animate__animated animate__fadeIn">
		<relieve-navigationbar leftIcon="../../static/back.png" title="释怀" @clickLeft="back"></relieve-navigationbar>
		<view class="home">
			<image class="home_sun" src="../../static/home_sun.png"></image>

			<text class="home_start_text">{{home_start_text}}</text>

			<image class="home_sunny_doll" src="../../static/home_sunny_doll.png" v-show="show_sunny_doll"></image>

			<uni-grid v-show="show_sunny_doll_grid" :column="3" :showBorder="false" borderColor="white">
				<uni-grid-item :index="index" v-for="(item,index) in sunny_doll_imgs">
					<view class="grid-item-box-row">
						<image class="grid-item-image" :src="item"></image>
					</view>
				</uni-grid-item>
			</uni-grid>
			<uni-fab horizontal="right" vertical="bottom" :pattern="fab_pattern" @fabClick="onStartRecord"></uni-fab>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wtitle: 'Hello',
				show_sunny_doll: false,
				show_float_action_button: true,
				show_sunny_doll_grid: true,
				home_start_text: "那天的心情是怎么样的呢",
				sunny_doll_imgs: [
					"../../static/sunny_doll_0.png",
					"../../static/sunny_doll_1.png",
					"../../static/sunny_doll_2.png",
					"../../static/sunny_doll_3.png",
					"../../static/sunny_doll_4.png",
					"../../static/sunny_doll_5.png",
					"../../static/sunny_doll_6.png",
					"../../static/sunny_doll_7.png",
				],
				fab_pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#007AFF',
					buttonColor: '#ffffff',
					iconColor: '#black'
				}
			}
		},
		onLoad() {

		},
		methods: {
			onStartRecord() {
				// this.show_float_action_button = false;
				// this.show_sunny_doll = false;
				// this.show_sunny_doll_grid = true;
				uni.navigateTo({
					url: "index-note"
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
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
