<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
      <h2>Wybierz właściwości</h2>
      <label>Szerokość panela:</label>
      <input v-model="panelWidth" type="number" placeholder="Wpisz szerokość">
      <label>Kolor:</label>
      <select v-model="color">
        <option value="czerwony">Czerwony</option>
        <option value="zielony">Zielony</option>
        <option value="niebieski">Niebieski</option>
      </select>
      <label>Odstęp po profilu:</label>
      <input v-model="profileSpacing" type="number" placeholder="Wpisz odstęp">
      <button @click="closeModal">Zamknij</button>
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


const panelWidth = ref(0)
const color = ref('')
const profileSpacing = ref(0)

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
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
