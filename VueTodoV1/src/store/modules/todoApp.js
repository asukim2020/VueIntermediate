const storage = {
   fetch() {
      const arr = []
      if (localStorage.length > 0) {
         for(let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
               var obj = JSON.parse(localStorage.getItem(localStorage.key(i)))
               arr.push(obj)
               console.log(obj)
            }
         }
      }
      return arr
   },
}

const state = {
   todoItems: storage.fetch()
}

const getters = {
   storedTodoItems(state) {
      return state.todoItems
   }
}

const mutations = {
   addOneItem (state, todoItem) {
      const obj = {completed: false, item: todoItem}
      // 개발자모드 -> Application -> LocalStorage 에서 확인 가능
      localStorage.setItem(todoItem, JSON.stringify(obj))
      state.todoItems.push(obj)
   },
   removeOneItem (state, payload) {   
      localStorage.removeItem(payload.todoItem.item)
      state.todoItems.splice(payload.index, 1)
   },
   toggleOneItem(state, payload) {// eslint-disable-line no-unused-vars
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
      localStorage.removeItem(payload.todoItem.item)
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
   },
   clearAllItems(state) {
      localStorage.clear()
      state.todoItems = []
   }
}

export default {
   state,
   getters,
   mutations
}