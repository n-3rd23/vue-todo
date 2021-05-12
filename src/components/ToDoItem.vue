<template>
	<div :class="class" class="border p-3 wrapper rounded position-relative">
		{{ text }}
		<div class="hover-text position-absolute py-3 d-none">
			Double Click to toggle
			<button @click="onDelClick" class="btn btn-sm btn-danger position-absolute del-btn">DELETE</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ToDoItem',
		props: ['class', 'text'],
		methods: {
			onDelClick() {
				this.$emit('delClick')
			}
		}
	};
</script>

<style scoped>
	.del-btn {
		bottom: 0;
		right: 0;
		margin: 10px 10px;
	}
	.hover-text {
		background-color: rgba(0,0,0,0.7);
		top: 0;
		bottom: 0;
		left:0;
		right: 0;
		color: white;
		text-align: center;
		cursor: pointer;
	}
	.wrapper:hover .hover-text {
		display: block !important;
	}
</style>