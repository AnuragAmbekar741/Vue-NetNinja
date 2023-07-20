<template>
    <!-- <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale:theme==='sale'}">
            <h1>{{header}}</h1>
            <p>{{text}}</p>
        </div>
    </div> -->
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale:theme==='sale'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:['header','text','theme'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
    .modal{
        width:400px;
        height: 200px;
        padding: 20px 0;
        margin: 100px auto;
        background-color: white;
        border-radius: 10px;
        text-align: center;
    }
    .backdrop{
        top: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    h1{
        color:palegreen;
        /* text-align: center; */
    }
    .modal p{
        font-style:normal;
        font-size: 18px;
    }   
    .modal.sale{
        background: lightcoral;
    }
     .modal.sale h1{
        color: white;
    }
</style>