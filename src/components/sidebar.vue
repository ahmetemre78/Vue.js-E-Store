<template lang="">
    <div>
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="list-group list-group-flush">
                <div class="sidebar-heading mb-3" style="font-size:15px;margin-left:14px;">Kategoriler</div>
                <router-link :to="`/kategoriler/${category.id}`" v-for="category in categories" :key="category.id" class="list-group-item list-group-item-action bg-light">{{category.name}}</router-link>
            </div>
        </div>

     </div>    
</template>
<script>
import axios from "axios"
export default {
    data()
    {
        return {
            categories : [],
        }
    },
    created()
    {
        axios.get("http://localhost:3000/kategoriler").then(response => {
            this.categories=response.data;
        }).catch(err => {
            console.log("Error =>",e)
        })
    }
}
</script>
<style lang="">

</style>