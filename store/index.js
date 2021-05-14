import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      toDo: [
        {
          id: 1, 
          text: 'todo 1',
          done: false
        },
        {
          id: 2, 
          text: 'todo 2',
          done: true
        },
        {
          id: 3, 
          text: 'todo 3',
          done: false
        },
        {
          id: 4, 
          text: 'todo 4',
          done: true
        },
        {
          id: 5, 
          text: 'todo 5',
          done: true
        },
        
      ]
    }
  },
  mutations: {
  	
    // mutation to change done property
    completeTask (state,payload) {
      state.toDo.forEach(item => {
        if(item.id === payload.id) {
          item.done = !item.done // toggles the value of done
        }
      })
    },

    addTask(state, payload) {
      state.toDo.push(
        {
          id: Math.random(),
          done: false,
          text: payload.text
        }
      )
    },

    removeTask(state, payload) {
      const filterdState = state.toDo.filter(item => {
        return item.id !== payload.id
      })
      state.toDo = filterdState
    }
  },

  // getters 
  getters: {

    // returning completed tasks
    completedTodos(state) {
      return state.toDo.filter(item => {
        return item.done
      })
    },

    // returning cot completed tasks
    notCompletedTodos(state) {
      return state.toDo.filter(item => {
        return item.done == false
      })
    }
  }
})

export default store