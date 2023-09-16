
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
    <div class="draw-container m-4 bg-blue-500">
      <div class="draw">

      </div>
    width: {{fenceWidth}}
    height: {{fenceHeight}}
    </div>
    
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
</script>

<style scoped>
.visualisation-container{
  /* padding:11px 16px; */
}

</style>
