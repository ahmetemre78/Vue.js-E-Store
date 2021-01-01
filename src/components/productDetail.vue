<template lang="">
    <div>
        <div class="container">
    <div class="card mb-3" style="width: 100%">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="details.imageURL" :alt="details.name" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ details.name }}</h5>
            <p class="card-text">
              {{ details.description }}
            </p>
            <p class="card-text">
              <b> {{ details.price }} TL </b>
            </p>
            <button
              @click.stop="addToCart"
              v-if="!isCart"
              class="btn btn-primary"
              style="width: 100%"
            >
              Sepete Ekle
            </button>
            <button
              @click.stop="removeFromCart"
              v-else
              class="btn btn-danger"
              style="width: 100%"
            >
              Sepetten Çıkar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    props:["details"],
    data()
    {
        return{
            cart_products : [],
        }
    },
    created()
    {
        axios.get("http://localhost:3000/sepeturunleri").then(get_response =>{
            this.cart_products = get_response.data
        })
    },
    methods: {
        addToCart(){
            axios.post("http://localhost:3000/sepeturunleri",{...this.details,count:1}).then(posttocart => {
                this.cart_products.push(posttocart.data)
            }).catch(err => {
                console.log("Error",err)
            })
        },
        removeFromCart()
        {
            axios.delete(`http://localhost:3000/sepeturunleri/${this.details.id}`).then(removefromcart => {
                this.cart_products = this.cart_products.filter(item => item.id !== this.details.id)
            }).catch(err => {
                console.log("Error",err)
            })
        }
    },
    computed : {
        isCart(){
            return Boolean(this.cart_products.find((item) => item.id === this.details.id))
        }
    }
};
</script>
<style scpoed>
.card {
  width: 100%;
  margin-top: 50px;
  cursor: pointer;
}
.card-text {
  margin-top: 50px;
}
img {
  width: 350px;
  height: 500px;
}
</style>