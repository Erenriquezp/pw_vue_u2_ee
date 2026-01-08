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
    }
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