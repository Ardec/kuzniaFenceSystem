<script lang="ts" setup>
defineProps({
  titleText: String,
  headerText: String,
  bodyText: String
})
</script>

<template>
  <div class="text-block-container"> 
    <div class="title-text-container">
      <div class="title-text">
        {{titleText}}
      </div>
    </div>
   <div class="header-container">
      <div class="text-container font-sans">{{headerText}}</div>
      <div class="graphic-container"></div>
    </div>
    <div class="main-content">
      <div class="main-content-text">
        {{bodyText}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-block-container{
padding:11px 16px;
}
.title-text{
height: 14px;
flex-shrink: 0;
align-self: stretch;
font-size: 10px;
font-weight: 500;
line-height: 16px;
letter-spacing: 1.5px;
text-transform: uppercase;
}
.header-container{
  padding:7px 0px;
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
.main-content-text{
font-size: 14px;
font-weight: 400;
line-height: 20px; 
letter-spacing: 0.25px;
}
</style>
