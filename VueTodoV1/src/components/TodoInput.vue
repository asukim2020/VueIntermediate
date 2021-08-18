<template>
  <div class="inputBox shadow">
     <input class="input" type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
     <!-- <button v-on:click="addTodo">add</button> -->
     <span class="addContainer" v-on:click="addTodo">
        <!-- https://fontawesome.com/v5.15/icons/plus?style=solid -->
        <i class="fas fa-plus addBtn"></i>
     </span>

      <modal v-if="showModal" @close="showModal = false">
      <!--
         you can use custom content here to overwrite
         default content
      -->
         <h3 slot="header">custom header</h3>
      </modal>
  </div>
</template>

<script>
import Modal from './common/modal.vue'
export default {
   data: function() {
      return {
         newTodoItem: "",
         showModal: false
      }
   },
   methods: {
      addTodo: function() {
         // console.log(this.newTodoItem)

         if (this.newTodoItem !== '') {
            this.$emit('addTodoItem', this.newTodoItem)
            this.clearInput()
         } else {
            alert('type sth')
         }
      },
      clearInput: function() {
         this.newTodoItem = ''
      }
   },
   components: {

   }
}
</script>

<style scoped>
input:focus {
   outline: none;
}
.inputBox {
   background: white;
   height: 50px;
   line-height: 50px;
   border-radius: 5px;
}
.inputBox input {
   border-style: none;
   font-size: 0.9rem;
}
.addContainer {
   float: right;
   background: linear-gradient(to right, #6478fb, #8763fb);
   display: block;
   width: 3rem;
   border-radius: 0 5px 5px 0;
}
.addBtn {
   color: white;
   vertical-align: middle;
}

</style>