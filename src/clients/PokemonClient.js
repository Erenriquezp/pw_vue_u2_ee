import axios from 'axios';

const consumirAPI = async (id) => { // no es correcto poner directamente export 
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.data);
    console.log(respuesta);
    return respuesta;
}

export async function consumirAPIFacade(id) { // función que llama a consumirAPI
    return await consumirAPI(id); // await siempre que se llame a una función async
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector.push(obtenerAleatorio(1, 600));
    }
    return vector;
}

const obtenerVectorPokemon = async () => {
    const vectorNumerico = obtenerVectorNumerico();
    const vectorPokemon = [];
    for (let i = 0; i < vectorNumerico.length; i++) {
        const pokemon = await consumirAPIFacade(vectorNumerico[i]);
        vectorPokemon.push( {id: pokemon.id, name: pokemon.name, img: pokemon.sprites.front_default} );
    }
    console.log("Vector de pokemons obtenido: ", vectorPokemon);
    return vectorPokemon;
}

export async function obtenerVectorPokemonFacade() {
    console.log("Obteniendo vector de pokemons...");
    console.log("Vector numérico generado: ", obtenerVectorNumerico());
    return obtenerVectorPokemon();
}

export function obtenerAleatorioFacade(min, max) {
    return obtenerAleatorio(min, max);
}