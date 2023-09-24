<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
          <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Dodaj nowy panel'"
    :bodyText="'Przęsła Kuźnia można montować wewnątrz ram bramy przesuwnej, dwuskrzydłowej, furtki, balkonu, ramy na wymiar, bądź do samych słupów.'"
    />
    <div class="one-piece-visual m-4">
    <div class="panel" :style="{ height: panelWidth + 'px', backgroundColor: selectedPanel.hex }">
      <div class="container-height"><div class="piece-height" >{{panelWidth}} (mm)</div></div>
      <div class="container-color"><div class="piece-color m-4">{{selectedPanel.color}}</div></div>
    </div>
    </div>

      <div class="dimension-width mx-4 mt-2">
            <label for="szerokosc_panela" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Szerokość (mm)</label>
            <input v-model="panelWidth" type="number" id="szerokosc_panela" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Szerokość" :min="fenceMinWidth" :max="fenceMaxWidth" @blur="handleInput($event, 'width')" required>
      </div>
      <div class="dimension-width mx-4 mt-2">
        <label for="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wybierz kolor (ral)</label>
        <select id="color" v-model="selectedPanel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option
      v-for="panel in panels"
      :key="panel.color"
      :value="panel">
      {{ panel.color }}
    </option>
      </select>
      </div>
       <div class="dimension-width mx-4 mt-2">
            <label for="odstep" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Odstęp od następnego panela (mm)</label>
            <input v-model="profileSpacing" type="number" id="odstep" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Szerokość" :min="fenceMinWidth" :max="fenceMaxWidth" @blur="handleInput($event, 'space')" required>
      </div>
      <div class="bottom-actions m-4 mt-8">
        <button class="add-btn text-white px-4 py-2" @click="addPanel">Zapisz</button>
        <button class="add-btn text-white px-4 py-2" @click="closeModal">Zamknij</button>
        <Toast :visible="showToast" :message="'Nowy panel został dodany!'" @update:localVisible="updateLocalVisible"/>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import usePanelData from "~/composables/usePanelData"
import useCart from '~/composables/useCart'
import { CartItem } from '~/composables/useCart'
import { Panel } from '~/composables/usePanelData'
const showToast = ref(false);

const { cart } = useCart()

console.log("my_cart",cart)

const { panels } = usePanelData()
const props = defineProps({
  isOpen: Boolean
})

const panelWidth = ref<number>(200)
const selectedPanel = ref<Panel>(panels[1])
const profileSpacing = ref<number>(20)
const profileSpacingMinWidth = ref<number>(2)
const proeileSpacingMaxWidth = ref<number>(300)
const panelMinWidth = ref<number>(90)
const panelMaxWidth = ref<number>(300)

type singlePanel = {
  id?: number,
  height: number,
  hex_color: string,
  top_space: number,
}


const emit = defineEmits(['updateIsOpen', 'addedPanel'])
interface MyEmits {
  updateIsOpen(value: boolean): void;
  addedPanel(panel: singlePanel): void;
}



const closeModal = () => {
  emit('updateIsOpen', false);
};

const updateLocalVisible = (value: boolean) => {
      showToast.value = value;
    };

const addPanel = () => {
  showToast.value = true;
  const newCartItem: CartItem = {
    productId: selectedPanel.value.id,
    productName: selectedPanel.value.color,
    quantity: 1,
    price: selectedPanel.value.price,
};
  const newSinglePanel:singlePanel = {
  height: panelWidth.value,
  hex_color: selectedPanel.value.hex,
  top_space:  profileSpacing.value,
}
  cart.value.push(newCartItem)
  emit('addedPanel', newSinglePanel)
  
};


const handleInput = (event: Event, type: String) => {
    if (!event.target) return;
    const target = event.target as HTMLInputElement; // Konwersja targetu na HTMLInputElement, żeby uzyskać dostęp do właściwości value, min, max, itp.
    const value = parseInt(target.value, 10);

    if(type === 'width'){
          if (value < panelMinWidth.value) {
    panelWidth.value = panelMinWidth.value
  } else if (value > panelMaxWidth.value) {
    panelWidth.value = panelMaxWidth.value
  }

    }
       if(type === 'space'){
          if (value < profileSpacingMinWidth.value) {
    profileSpacing.value = profileSpacingMinWidth.value
  } else if (value > proeileSpacingMaxWidth.value) {
    profileSpacing.value = proeileSpacingMaxWidth.value
  }

    }
}

</script>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index:1000;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.bottom-actions{
  display:flex;
  justify-content: space-between;
}
.add-btn{
display: inline-flex;
align-items: flex-start;
border-radius: 4px;
background: #1369A8;
text-transform: uppercase;
}
.one-piece-visual{
  color:white;
}
.panel{
   width:100%;
   background-color: black;
   display:flex;
   justify-content: space-between;
   min-height:90px;
   max-height:300px;
}
.container-color{
  display:flex;
}
.piece-color{
  display:flex;
  align-self:flex-end;
  text-transform: uppercase;
  border-bottom:solid #1369A8 3px;
}
.container-height{
  display:flex;
}
.piece-height{
  display:flex;
  border-bottom:solid #1369A8 3px;
  align-self: center;
  padding-left:40px;
  margin-left:10px;
}
</style>
