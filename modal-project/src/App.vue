<template>
 <div>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click='handleClick'>Name</button>
  <Modal/>
 </div>
</template>

<script>
  import Modal from './components/Modal.vue'

  export default{
    name:'App',
    components:{Modal},
    data(){
      return{
        title:"First VUE component"
      }
    },
    methods:{
      handleClick(){
        console.log(this.$refs.name)
        this.$refs.name.classList.add('active')
        this.$refs.name.focus()
      }
    }
  }
</script>

<style>
  h1{
    color: skyblue;
  }
</style>
