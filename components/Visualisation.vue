
<template>
  <div class="visualisation-container">
     <div class="dimensions-container px-4">
        <div class="dimension-width">
            <label for="szerokosc_przesla" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Szerokość (mm)</label>
            <input v-model="fenceWidth" type="number" id="szerokosc_przesla" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Szerokość" :min="fenceMinWidth" :max="fenceMaxWidth" @blur="handleInput($event, 'width')" required>
        </div>
         <div class="dimension-width">
            <label for="wysokość_przesla" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wysokość (mm)</label>
            <input v-model="fenceHeight" type="number" id="wysokość_przesla" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Wysokość" :min="fenceMinHeight" :max="fenceMaxHeight" @blur="handleInput($event, 'height')" required>
        </div>
    </div>
    <div class="draw-container mx-4 flex">
      <div :style="'height:'+fenceHeight/10+'px'" class="vertical-text m-2">{{fenceHeight}} mm</div>
      <div :style="'width:'+fenceWidth/10+'px;height:'+fenceHeight/10+'px;'" class="draw mt-8 mr-8">
      <div class="channels"></div>
      </div>
    </div>
      <div :style="'width:'+fenceWidth/10+'px;'" class="horizontal-text mx-12">{{fenceWidth}} mm</div>
      <div class="bottom-navigation m-4 flex">
        <button @click="openModal" class="add-btn text-white px-4 py-2 m-8"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
</svg> <span>Dodaj panel</span></button>
      </div>

      <FenceModal :isOpen="isModalOpen" @updateIsOpen="handleModalUpdate"/>

  </div>
</template>

<script lang="ts" setup>
let fenceHeight:Ref<number> = ref(1230)
let fenceMinHeight:Ref<number> = ref(400)
let fenceMaxHeight:Ref<number> = ref(2000)

let fenceWidth:Ref<number> = ref(2500)
let fenceMinWidth:Ref<number> = ref(400)
let fenceMaxWidth:Ref<number> = ref(2800)

const handleInput = (event: Event, type: String) => {
    if (!event.target) return;
    const target = event.target as HTMLInputElement; // Konwersja targetu na HTMLInputElement, żeby uzyskać dostęp do właściwości value, min, max, itp.
    const value = parseInt(target.value, 10);

    if(type === 'width'){
        console.log("width changed")
          if (value < fenceMinWidth.value) {
    fenceWidth.value = fenceMinWidth.value
  } else if (value > fenceMaxWidth.value) {
    fenceWidth.value = fenceMaxWidth.value
  }

    }
       if(type === 'height'){
        console.log("height changed")
          if (value < fenceMinHeight.value) {
    fenceHeight.value = fenceMinHeight.value
  } else if (value > fenceMaxHeight.value) {
    fenceHeight.value = fenceMaxHeight.value
  }

    }
}

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  console.log(isModalOpen.value);
};

const handleModalUpdate = (newValue: boolean) => {
  isModalOpen.value = newValue;
};


</script>

<style scoped>
.vertical-text{
  min-height:160px;
  width: 20px;
  writing-mode: vertical-rl; /* tekst będzie pisać od prawej do lewej, ale nadal będzie czytany od góry do dołu */
  transform: rotate(180deg); /* obróć div, aby tekst był czytelny od góry do dołu */
  text-align: center; /* centruje tekst w poziomie */
}
.draw{
  border-bottom:dotted #1369A8 2px;
  border-left:dotted #1369A8 2px;
  display:flex;
}
.draw-container{
  align-items: center;
}
.horizontal-text{
  text-align: center;
}
.channels{
  margin:0px 0px 0px 1px;
  flex: 1;
  border-left:solid #3F3E3F 4px;
  border-right:solid #3F3E3F 4px;
}
.bottom-navigation{
  background: #F0F0F0;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
justify-content: center;
}
.add-btn{
display: inline-flex;
align-items: flex-start;
border-radius: 4px;
background: #1369A8;
text-transform: uppercase;
}

</style>
