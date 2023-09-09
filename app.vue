<template>
  <div>
    <h1 class="bg-green-800">APP VUE</h1>
    <h1 class="red">APP VUE</h1>
    <NuxtLayout>
      <NuxtPage />
      <!-- <NuxtWelcome /> -->
    </NuxtLayout>
  </div>
</template>
<style lang="postcss" scoped>
.red {
  @apply bg-red-100;
  @apply p-4;
}
</style>
