<template>
    <div>
        <PokemonImagen :pokemonId="pokemonId" />
        <PokemonOpciones />
    </div>
</template>

<script>
import PokemonImagen from '@/components/PokemonImagen.vue';
import PokemonOpciones from '@/components/PokemonOpciones.vue';

export default {
    components: {
        PokemonImagen,
        PokemonOpciones
    },
    data() {
        return {
            pokemonId: 25
        }
    }
    
}
</script>

<style>
    
</style>