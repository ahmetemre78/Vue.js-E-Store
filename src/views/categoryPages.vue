<template>
  <div class="container">
    <div class="row">
      <product-page
        v-for="product in productList"
        :key="product.id"
        :products="product"
      />
    </div>
  </div>
</template>
<script>
import productPage from "@/components/productInfos.vue"
import axios from "axios";

export default {
  data() {
    return { 
        productList:[],
    };
  },
  components:{
    productPage  
  },
  created() {
    axios
      .get(`http://localhost:3000/urunler?categoryID=${this.categoryID}`)
      .then((get_response) => {
        this.productList = get_response.data;
        console.log(this.productList)
      }).catch(err => {
          console.log("Error",err);
      });
  },
  computed: {
    categoryID() {
      return this.$route.params.kategori_id;
    },
  },
  watch:{
      categoryID(){
          axios
        .get(`http://localhost:3000/urunler?categoryID=${this.categoryID}`)
        .then((response) => {
          this.productList = response.data;
        })
        .catch((err) => console.log(err));
      }
  }
};
</script>