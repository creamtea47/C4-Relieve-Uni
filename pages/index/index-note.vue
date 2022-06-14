<template>
	<view class="content animate__animated animate__fadeIn">
		<uni-nav-bar @clickLeft="onStartRecord()"></uni-nav-bar>
		<relieve-navigationbar leftIcon="../../static/back.png" @clickLeft="back()"  @clickRight="submit"
			rightIcon="../../static/navigationbar_address.png" title="周三"></relieve-navigationbar>
		<view class="home">
			<textarea placeholder="说说今天发生的事情吧"></textarea>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
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
					url: "index"
				})
			},
			back() {
				// uni.navigateBack({delta:1)})
				uni.redirectTo({
					url: "index-next"
				})
			},
			submit(){
				uni.showModal({
					title: '^ _ ^',
					content: '提交成功！',
					showCancel: false,
					cancelText: '',
					confirmText: 'OK',
					success: res => {
						uni.navigateTo({
							url:"index"
						})
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style scoped>
	* {
		/* border: 1px solid red; */
	}

	#editor {
		padding: 10px;
		width: 100%;
		height: 300px;
		background-color: #CCCCCC;
	}

	.home {
		display: flex;
		flex-direction: column;
		/* padding-top: 7rem; */
		width: 100%;
		padding-top: 80px;
		margin: 0 20px;
		/* position: relative; */
	}


</style>
