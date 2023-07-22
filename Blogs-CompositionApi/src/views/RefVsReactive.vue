<template>
  <main>
    <p>Name: <strong>{{ name }}</strong> and age is <strong>{{age}}</strong></p>
    <input type="text" v-model="name">
    <button @click="age++">add age</button>

    <h3>Ref</h3>
    <p>BOY1 - Name: <strong>{{ boy1.name }}</strong> and age is <strong>{{boy1.age}}</strong></p>
    <button @click="update1">Update Boy1</button>
    <button @click="boy1.age++">age++</button>


    <h3>Reactive</h3>
    <p>BOY2 - Name: <strong>{{ boy2.name }}</strong> and age is <strong>{{boy2.age}}</strong></p>
    <button @click="update2">Update Boy2</button>
    <button @click="boy2.age++">age++</button>

  </main>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  setup() {
    console.log('setup')
    let name = ref('Goat aja')
    let age = ref(26)

    const p = ref(null)

    const handleClick = () => {
      name.value = "promax goat aja"
      age.value += 1
    }

    //Refs
    const boy1 = ref({name:'boy1',age:20})
    const update1 = () =>{
      boy1.value.name = "New_Updated_Name"
    }

    //Reactive
    const boy2 = reactive({name:'boy2',age:21})
    const update2 = () =>{
      boy2.name = "New_Updated_Name"
    }

    return { name, age, handleClick, boy1,boy2,update1,update2 }
  },

  created() {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
