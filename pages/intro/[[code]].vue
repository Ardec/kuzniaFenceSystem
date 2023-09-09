<template>
  <Header />
  <h1>Intro</h1>
  <h2>Mój kod rabatowy : {{ $route.params.code }}</h2>
  <CategorySection />
  {{ siteData }}
</template>

<script setup>
const siteData = useSiteData();
console.log(siteData);
</script>
