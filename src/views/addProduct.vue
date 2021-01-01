<template lang="">
    <div>
        <form>
            <div class="container">
                <div class="row mb-3">
                    <input type="text" v-model="productData.name" class="form-control" placeholder="Ürün Adı">
                </div>
                <div class="row mb-3">
                    <input type="text" v-model="productData.description" class="form-control" placeholder="Ürün Açıklaması">
                </div>
                <div class="row mb-3">
                    <input type="text" v-model="productData.price" class="form-control" placeholder="Fiyatı">
                </div>
                <div class="row mb-3">
                    <input type="text" v-model="productData.imageURL" class="form-control" placeholder="Resim URL">
                </div>
                <div class="row mb-3">
                    <select class="form-control" v-model="productData.categoryID">
                        <option value="sec">Kategori Seçiniz</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id" >{{category.name}}</option>
                    </select>
                </div>
                <div class="row mb-3">
                    <button :class="isDisabled" class="btn btn-primary btn-block" @click="addProduct">Ürün Ekle</button>
                </div>
                <div v-show="isInvalid === false" class="row mb-3 text-success">
                    <div class="alert alert-success" role="alert">
                        <strong>Ürün Başarıyla Eklenmiştir</strong>
                    </div>
                </div>
                <div v-show="isInvalid === true" class="row mb-3 text-success">
                    <div class="alert alert-danger" role="alert">
                        <strong>Ürün Bilgilerini Eksiksiz Giriniz...</strong>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      productData: {
        name: "",
        description: "",
        price: "",
        imageURL: "",
        categoryID: "sec",
      },
      categories: [],
      isInvalid : "",
    };
  },
  created() {
    axios
      .get("http://localhost:3000/kategoriler")
      .then((response) => {
        this.categories = response.data;
      })
      .catch((err) => {
        console.log("Error =>", e);
      });
  },
  methods: {
    clear(){
       this.productData = {
        name: "",
        description: "",
        price: "",
        imageURL: "",
        categoryID: "sec"
      };
    },
    addProduct() {
      if (
        this.productData.name !== "" &&
        this.productData.description !== "" &&
        this.productData.price !== "" &&
        this.productData.imageURL !== "" &&
        this.productData.categoryID !== "" && this.productData.categoryID !== "sec"
      ) {
          
        axios
          .post("http://localhost:3000/urunler", this.productData)
          .then((get_response) => {
            console.log(get_response.data);
            this.isInvalid = false
            setTimeout(() => {
                this.isInvalid = ""
            }, 2000);
            this.clear();
          });
      }
      else
      {
          this.isInvalid = true
      }
    },
  },
  computed: {
    isDisabled() {
      return {
        disabled:
          this.productData.name === "" ||
          this.productData.description === "" ||
          this.productData.price === "" ||
          this.productData.imageURL === "" ||
          this.productData.categoryID === "",
      };
    },
  },
};
</script>
<style lang="">
</style>