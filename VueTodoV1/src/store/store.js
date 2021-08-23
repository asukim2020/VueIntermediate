import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);

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

export const store = new Vuex.Store({
   state: {
      todoItems: storage.fetch()
   },
   getters: getters,
   mutations: mutations
})