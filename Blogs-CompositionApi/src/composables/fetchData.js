import {ref} from 'vue'

const fetchData = () =>{
    const books = ref([])
    const error = ref(null)

    const load = async () =>{
        try{
            const data = await fetch("http://localhost:3000/books")
            if(!data.ok){
                throw Error('No data available')
            }
            books.value = await data.json()
            books.value = books.value.books.books                 
        }
        catch(err){
            error.value = err.message
            console.log(error.value)
        }
    }
    return {books,error,load}
}

export default fetchData