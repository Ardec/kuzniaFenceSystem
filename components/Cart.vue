<template>
  <div class="m-4">
    Component: Cart
    <!-- {{ cart }} -->
  </div>
</template>

<script lang="ts" setup>

import useCart from '~/composables/useCart'
const { cart } = useCart()

</script>
<style scoped></style>