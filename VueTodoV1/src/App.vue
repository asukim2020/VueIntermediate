<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></todo-list>
    <todo-footer v-on:clearAll="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) {
      var obj = {completed: false, item: todoItem}
      // 개발자모드 -> Application -> LocalStorage 에서 확인 가능
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    removeOneItem: function(todoItem, index) {   
      console.log('removeItem');   
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleOneItem: function(todoItem, index) {// eslint-disable-line no-unused-vars
      this.todoItems[index].completed = !this.todoItems[index].completed
      // todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems: function() {
      localStorage.clear()
      this.todoItems = []
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for(var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          var obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
          this.todoItems.push(obj)
          console.log(obj)
          // this.todoItems.push(localStorage.key(i))
        }
        // console.log(localStorage.key(i));
      }
    }
  },

  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
