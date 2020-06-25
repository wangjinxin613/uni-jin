<template>
	<view>
		<view class="info">
			<view class="name">
				uni-jin
			</view>
			<view class="descripe">
				一些uni-app的组件
			</view>
		</view>
		<view class="list">
			<navigator url="../jin-attachment/index" class="single">
				附件上传组件  jin-attachment
			</navigator>
			<navigator url="../jin-edit/index" class="single">
				基于editor的富文本编辑器 jin-edit
			</navigator>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less" scoped>
	.info{
		width: 90%;
		background: rgb(240, 240, 240);
		padding: 40rpx 40rpx;
		box-sizing: border-box;
		margin: 40rpx auto;
		border-radius: 10rpx;
		
		& .name{
			font-size: 48rpx;
			color: #333;
		}
		
		& .descripe{
			font-size: 30rpx;
			color: #999;
			margin-top: 20rpx;
		}
	}
	
	.list{
		.info;
		padding: 0;
		
		.single{
			font-size: 32rpx;
			border-bottom: 1px solid #ccc;
			padding: 30rpx 50rpx;
			color: #666;
			
			&:last-of-type{
				border: 0;
			}
		}
	}
</style>
