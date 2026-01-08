<template>
  <div>
    <!--<ContadorView />-->
    <!-- <DirectivasView /> -->
    <!-- <PreguntaView /> -->
    <PokemonView />
</div>
</template>

<script>
import ContadorView from '../src/views/ContadorView.vue';
import DirectivasView from './views/DirectivasView.vue';
import PokemonView from './views/PokemonView.vue';
import PreguntaView from './views/PreguntaView.vue';

export default {
  components: {
    ContadorView,
    DirectivasView,
    PreguntaView,
    PokemonView
  },
};

</script>

<style>

</style>