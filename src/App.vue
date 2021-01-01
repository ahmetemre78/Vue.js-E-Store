<template>
  <div>
    <header-navbar></header-navbar>
    <!-- <div class="row">

      <div class="col col-5 float-left">
         <sidebar-menu></sidebar-menu>
      </div>
      <div class="col col-10">
         <router-view></router-view>
      </div>
    </div> -->

     <div class="row">
        <div class="col-md-2">
          <sidebar-menu />
        </div>
        <div class="col-md-10">
          <router-view />
        </div>
     </div>     
  </div>
</template>

<script>
import headerNavbar from "@/components/navbar.vue";
import sidebarMenu from "@/components/sidebar.vue";
export default {
  components: { headerNavbar,sidebarMenu },
};
</script>

<style>
</style>
