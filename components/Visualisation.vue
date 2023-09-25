


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
       <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Mini wizualizacja'"
    :bodyText="'Tak może wyglądać Twoje przęsło w widoku 2D od frontu. Elementy z prawej i lewej to ceowniki trzymające konstrukcję. Aby rozpocząć wciśnij przycisk dodaj element'"
    />
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
      <FenceEditModal :isOpen="isEditModalOpen" :actualRecord="fenceRecord" :actualRecordPosition="fenceRecordPosition" @updateIsOpen="handleEditModalUpdate" />
            <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Przybliżenie x6'"
    :bodyText="'Poniżej przęsła zostały rozpisane w przybliżonym widoku aby można było dokładnie określić wymiary oraz przerwy. Domyślna przerwa to 20mm'"
    />


    <div class="x6container m-4" :style="{height: fenceHeight/10*6 + 'px'}" >
      <div v-for="(item,index) in fence" :key="item.color" class="fence-vis" :style="{ height:item.height/10*6 +'px', backgroundColor: item.hex_color, marginTop:item.top_space/10*6 +'px'}">
        <div class="actions-container">
          <div class="actions">
            <div class="description">
              <div class="wys">Wysokość: {{item.height}} mm</div>
              <div class="space">Przerwa: {{item.top_space}} mm </div>
            </div>
            <div @click="openEditModal(index)" class="button">
                          <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38.6983 18.7188L33 13.4688L34.8771 11.7188C35.3911 11.2396 36.0226 11 36.7716 11C37.5207 11 38.1518 11.2396 38.6648 11.7188L40.5419 13.4688C41.0559 13.9479 41.324 14.5262 41.3464 15.2037C41.3687 15.8812 41.1229 16.4592 40.609 16.9375L38.6983 18.7188ZM36.7542 20.5625L22.5419 33.8125H16.8436V28.5L31.0559 15.25L36.7542 20.5625Z" fill="#FFFFFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.18996 6H0.754211V0H49.0224V6H7.18996L7.18997 42H49.0224V48H0.754211V42H1.18997L1.18996 6Z" fill="url(#paint0_linear_130_393)"/>
<defs>
<linearGradient id="paint0_linear_130_393" x1="23.5639" y1="8" x2="62.7253" y2="55.7503" gradientUnits="userSpaceOnUse">
<stop stop-color="#176EB0"/>
<stop offset="1" stop-color="#004D7F"/>
</linearGradient>
</defs>
</svg>
            </div>

          </div>
          </div>
      </div>
    </div>

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

let fenceRecord: Ref<singlePanel | null> = ref(null);
let fenceRecordPosition:Ref<number> = ref(0)


// modal logic
const isModalOpen = ref(false);
const isEditModalOpen = ref(false);


const openModal = () => {
  isModalOpen.value = true;
};

const openEditModal = (index:number) => {
  isEditModalOpen.value = true
  fenceRecord.value = fence.value[index]
  fenceRecordPosition.value = index
  console.log("fenceRecord", fenceRecord)
  console.log("fenceRecordPosition",fenceRecordPosition)
};

const handleModalUpdate = (newValue: boolean) => {
  isModalOpen.value = newValue;
};
const handleEditModalUpdate = (newValue: boolean) => {
  isEditModalOpen.value = newValue;
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

watchEffect(() => {
    if (typeof window !== 'undefined') {
        if (isModalOpen.value || isEditModalOpen.value) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
});

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

.x6container{
  border-left: 24px solid #3F3E3F;
  display: flex;
  flex-direction: column-reverse;
  max-width:100vw;
}
.actions-container{
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  padding-right:30px;
}

.actions{
  min-height: 50px;
  display:flex;
  align-items: center;
  color:white;
  justify-content: center;
  }
  .button:hover{
    opacity:0.9;
    cursor:pointer;
  }
  .description{
font-size: 14px;
font-weight: 500;
line-height: 20px;
letter-spacing: 1.5px;
text-transform: uppercase;
padding-right:20px;
display:flex;
flex-direction: column;
  }

</style>
