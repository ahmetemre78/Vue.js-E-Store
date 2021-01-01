import Home from "@/views/Home.vue";
import addProduct from "@/views/addProduct.vue";
import myFavouriteProducts from "@/views/myFavourites.vue";
import categoryPages from "./views/categoryPages.vue"
import ProductDetails from "./views/productDetails.vue"
import { createRouter, createWebHashHistory } from "vue-router";

const routeInfo = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/urun-ekle",
    component: addProduct,
  },
  {
    path: "/favori-urunlerim",
    component: myFavouriteProducts,
  },
  {
    path : "/kategoriler/:kategori_id",
    component : categoryPages,
  },
  {
    path : "/urun-detay/:urun_id",
    component : ProductDetails,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routeInfo,
});

export default router;
