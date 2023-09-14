<template>
  <div class="home-container">
    <div class="logo-container">
    <img class="index-logo pt-4" src="~/assets/kuznia-logo.png" alt="kuznia fence system">
    </div>
    <div class="slogan px-6 pb-4 font-serif">“Niezadowolenie ze złej jakości trwa znacznie dłużej niż radość z niskiej ceny”</div>
    <CategorySection />
    <Inspirations />
    <div class="video-container">
  </div>
  </div>
</template>

<script setup>
const products = myData();
// console.log(products);

</script>

<style lang="postcss" scoped>

.index-logo{
  margin:0 auto;
  height:120px;
}

.home-container {
margin-top:3px;
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
