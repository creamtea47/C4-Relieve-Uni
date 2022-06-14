<template>
	<view class="home">
		<relieve-navigationbar leftIcon="../../static/back.png" title="独享" rightIcon="">
		</relieve-navigationbar>
	</view>
	<view class="switch" @click="sentence">
		<text class="text_input">句</text>
		<image src="../../static/conversion.png" class="image_setting2"></image>
	</view>
	<view class="center music card ">
	
		<text>&nbsp;</text>
		<text>&nbsp;</text>
		<text style="top: 15px;">一个人就是一片荒原，</text>
		<text>偶尔有房客，有雷声，有春暖花开</text>
		<text>&nbsp;</text>
		<text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《摇摇晃晃的人间》</text>
		<text>&nbsp;</text>
		<text
			style="font-size: 15px;color: #A0A0A0;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——余秀华</text>
	</view>
	
</template>
<script>
</script>
<style>
	.card {
		/* 扁平 */
		box-shadow: -7px 7px 14px rgba(224, 224, 224, 0.2), 7px -7px 14px rgba(224, 224, 224, 0.2), -7px -7px 14px rgba(255, 255, 255, 0.9), 7px 7px 18px rgba(224, 224, 224, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(224, 224, 224, 0.5);
		border-radius: 10px;
		font-size: 25px;
	}

	.center1 {
		margin-top: 17rem;
		display: flex;
		padding: 0 5rem;
		justify-content: space-around;
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
	
	.switch {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	
	.switch * {
		padding: .3rem;
	}
	

	.radio:hover {
		transition: 0.5s all;
		transform: scale(1.2);
	}

	.text_center {
		/* position: absolute; */
		align-items: center;
	}

	.center {
		top: 250px;
		width: 90%;
		height: 300px;
		position: relative;
		margin: 0 5%;
		display: flex;
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
		position: absolute;
		width: 26px;
		height: 26px;
		margin-top: 24%;
		float: right;
	}

	.text_input {
		position: absolute;
		width: 128px;
		height: 18px;
		margin-top: 120px;
		margin-left: 83%;
		font-family: 'Sansation';
		font-style: normal;
		font-weight: 400;
		font-size: 25px;
		line-height: 18px;
		color: #000000;
		opacity: 1;
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
