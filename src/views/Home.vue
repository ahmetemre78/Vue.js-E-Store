<template lang="">
    <div>
        <div class="container">
            <h3 class="mt-10 mb-10" >Ürünler</h3>
            <hr>
            <div class="row">
            <product-page :products="product" v-for="product in products" :key="product.id" />
            </div>    
        </div>
        
    </div>
</template>
<script>
import productPage from "@/components/productInfos.vue"
import axios from 'axios'
export default {
    components:{
        productPage
    },
    data(){
        return {products:[]}
    },
    created()
    {
        axios.get("http://localhost:3000/urunler").then(get_response=>{
            this.products=get_response.data;
        })
    },
    addToCart(){
        axios.post()
    }
}
</script>
<style lang="">
    
</style>