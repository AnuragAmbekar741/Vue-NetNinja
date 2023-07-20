<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        Click me!
    </div>
</template>

<script>
export default {
    data(){
        return{
            showBlock:false,
            timer:null,
            reactionTime:0
        }
    },
    props:['delay'],
    mounted(){
        setTimeout(()=>{
            this.showBlock = true
            this.startTimer()
        },this.delay)
    },
    // updated(){
    //     console.log("updated lifecycle")
    // },
    // unmounted(){
    //     console.log("unmounted lifecycle")
    // },
    methods:{
        startTimer(){
            this.timer = setInterval(()=>{
                this.reactionTime +=10
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
            console.log(this.reactionTime)
            this.$emit("end",this.reactionTime)
        }
    }
}
</script>

<style scoped>
    .block{
        /* padding: 3rem; */
        width: 200px;
        height: 200px;
        margin: 50px 0  ;
        background: lightgrey;
        text-align: center;
        font-size: 18px;
        text-align: center;
        color: black;
    }
</style>