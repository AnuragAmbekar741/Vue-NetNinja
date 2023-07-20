<template>
    <div @click.self='closeModal' class="backdrop">
        <div class="modal">
            <slot></slot>
            <div class="userForm">
                    <slot name="inputs"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        closeModal(){
            this.$emit('close2')
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