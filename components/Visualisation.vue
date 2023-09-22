
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
      <div :style="{ height: fenceHeight/10 + 'px', maxHeight: fenceMaxHeight/10 + 'px' }" class="vertical-text m-2">{{fenceHeight}} mm</div>
      <div :style="{ width:fenceWidth/10+ 'px' , height:fenceHeight/10+'px', maxHeight: fenceMaxHeight/10 + 'px', maxWidth: fenceMaxWidth/10 + 'px'}" class="draw mt-8 mr-8">
      <div class="channels">
        <div v-for="item in fence" :key="item.color" class="fence-vis" :style="{ height:item.height/10 +'px', backgroundColor: item.hex_color, marginTop:item.top_space/10 +'px'}"></div>
      </div>
      </div>
    </div>
      <div :style="'width:'+fenceWidth/10+'px;'" class="horizontal-text mx-12">{{fenceWidth}} mm</div>
      <div class="bottom-navigation m-4 flex">
        <button @click="openModal" class="add-btn text-white px-4 py-2 m-8"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
</svg> <span>Dodaj panel</span></button>
      </div>

      <FenceModal :isOpen="isModalOpen" @updateIsOpen="handleModalUpdate" @addedPanel="addpanel" />

  </div>
</template>

<script lang="ts" setup>

// draw horizontal panels

type singlePanel = {
  id?: number,
  height: number,
  hex_color: string,
  top_space: number,
}



const fence = ref<singlePanel[]>([])

// draw wariables and min max of them

let fenceHeight:Ref<number> = ref(1230)
let fenceMinHeight:Ref<number> = ref(400)
let fenceMaxHeight:Ref<number> = ref(2000)

let fenceWidth:Ref<number> = ref(2500)
let fenceMinWidth:Ref<number> = ref(400)
let fenceMaxWidth:Ref<number> = ref(2800)


// modal logic
const isModalOpen = ref(false);

if (isModalOpen) {
    document.body.style.overflow = 'hidden';
} else {
    document.body.style.overflow = '';
}

const openModal = () => {
  isModalOpen.value = true;
  console.log(isModalOpen.value);
};

const handleModalUpdate = (newValue: boolean) => {
  isModalOpen.value = newValue;
};

const addpanel = (newValue: singlePanel) => {
   const totalHeight = fence.value.reduce((sum, panel) => sum + panel.height + panel.top_space, 0) + newValue.height + newValue.top_space;
  // Sprawdź czy przekracza wartość z inputa
  if(totalHeight > fenceMaxHeight.value)
  {
    window.alert("Całkowita wysokość przęsła przekracza warunki techniczne")
    return;
  }

  if (totalHeight > fenceHeight.value) {
    // Jeśli tak, wyświetl alert z opcjami
    const decision = window.confirm("Całkowita wysokość paneli i przerw przekracza wielkość przęsła. Czy chcesz powiększyć przęsło?");

    if (decision) {
      // Jeśli użytkownik zdecyduje się powiększyć przęsło, zaktualizuj wartość inputa
      fenceHeight.value = totalHeight;
      fence.value.push(newValue);
    } else {
      // Jeśli użytkownik zdecyduje się anulować dodawanie panela, nie rób nic
      return;
    }
  } else {
    // Jeśli suma wysokości nie przekracza wartości z inputa, po prostu dodaj panel
    fence.value.push(newValue);
  }
};

// input guard
const handleInput = (event: Event, type: String) => {
    if (!event.target) return;
    const target = event.target as HTMLInputElement; // Konwersja targetu na HTMLInputElement, żeby uzyskać dostęp do właściwości value, min, max, itp.
    const value = parseInt(target.value, 10);

        if(fence.value.length > 0){
        const totalHeight = fence.value.reduce((sum, panel) => sum + panel.height + panel.top_space, 0)
        fenceMinHeight.value = totalHeight
    }

    if(type === 'width'){
        console.log("width changed")
          if (value < fenceMinWidth.value) {
    fenceWidth.value = fenceMinWidth.value
  } else if (value > fenceMaxWidth.value) {
    fenceWidth.value = fenceMaxWidth.value
  }

    }
       if(type === 'height'){
          if (value < fenceMinHeight.value) {
    fenceHeight.value = fenceMinHeight.value
  } else if (value > fenceMaxHeight.value) {
    fenceHeight.value = fenceMaxHeight.value
  }
    }
}

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
 display: flex;
  flex-direction: column-reverse;  /* odwraca kierunek kolejności elementów */
  margin: 0px 0px 0px 1px;
  flex: 1;
  border-left: solid #3F3E3F 4px;
  border-right: solid #3F3E3F 4px;
  overflow:auto;
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
.fence-vis{
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  min-height: 9px;
  min-width: 100%;
}

</style>
