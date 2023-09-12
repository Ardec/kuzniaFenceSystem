<template>
  <div class="header-container">
          <div class="menu-icon-container">
      <img @click="openCloseMenu()" class="menu-icon" src="~/assets/menuOpen.png" alt="open menu"></div>
      <!-- {{menuTrigger}} -->
      {{buttonState}}
      <button @click="dodawanie()">dodaj</button>{{numberTest}}


  </div>
</template>

<script setup>

  let menuTrigger = ref(true)
  let numberTest = ref(0)
  const buttonState = useState('sidebarTrigger',() => false) // init useState reative multicomponent variable

  const funkcja = function(){
   menuTrigger.value = !menuTrigger.value
   console.log(menuTrigger)
  }
    const openCloseMenu = function(){
   buttonState.value = !buttonState.value
   console.log(buttonState.value)
  }

  const dodawanie = function(){
    numberTest.value +=1;
    console.log(numberTest)
  }

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
