<template>
 <div>
  <h1>{{title}}</h1>
  <!-- <input type="text" ref="name">
  <button @click='handleClick'>Name</button> -->
  <div v-show="showModal"> 
  <!-- <Modal :header="header" :text="text" theme="sale" @close="toggle" /> -->
  <Modal theme="sale" @close="toggle">
    <h1>Passing data with slots</h1>
    <p>And receving data with slots not with props now</p>
    <template v-slot:links>
      <a href="#">link1</a>
      <a href="#">named slot</a>
    </template>
  </Modal>
  </div>
  <button @click="toggle">Toggle Modal</button>

  <teleport to=".modals" v-if="toggleModal">
    <Modaltwo @close2='toggle2'>
      <h5>Please enter details to continue</h5>
      <template v-slot:inputs>
        <input v-model='msg.uname' type="text" placeholder="username" ref="uname">
        <input v-model='msg.pass' type="text" placeholder="password" ref ="pass">
        <button @click="handleClick2">Submit</button>
      </template>
      <h4>Username and pass from props </h4>
      {{msg.uname}} - {{msg.pass}}
    </Modaltwo>
  </teleport>
  <button @click="toggle2">Modal2</button>

 </div>
</template>


<script>
  import Modal from './components/Modal.vue'
  import Modaltwo from './components/Modaltwo.vue'
  export default{
    name:'App',
    components:{Modal, Modaltwo},
    data(){
      return{
        title:"First VUE component",
        header:"Heading passed from PROPS",
        text:"modal text comming from props just as header",
        showModal:false,
        toggleModal:false,
        msg:{
          unmae:'',
          pass:''
        }
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
      },
        toggle2(){
        this.toggleModal = !this.toggleModal
      },
      handleClick2(){
        const uname = this.$refs.uname.value
        const pass = this.$refs.pass.value
        console.log(uname,pass)
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
