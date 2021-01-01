<template lang="">
    <div>
        <product-detail v-for="detail in details" :key="detail.id" :details="detail" ></product-detail>
    </div>
</template>
<script>
import ProductDetail from "@/components/productDetail.vue"
import axios from 'axios'

export default {
    components:{ProductDetail},
    data(){
        return {
            details : [],
        }
    },
    created()
    {
        axios.get(`http://localhost:3000/urunler?id=${this.productID}`).then(get_response => {
            this.details = get_response.data;
        })

    },
    computed:
    {
        productID()
        {
            return this.$route.params.urun_id;
        }
    }
}
</script>
<style lang="">
    
</style>