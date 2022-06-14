<template>
	<view class="content animate__animated animate__fadeIn	">
		<relieve-navigationbar></relieve-navigationbar>
		<view class="home">
			<image class="home_sun" src="../../static/home_sun.png"></image>

			<text class="home_start_text">开始记录吧</text>

			<image class="home_sunny_doll" src="../../static/home_sunny_doll.png"></image>


			<!-- <view class="home_float_action_button">+</view> -->
			<!-- <relieve-floatactionbutton style="position: absolute;left: 40%;bottom: 10%;"></relieve-floatactionbutton> -->
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

		}
	}
</script>

<style>
	.content {
		height: 848px;
		background: linear-gradient(180deg, rgba(162, 215, 220, 0.5) 0%, rgba(162, 215, 220, 0) 100%);
		background-blend-mode: darken;
	}

	.home {
		/* padding-top: 7rem; */
		width: 100%;
		margin-top: 1rem;
		position: relative;
	}

	.home_sun {
		position: absolute;
		width: 70px;
		height: 70px;
		left: 5.84%;
	}

	.home_start_text {
		/* FIXME_ABSOLUTE */
		position: absolute;
		top: 150px;
		left: 40%;
		font-family: 'Imprima';
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		color: #242424;
	}

	.home_sunny_doll {
		position: absolute;
		width: 414px;
		height: 183px;
		left: 7px;
		top: 200px;
	}

	.home_float_action_button {
		width: 65px;
		height: 65px;

		/* 扁平 */

	}
</style>
