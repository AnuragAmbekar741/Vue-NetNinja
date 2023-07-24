<template>
    <div class="container text-white">
        <div class="pt-4 mb-8 relative">
            <input type="text" placeholder="Search for a city or state" 
                class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
                v-model="serachText"    
                @input="getSearchResults"
            >
            <ul 
                class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66]"
                v-if="mapboxResult"
            >
                <p v-if="searchError">Sorry something went wrong, please try again</p>
                <p v-if="!searchError && mapboxResult.length === 0">No results found matching your querry</p>

                <li 
                    v-for="searchResult in mapboxResult" :key="searchResult.id"
                    class="p-2 cursor-pointer"
                    @click="previewCity(searchResult)"
                >
                    {{ searchResult.place_name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const previewCity = (searchResult) =>{
        console.log(searchResult)
        const [city,state] = searchResult.place_name.split(",")
        router.push({
            name:'cityView',
            params:{state:state.replaceAll(" ",""),city:city},
            query:{
                lat:searchResult.geometry.coordinates[1],
                lng:searchResult.geometry.coordinates[0],
                preview:true
            }
        })
    }

    const mapboxAPIKey = "pk.eyJ1IjoiYW51cmFnLTc0MSIsImEiOiJjbGtncThoMnMwMzM2M21rZWs5NXF2bjE0In0.DBa5cD8m-JOVqq-eH9ZOmg"

    const mapboxResult = ref(null)
    
    const serachText = ref("")

    const searchError = ref(null)

    const queryTimeout = ref(null)

    const getSearchResults= ()=>{
        clearTimeout(queryTimeout.value)
        queryTimeout.value = setTimeout(async()=>{
            if(serachText.value!==''){
                try{
                    const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${serachText.value}.json?access_token=${mapboxAPIKey}&types=place`)
                    mapboxResult.value = result.data.features;
                    console.log(mapboxResult.value)
                }
                catch(err){
                    searchError.value = true
                }
                return
            }
            mapboxResult.value = null
        },1000)

    }

</script>
