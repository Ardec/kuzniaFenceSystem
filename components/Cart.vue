<template>
  <div class="m-4">
    Component: Cart
  </div>
</template>

<script lang="ts" setup>

import useCart from '~/composables/useCart'
const { cart } = useCart()

</script>
<style scoped></style>