<template lang="">
    <div  class="col-md-4">
        <div class="card">
            <div class="card-body" @click="$router.push(`/urun-detay/${products.id}`)">
                <img :src="products.imageURL" class="mb-5">
                <h5 class="card-title">{{products.name}}</h5>
                <p class="card-text">{{products.description}}</p>
                <p class="card-text text-center"><b>{{products.price}} TL</b></p>
                <div class="btn btn-default btn-lg float-right ml-10">
                    <i class="fas fa-star"></i>
                </div>
                <button style="width:100%" v-if="!isCart" @click.stop="addToCart" class="btn btn-primary btn-lg">Sepete Ekle</button>           
                <button style="width:100%" v-else @click.stop="removeFromCart" class="btn btn-danger btn-lg">Sepetten Çıkar</button>
                
                
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    props:["products"],
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
            axios.post("http://localhost:3000/sepeturunleri",{...this.products,count:1}).then(posttocart => {
                this.cart_products.push(posttocart.data)
            }).catch(err => {
                console.log("Error",err)
            })
        },
        removeFromCart()
        {
            axios.delete(`http://localhost:3000/sepeturunleri/${this.products.id}`).then(removefromcart => {
                this.cart_products = this.cart_products.filter(item => item.id !== this.products.id)
            }).catch(err => {
                console.log("Error",err)
            })
        }
    },
    computed : {
        isCart(){
            return Boolean(this.cart_products.find((item) => item.id === this.products.id))
        }
    }
}
</script>
<style scoped>
img {
  height: 300px;
}
.card {
  margin-top: 10px;
  cursor: pointer;
  border: none;
  padding: 10px;
  height: 580px;
}
.card:hover {
  border: 1px solid rgba(0, 0, 0, 0.125);
  opacity: 0.9;
}
.card-text
{
    font-size:15px;
    font-style: italic;
}
.card-text.text-center
{
    font-size:20px;
}
.fas.fa-star:hover{
    color : #009900;
}
    
</style>