

<script lang="ts" setup>

const props = defineProps({
   visible: Boolean,
   message: String
})
const localVisible = ref(props.visible)
const emit = defineEmits(['update:localVisible']);

watchEffect(() => {
  localVisible.value = props.visible;
});

watch(localVisible, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      localVisible.value = false;
      emit('update:localVisible', false);
    }, 300);
  }
});
</script>

<!-- components/Toast.vue -->
<template>
  <transition name="fade">
      <div v-if="localVisible" class="toast">
      {{ message }}
    </div>
  </transition>
</template>

<style scoped>
.toast {
  position: fixed;
  opacity:1;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1369A8;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>