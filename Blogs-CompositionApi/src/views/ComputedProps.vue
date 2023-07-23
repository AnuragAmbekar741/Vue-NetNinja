<template>
  <div style="padding:0 3rem">
    <h1>Computed</h1>
    <input v-model="search"/>
    <button @click="handleClick">Stop Watching</button>
    <div class="names">
        <div v-for="name in filteredNames" class="name">
            {{name}}
        </div>        
    </div>
        <PassingProps :names="names"/>
  </div>
</template>

<script>
import {ref, computed,watch,watchEffect} from 'vue'
import PassingProps from '../components/PassingProps.vue'
export default {
  components: { PassingProps },
    setup(){
        const names = ref(['Itachi','Kakashi','Madara','Tobirama','Naruto','Obito','Saske','Tsunade','Gai Sensai','Gara'])
        const search = ref('')
        
        const filteredNames = computed(()=>names.value.filter(name=>name.includes(search.value)))
        
        //Kinda useEffect will always trigger when search will change
        const stopWatch = watch(search,()=>{
            console.log("watch triggered")
        })

        const stopEffect = watchEffect(()=>{
            console.log("watchEffect")
        })

        const handleClick = () =>{
            stopWatch()
            stopEffect()
        }

        return{names,search,filteredNames,handleClick}

    }
}
</script>

<style scoped> 
    input{
        padding: 0.5rem;
        border-radius: 10px;
        border: 1px solid;
    }

    button{
        margin: 0 30px;
        padding: 0.8rem;
        border-radius:10px;
        border: none;
        font-weight: 600;
    }

    .names{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        justify-content: flex-start;
    }

    .name{
        padding: 0.75rem;
        margin: 20px 20px 20px 0;
        border: 1.5px solid lightskyblue;
        border-radius: 10px;
        background: skyblue;
        color: white;
    }   
</style>