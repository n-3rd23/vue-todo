<template>
  	<div class="container">
  		<div class="text-center">
  			<h3>To Do App</h3>
  			<input v-model="toDoText" class="p-2 w-50" placeholder="Add Item" type="text">
  			<button @click="addNewTask" class="btn btn-primary mx-3 w-25">ADD</button>
  		</div>
  		<div class="my-3">
  			<span class="mx-3">Not Completed</span>
  			<button @click="isNotCompleteOpen = !isNotCompleteOpen" class="btn btn-sm btn-secondary">{{ isNotCompleteOpen ? 'Hide' : 'Show' }}</button>
  		</div>
	  	<div v-if="isNotCompleteOpen" class="row justify-content-center my-3">
	  		<ToDoItem 
          v-for="item in notCompletedTodos" 
          :key="item.id" 
          @dblclick="completeTask({id:item.id})" 
          class="mx-3 my-3 col-md-4" 
          :text="item.text"
          @delClick="deleteTask(item.id)"
        />
	  	</div>
	  	<div class="my-3">
  			<span class="mx-3">Completed</span>
  			<button @click="isCompleteOpen = !isCompleteOpen" class="btn btn-sm btn-secondary">{{ isCompleteOpen ? 'Hide' : 'Show' }}</button>
  		</div>
	  	<div v-if="isCompleteOpen" class="row justify-content-center my-3">
	  		<ToDoItem 
          v-for="item in completedTodos" 
          :key="item.id" 
          @dblclick="completeTask({id:item.id})" 
          class="mx-3 my-3 col-md-4 bg-success text-white" 
          :text="item.text"
          @delClick="deleteTask(item.id)"
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
  		toDoText: '',
      isNotCompleteOpen: true,
      isCompleteOpen: true
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
  		'completeTask',
      'addTask',
      'removeTask'
  	]),
    addNewTask() {
      this.addTask({text:this.toDoText})
      this.toDoText = ''
    },
    deleteTask(taskId) {
      this.removeTask({id:taskId})
    }
  }
};

</script>

<style>
	a {
		text-decoration: none;
	}
</style>
