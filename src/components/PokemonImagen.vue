<template>
    <div class="pokemon-container">
        <img :src="srcImagen" alt="Pokemon Imagen" />
    </div>
</template>

<script>
export default {
    props: {  
        pokemonId: {
            type: Number,
            required: true
        }
    },
    computed: {
        srcImagen() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    },
    /* Desmontaje del componente */
    beforeUnmount() {
        console.log('Before Unmount: El componente está a punto de desmontarse, cuando se va a eliminar del DOM');
    },
    unmounted() {
        console.log('Unmounted: El componente ya se ha desmontado, cuando ya no está en el DOM');
    },
}
</script>

<style scoped>
    .pokemon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 200px;
        height: 200px;
        right: 32%;
    }
</style>