<template>
    <div>
        <PokemonImagen  v-if="mostrar" :pokemonId="pokemonGanador" />
        <PokemonOpciones @pokemonSeleccionado="evaluarGanador($event)" :listaPokemon="pokemonArr" />
        <div class="message" v-if="juegoIniciado && esGanador">
            <h2>¡Has ganado!</h2>
        </div>
        <div class="message" v-if="juegoIniciado && !esGanador">
            <h2>¡Has perdido!</h2>
        </div>
        <button @click="destruir">Destruir</button>
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
            esGanador: false,
            juegoIniciado: false,
            mostrar: true
        };
    },
    methods: {
        async iniciarJuego() {
            this.pokemonArr = await obtenerVectorPokemonFacade();
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
            this.juegoIniciado = true;
        },
        destruir() {
            this.mostrar = false;
        }
    },
    /* Cuando se crea el componente */
    beforeCreate() {
        console.log('Before Create: Apenas inicia la instancia del componente');
    },
    created(){
        console.log('Created: Ya se ha creado el data, computed, methods, etc. Pero aún no se ha montado el componente en el DOM');
    },
    beforeMount() {
        console.log('Before Mount: El componente está a punto de montarse en el DOM, pero aún no se ha visualizado en pantalla');
    },
    mounted() {
        console.log('Mounted: El componente ya se ha montado en el DOM, cuando ya se visualizar el componente en pantalla');
        this.iniciarJuego();
    },
    
    /* Cuando se actualiza el componente */
    beforeUpdate() {
        console.log('Before Update: El componente está a punto de actualizarse, cuadno cambia un data, props, etc. Pero aún no se ha actualizado el DOM ');
    },
    updated() {
        console.log('Updated: El componente ya se ha actualizado tras el re-renderización, cuando ya se refleja el cambio en el DOM');
    },
    
    
}
</script>

<style>

    .message {
        text-align: center;
        margin-top: 20px;
    }
    
</style>