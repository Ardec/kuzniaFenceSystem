<template>
  <div>
    <Header />
    <Sidebar />
    <h1>Hello World {{ $route.params.code }}</h1>
    <CategorySection />
  </div>
</template>

<script setup>
const products = myData();
console.log(products);

</script>
