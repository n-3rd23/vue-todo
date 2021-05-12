<template>
	<div :class="class" class="border p-3 rounded position-relative">
		{{ text }}
		<button class="btn btn-sm btn-danger position-absolute del-btn">DELETE</button>
	</div>
</template>

<script>
	export default {
		name: 'ToDoItem',
		props: ['class', 'text']
	};
</script>

<style scoped>
	.del-btn {
		bottom: 0;
		right: 0;
		margin: 10px 10px;
	}
</style>