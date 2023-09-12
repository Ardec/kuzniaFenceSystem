<template>
  <div class="header-container">
          <div class="menu-icon-container">
      <img @click="openCloseMenu()" class="menu-icon" src="~/assets/menuOpen.png" alt="open menu"></div>
  </div>
</template>


<script setup>
 import useMenu from "~/composables/useMenu";
 const { menuIsOpen, openCloseMenu } = useMenu()

</script>

<style scoped>
.header-container{
display: flex;
padding: 8px 16px;
justify-content: space-between;
align-items: center;
background: #F0F0F0;
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
}
.menu-icon
{
width: 45px;
height: 45px;
flex-shrink: 0;
}
.menu-icon:hover{
cursor:pointer;
opacity:0.8;
}
.menu-icon-container
{
display: flex;
padding: 0px 12px 0px 8px;
justify-content: center;
align-items: center;
gap: 67px;
}
</style>
