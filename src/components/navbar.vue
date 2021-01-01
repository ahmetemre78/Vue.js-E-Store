<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid" style="font-size:20px;">
            <a class="navbar-brand" style="font-size:20px;" href="#">E-Pati</a>
            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" aria-current="page" >Anasayfa</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/urun-ekle" class="nav-link" aria-current="page" >Ürün Ekle</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/favori-urunlerim" class="nav-link" aria-current="page" >Favori Ürünlerim</router-link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>