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
        <transition-group :name="isItemDeleted ? 'del' : 'todo'">
  	  		<ToDoItem 
            v-for="item in notCompletedTodos" 
            :key="item.id" 
            @dblclick="toggleTask($event,item.id)" 
            class="mx-3 my-3 col-md-4" 
            :text="item.text"
            @delClick="deleteTask(item.id)"
          />
      </transition-group>
	  	</div>
	  	<div class="my-3">
  			<span class="mx-3">Completed</span>
  			<button @click="isCompleteOpen = !isCompleteOpen" class="btn btn-sm btn-secondary">{{ isCompleteOpen ? 'Hide' : 'Show' }}</button>
  		</div>
	  	<div v-if="isCompleteOpen" class="row justify-content-center my-3">
        <transition-group :name="isItemDeleted ? 'del' : 'todo'">
	  		<ToDoItem 
          v-for="item in completedTodos" 
          :key="item.id" 
          @dblclick="toggleTask($event,item.id)" 
          class="mx-3 my-3 col-md-4 bg-success text-white" 
          :text="item.text"
          @delClick="deleteTask(item.id)"
        />
      </transition-group>
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
      isCompleteOpen: true,
      isItemDeleted: false
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
      if(!this.toDoText.length <= 0 ) {
        this.addTask({text:this.toDoText})
        this.toDoText = ''
      }
    },
    deleteTask(taskId) {
      this.removeTask({id:taskId})
      this.isItemDeleted = true
    },
    toggleTask(e, taskId) {
      this.isItemDeleted = false
      this.completeTask({id:taskId})
    }
  }
};

</script>

<style scoped>
	a {
		text-decoration: none;
	}
  .todo-enter-from {
    opacity: 0;
    transform: translateY(20%);
  }
  .todo-enter-to {
    opacity: 1;
  }
  .todo-enter-active,
  .todo-leave-active,
  .del-leave-active {
    transition: all .5s;
  }
  .todo-leave-from {
    opacity: 1;
  }
  .todo-leave-to {
    opacity: 0;
    transform: translateY(20%);
  }
  .del-leave-to {
    transform:scale(0.5,0.5);
    opacity: 0;
  }
</style>

<!-- .enter-from  -->
<!-- .enter-to  -->
<!-- .enter-active  -->
