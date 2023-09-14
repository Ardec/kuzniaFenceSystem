<script lang="ts" setup></script>

<template>
  <div class="main-container py-3 pl-6">
    <div class="header-container">
      <div class="text-container font-sans">Inspiracje</div>
      <div class="graphic-container"></div>
    </div>
    <div class="main-section-container">
      <div v-for="item in gallery" :key="item.name" class="item">
        <div class="item-container" alt="Image" :style="{ 'background-image': 'url(' + item.photo_url + ')' }">
           <div class="item-text">
        </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script setup>

import useGalleryData from "~/composables/useGalleryData"
const { gallery } = useGalleryData()

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
.main-section-container{
  display:flex;
  overflow-x:scroll;
  overflow-y:hidden;
  gap:20px;
}

.item{
min-width: 300px;
width: 300px;
border-radius: 8px;
position:relative;
}
.item-container{
  background-size: cover;
  height: 202px;
  border-radius:8px;
}
.item-text{
  display:flex-inline;
  padding-top:23px;
  padding-left:20px;
  width: 200px;
  color: #FFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 16px;
font-weight: 700;
}
.btn
{
  padding: 6px 45px;
  border-radius: 4px;
  background: var(--Logo-Gradient, linear-gradient(140deg, #176EB0 30.49%, #004D7F 121.68%));
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
text-align: center;
font-size: 16px;
font-weight: 700;
line-height: 24px; /* 150% */ 
position:absolute;
bottom:10px;
right:20px;
}
.btn:hover{
  opacity:0.9;
}



</style>

