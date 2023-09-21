<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
          <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Dodaj nowy panel'"
    :bodyText="'Przęsła Kuźnia można montować wewnątrz ram bramy przesuwnej, dwuskrzydłowej, furtki, balkonu, ramy na wymiar, bądź do samych słupów. Podaj najpierw szerokość oraz wysokość przęsła, które chcesz uzyskać.'"
    />
    <div class="one-piece-visual m-4">
    <div class="panel" :style="'height:'+panelWidth/10+'px'">
      <div class="container-height"><div class="piece-height" >{{panelWidth}} (mm)</div></div>
      <div class="container-color"><div class="piece-color m-4">{{color}}</div></div>
    </div>
    
    </div>

      <!-- <label>Szerokość panela:</label>
      <input v-model="panelWidth" type="number" placeholder="Wpisz szerokość"> -->
      <!-- <label>Kolor:</label> -->
      <div class="dimension-width mx-4 mt-2">
            <label for="szerokosc_panela" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Szerokość (mm)</label>
            <input v-model="panelWidth" type="number" id="szerokosc_panela" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Szerokość" :min="fenceMinWidth" :max="fenceMaxWidth" @blur="handleInput($event, 'width')" required>
      </div>
      <div class="dimension-width mx-4 mt-2">
        <label for="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wybierz kolor (ral)</label>
        <select id="color" v-model="color" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <!-- <option value="7016 połysk">7016 połysk</option>
        <option value="7016 struktura">7016 struktura</option>
        <option value="9005 połysk">9005 połysk</option>
        <option value="9005 struktura">9005 struktura</option> -->
        <option 
      v-for="panel in panels" 
      :key="panel.hex" 
      :value="panel.hex">
      {{ panel.color }}
    </option>
      </select>

      {{panels}}
      </div>
       <div class="dimension-width mx-4 mt-2">
            <label for="odstep" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Odstęp od następnego panela (mm)</label>
            <input v-model="profileSpacing" type="number" id="odstep" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Szerokość" :min="fenceMinWidth" :max="fenceMaxWidth" @blur="handleInput($event, 'width')" required>
      </div>
      <div class="bottom-actions m-4 mt-8">
        <button class="add-btn text-white px-4 py-2" @click="addPanel">Zapisz</button>
        <button class="add-btn text-white px-4 py-2" @click="closeModal">Zamknij</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import usePanelData from "~/composables/usePanelData"
const { panels } = usePanelData()
console.log( panels )

const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits({
  updateIsOpen: Boolean
})

const closeModal = () => {
  emit('updateIsOpen', false);
};


const panelWidth = ref(2000)
const color = ref('7016 struktura')
const profileSpacing = ref(20)

</script>

<style scoped>
.modal-overlay {
  position: fixed;
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
