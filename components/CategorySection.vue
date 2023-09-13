<script lang="ts" setup></script>

<template>
  <div class="main-container py-3 pl-6">
    <div class="header-container">
      <div class="text-container font-sans">dodaj element</div>
      <div class="graphic-container"></div>
    </div>
    <div class="main-section-container">
      <div v-for="item in categories" :key="item.name" class="item">{{item.name}}</div>
    </div>
  </div>
</template>

<script setup>

import useCategoryData from "~/composables/useCategoryData"
const { categories } = useCategoryData()

</script>

<style lang="postcss" scoped>

.header-container{
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.text-container{
font-size: 18px;
font-weight: 500;
line-height: 29px; /* 161.111% */
letter-spacing: 0.15px;
text-transform:uppercase;
}

.graphic-container{
  background-color: #3F3E3F;
  height: 20px;
  border-radius:4px;
  width:40vw;
}

</style>

