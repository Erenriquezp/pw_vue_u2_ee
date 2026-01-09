<template>
    <div>
        <PokemonImagen :pokemonId="pokemonGanador" />
        <PokemonOpciones @pokemonSeleccionado="evaluarGanador($event)" :listaPokemon="pokemonArr" />
        <div class="message" v-if="esGanador">
            <h2>¡Has ganado!</h2>
        </div>
        <div class="message" v-if="!esGanador">
            <h2>¡Has perdido!</h2>
        </div>
    </div>
</template>

<script>
import { obtenerAleatorioFacade, obtenerVectorPokemonFacade } from '@/clients/PokemonClient';
import PokemonImagen from '@/components/PokemonImagen.vue';
import PokemonOpciones from '@/components/PokemonOpciones.vue';

export default {
    components: {
        PokemonImagen,
        PokemonOpciones
    },
    data() {
        return {
            pokemonArr: [],
            pokemonGanador: 0,
            esGanador: false
        };
    },
    methods: {
        async iniciarJuego() {
            this.pokemonArr = await obtenerVectorPokemonFacade();
            console.log(this.pokemonArr);
            const ganadorIndex = obtenerAleatorioFacade(0, 3);
            this.pokemonGanador = this.pokemonArr[ganadorIndex].id;
            console.log("Pokémon ganador: ", this.pokemonArr[ganadorIndex].name);
        },
        evaluarGanador(idGanador) {
            console.log("Valor recibido en padre")
            console.log("Pokémon seleccionado en la vista: ", idGanador);
            if (idGanador === this.pokemonGanador) {
                console.log("¡Has ganado!");
                this.esGanador = true;
            } else {
                console.log("¡Has perdido!");
                this.esGanador = false;
            }
            this.iniciarJuego();
        }
    },
    mounted() {
        console.log('Mounted');
        this.iniciarJuego();
    }
    
}
</script>

<style>

    .message {
        text-align: center;
        margin-top: 20px;
    }
    
</style>