<template>
  	<div class="container">
  		<div class="text-center">
  			<h3>To Do App</h3>
  			<input v-model="toDoText" class="p-2 w-50" placeholder="Add Item" type="text">
  			<button class="btn btn-primary mx-3 w-25">ADD</button>
  		</div>
  		<div class="my-3">
  			<span class="mx-3">Not Completed</span>
  			<button class="btn btn-sm btn-secondary">Close</button>
  		</div>
	  	<div class="row justify-content-center my-3">
	  		<ToDoItem 
          v-for="item in notCompletedTodos" 
          :key="item.id" 
          @dblclick="completeTask({id:item.id})" 
          class="mx-3 my-3 col-md-4" 
          :text="item.text"
        />
	  	</div>
	  	<div class="my-3">
  			<span class="mx-3">Completed</span>
  			<button class="btn btn-sm btn-secondary">Close</button>
  		</div>
	  	<div class="row justify-content-center my-3">
	  		<ToDoItem 
          v-for="item in completedTodos" 
          :key="item.id" 
          @dblclick="completeTask({id:item.id})" 
          class="mx-3 my-3 col-md-4 bg-success text-white" 
          :text="item.text"
        />
	  	</div>
  </div>
</template>

<script>
import ToDoItem from '../components/ToDoItem.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Home',
  data() {
  	return {
  		toDoText: ''
  	}
  },
  components: {
  		ToDoItem
  },
  computed: {
  	// receving getters from store
  		...mapGetters([
  			'completedTodos',
  			'notCompletedTodos'
  		])
  },
  methods: {
  	...mapMutations([
  		'completeTask'
  	])
  }
};

</script>

<style>
	a {
		text-decoration: none;
	}
</style>
