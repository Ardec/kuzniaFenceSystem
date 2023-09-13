<template>
  <div class="home-container">
    <Header />
    <Sidebar />
    <!-- <h1>Hello World {{ $route.params.code }}</h1> -->
    <div class="slogan mt-4 p-4 font-serif">“Niezadowolenie ze złej jakości trwa znacznie dłużej niż radość z niskiej ceny”</div>
    <CategorySection />
  </div>
</template>

<script setup>
const products = myData();
console.log(products);

</script>

<style lang="postcss" scoped>

.home-container {
min-height:100vh;
height: 100%;
background: var(--Background, linear-gradient(189deg, #F0F0F0 4.36%, #F1F1F1 98.1%));
}
.slogan{
color: #3F3E3F;
text-align: center;
font-size: 14px;
font-style: italic;
font-weight: 500;
line-height: 18px;
}
</style>
