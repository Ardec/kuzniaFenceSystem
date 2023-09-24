<template>
<div class="Fences-container">
    <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Wymiary przęsła'"
    :bodyText="'Przęsła Kuźnia można montować wewnątrz ram bramy przesuwnej, dwuskrzydłowej, furtki, balkonu, ramy na wymiar, bądź do samych słupów. Podaj najpierw szerokość oraz wysokość przęsła, które chcesz uzyskać.'"
    />

      <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Mini wizualizacja'"
    :bodyText="'Tak może wyglądać Twoje przęsło w widoku 2D od frontu. Elementy z prawej i lewej to ceowniki trzymające konstrukcję. Aby rozpocząć wciśnij przycisk dodaj element'"
    />

    <Visualisation />
      <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Przybliżenie x6'"
    :bodyText="'Poniżej przęsła zostały rozpisane w przybliżonym widoku aby można było dokładnie określić wymiary oraz przerwy. Domyślna przerwa to 20mm'"
    />
        <TextBlock
    :titleText="'kreator przęseł'"
    :headerText="'Przerwy'"
    :bodyText="'Przerwy pomiędzy panelami służą jedynie wizualizacji'"
    />

    <!-- <Cart /> -->
</div>


</template>


<script setup lang="ts">


</script>
