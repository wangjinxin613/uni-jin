<template>
	<view class="content">
        <edit paddingBottom="20" ref="edit" placeText="写点什么吧..."></edit>
	</view>
</template>

<script>
	import edit from '../../components/wjx-edit/wjx-edit.vue';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			edit
		},
		onNavigationBarButtonTap: function(e) {
			var that = this;  
			//子组件的data
			var editData = this.$refs.edit.submit(); 
			
			console.log("内容为" + JSON.stringify(editData.editItems));
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title:'富文本编辑器组件'
			})
		},
		methods: {

		}
	}
</script>

<style>
	
</style>
