<template>
<div class="Fences-container">
    <TextBlock 
    :titleText="'kreator przęseł'"
    :headerText="'Wymiary przęsła'"
    :bodyText="'Przęsła Kuźnia można montować wewnątrz ram bramy przesuwnej, dwuskrzydłowej, furtki, balkonu, ramy na wymiar, bądź do samych słupów. Podaj najpierw szerokość oraz wysokość przęsła, które chcesz uzyskać.'"
    />

    <div class="dimensions-container">
        <div class="dimension-width">
            <label for="szerokosc_przesla" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Szerokość</label>
            <input type="text" id="szerokosc_przesla" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
         <div class="dimension-width">
            <label for="wysokość_przesla" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Wysokość</label>
            <input type="text" id="wysokość_przesla" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
    </div>
      <TextBlock 
    :titleText="'kreator przęseł'"
    :headerText="'Mini wizualizacja'"
    :bodyText="'Tak może wyglądać Twoje przęsło w widoku 2D od frontu. Elementy z prawej i lewej to ceowniki trzymające konstrukcję. Aby rozpocząć wciśnij przycisk dodaj element'"
    />
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
</div>


</template>