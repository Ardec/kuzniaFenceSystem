<template>
  <div>
    <Transition name="slide-fade">
    <aside class="sidebar-container" v-show="menuIsOpen==true">
      <div class="sidebar-container">
          <div class="sidebar-header">
        <div class="logo-container">
         <img class="side-logo" src="~/assets/kuznia-logo.png" alt="open menu">
      </div>
         <div @click="openCloseMenu()" class="close-icon-container"> <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.375 4.375L30.625 31.0625" stroke="#1369A8" stroke-width="3"/>
<path d="M31.0625 4.375L4.375 30.625" stroke="#1369A8" stroke-width="3"/>
</svg> </div>
      </div>

      <div class="sidebar-middle">
        <div class="menu-items">
          <div v-for="item in categories" :key="item.name" class="pointer">

          <NuxtLink :to="item.url">
               <div class="menu-item ml-3 my-1 py-2.5">
            <div class="menu-item-icon">
              <MdiIcon class="" size="28px" :icon="item.mdi_icon" />
            </div>
            <div class="menu-item-text text-base leading-6 pl-2 font-light">
              {{item.name}}
            </div>
          </div>
          </NuxtLink>
        </div>
        </div>
      </div>

      </div>


    </aside>
    </Transition>
  </div>
</template>

<script setup>
import useMenu from "~/composables/useMenu";
import useMenuData from "~/composables/useMenuData.ts";

const { categories } = useMenuData()
const { menuIsOpen, openCloseMenu } = useMenu();
</script>

<style scoped lang="postcss">
.sidebar-container
{
position:fixed;
display:flex;
flex-direction: column;
bottom: 0;
left: 0;
width: 390px;
min-height: 100vh;
flex-shrink: 0;
border-radius: 4px;
background: #F0F0F0;
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
transition: width 2s;
}
.sidebar-header{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0px 32px 0px 16px;
}
.sidebar-middle
{
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0px 16px;
}

.logo-container{
  width:150px;
  height:100px;
}
.close-icon-container{
  width:35px;
  height:35px;
}
.close-icon-container:hover{
  opacity:0.8;
  cursor: pointer;
}
.menu-items{
  width:100%;
}
.menu-item{
  width:100%;
  display: flex;
  align-items: center;
}
.menu-item:hover{
  color:#1369A8;
}
.menu-icon{
  color:#1369A8;
}

  /* <div class="sidebar-middle">
        <div class="menu-items">
          <div v-for="item in categories" :key="item.name" class="pointer">

          <NuxtLink :to="item.url">
               <div class="menu-item">
            <div class="menu-item-icon">
              <MdiIcon size="32px" icon="mdiHome" />
            </div>
            <div class="menu-item-text">
              {{item.name}}
            </div>
          </div>
          </NuxtLink>
        </div>
        </div>
      </div> */

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0.1;
}




</style>
