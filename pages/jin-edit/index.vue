<template>
	<view>
		<jinEdit placeholder="请输入内容" @editOk="editOk" uploadFileUrl="https://jsonplaceholder.typicode.com/posts/" ></jinEdit> 
	</view>
</template>

<script>
import jinEdit from '../../components/jin-edit/jin-edit.vue';
export default {
	data() {
		return {
			
		}
	},
	components: {
		jinEdit
	},
	methods: {
		editOk(res) {
			console.log(res);
		}
	}
}
</script>

<style>
</style>
