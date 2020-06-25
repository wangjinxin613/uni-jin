<template>
	<view style="padding: 30rpx;">
		<Attachment mode="create" :canUploadFile="true" :uploadFileUrl="uploadFileUrl" :heaer="header" :showProcess="true" :attachmentList.sync="attachmentList" @uploadSuccess="uploadSuccess" :limit="2"></Attachment>
	</view>
</template>

<script>
import Attachment from '../../components/jin-attachment/jin-attachment.vue';
export default {
	data() {
		return {
			uploadFileUrl: 'http://localhost:8080', //替换成你的后端接收文件地址
			header: {
				// 如果需要header，请上传
			},
			attachmentList: [
				// {
				// 	url: 'https://avatar-static.segmentfault.com/151/147/1511478734-593e62d4d3076_big64',
				// 	type: 'image',
				// 	fileName: 'xxx.png'
				// },
				// {
				// 	url: 'https://avatar-static.segmentfault.com/820/689/820689728-59e9b54a71fdc_huge256',
				// 	type: 'image',
				// 	fileName: 'xxx.png'
				// },
				// {
				// 	url: 'https://avatar-static.segmentfault.com/820/689/820689728-59e9b54a71fdc_huge256',
				// 	type: 'image',
				// 	fileName: 'xxx.png'
				// },
				// {
				// 	url: 'https://avatar-static.segmentfault.com/820/689/820689728-59e9b54a71fdc_huge256',
				// 	type: 'image',
				// 	fileName: 'xxx.png'
				// },
				// {
				// 	url: 'https://avatar-static.segmentfault.com/820/689/820689728-59e9b54a71fdc_huge256',
				// 	type: 'image',
				// 	fileName: 'xxx.png'
				// },
				// {
				// 	type: 'file',
				// 	fileName: '这个组件真棒.doc',
				// 	url: 'https://avatar-static.segmentfault.com/820/689/820689728-59e9b54a71fdc_huge256'
				// }
			]
		}
	},
	components: {
		Attachment
	},
	methods:{
		uploadSuccess(result) {
			if(result.statusCode == 200) {
				//上传成功的回调处理
				uni.showToast({
					title: '上传成功',
					icon: 'none'
				});
			}else{
				uni.showToast({
					title: '上传失败',
					icon: 'none'
				});
			}
		}
	}
	
}
</script>

<style>
</style>
