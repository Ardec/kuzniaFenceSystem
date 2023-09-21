<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
          <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Dodaj nowy panel'"
    :bodyText="'Przęsła Kuźnia można montować wewnątrz ram bramy przesuwnej, dwuskrzydłowej, furtki, balkonu, ramy na wymiar, bądź do samych słupów. Podaj najpierw szerokość oraz wysokość przęsła, które chcesz uzyskać.'"
    />
    <div class="one-piece-visual m-4">
      <div class="piece-height" :style="'height:'+panelWidth/10+'px'" >{{panelWidth}}</div>
      <div class="piece-color">{{color}}</div>
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
        <option value="7016 połysk">7016 połysk</option>
        <option value="7016 struktura">7016 struktura</option>
        <option value="9005 połysk">9005 połysk</option>
        <option value="9005 struktura">9005 struktura</option>
      </select>
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
const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits({
  updateIsOpen: Boolean
})

const closeModal = () => {
  emit('updateIsOpen', false);
};


const panelWidth = ref(900)
const color = ref('7016')
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
  width: 60vw;
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
  width:80%;
  background-color: black;
  color:white;
  display:flex;
  justify-content: space-between;
}
.piece-height{
  align-items: center;
  height:100%;
  background-color: #1369A8;
}
.piece-color{
  align-items: bottom;
  height:100%;
  background-color: #1369A8;
}
</style>
