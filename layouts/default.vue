<template>
<div class=„bg-blue-500”>
     <Header />
    <Sidebar />
<slot />
 <!-- <h1>DEFAULT LAYOUT</h1> -->
</div>
</template>

<style lang="postcss">
.router-link-active {
@apply text-blue-500;
}
</style>