<template>
 <div>
  <h1>{{title}}</h1>
  <!-- <input type="text" ref="name">
  <button @click='handleClick'>Name</button> -->
  <div v-if="showModal"> 
  <!-- <Modal :header="header" :text="text" theme="sale" @close="toggle" /> -->
  <Modal theme="sale" @close="toggle">
    <h1>Passing data with slots</h1>
    <p>And receving data with slots not with props now</p>
  </Modal>
  </div>
  <button @click="toggle">Toggle Modal</button>
 </div>
</template>


<script>
  import Modal from './components/Modal.vue'

  export default{
    name:'App',
    components:{Modal},
    data(){
      return{
        title:"First VUE component",
        header:"Heading passed from PROPS",
        text:"modal text comming from props just as header",
        showModal:false
      }
    },
    methods:{
      handleClick(){
        console.log(this.$refs.name.value)
        this.$refs.name.classList.add('active')
        this.$refs.name.focus()
      },
      toggle(){
        this.showModal = !this.showModal
      }
    }
  }
</script>

<style scoped>
  div{
    display: grid;
    justify-content: center;
    width: 100vw;
  }
  h1{
    color: skyblue;
  } 
  button{
    padding: 1rem 2rem;
  }
</style>
