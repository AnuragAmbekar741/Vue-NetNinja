import {ref} from 'vue'

const getBook = (id) =>{
    const book = ref({})
    const error = ref(null)

    const load = async () =>{
        try{
            const data = await fetch('http://localhost:3000/books/'+id)
            if(!data.ok){
                throw Error("Something went wrong!")
            }
            book.value = await data.json() 
            console.log(book.value)
        }
        catch(err){
            error.value = err.message
            console.log(error)
        }
    }

    return{book,error,load}
}

export default getBook