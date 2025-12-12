<template>
    <div>
        <img v-if="imagen" :src="imagen" alt="No se puede cargar la imagen"> 
        <div class="oscuro">
            <div class="pregunta-container">
            <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" name="" id="">
            <p>Recuerda terminar con el signo de interrogación (?)</p>

            <h2>{{ pregunta }}</h2>
            <h1>{{ respuesta }}</h1>
        </div>
        </div> 
    </div>
</template>

<script>
    // : enlace reactivo (v-bind)
import { consumirAPIFacade } from '../clients/YesNoClient.js'; // Entre llaves importar la función específica
export default {
  data() { // propiedad reactiva
    return {
        pregunta: null,
        respuesta: null,
        imagen: null,
    };
  },
  watch: { // observar cambios en las propiedades reactivas, se disparan cuando estas cambian
    pregunta(value, oldValue) {
            //console.log(value);
            //console.log(oldValue);

            if (value.includes('?')) { // Llamar a la API solo si la pregunta tiene signo de interrogación
                console.log('Es una pregunta');
                this.respuesta = '...cargando'; // Mensaje de carga mientras se espera la respuesta
                this.consumir();
            }
        }
    },      
    methods: {
        async consumir() {
            const resp = await consumirAPIFacade();
            console.log('Respuesta final');
            console.log(resp);
            console.log(resp.answer); // Esperar una respuesta de la API, axios no lo hace por defecto
            this.respuesta = resp.answer;
            this.imagen = resp.image;
        }   
    }
};
</script>

<style> 

img, .oscuro {
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
}

.oscuro {
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.pregunta-container {
   position: relative;

   min-height: 100vh; /* altura de toda la pantalla */
   display: flex;
   flex-direction: column; /* elementos uno debajo de otro */
   justify-content: center; /* centrado vertical */
   align-items: center; /* centrado horizontal */
}

input {
    width: 300px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
}

input:focus {
    outline: none;
    box-shadow: 0 0 5px #42b983;
}

h1, h2, p {
    color: white;
}

p {
    margin-top: 20px;
    font-size: 20px;
}

h2 {
    margin-top: 40px;
    font-size: 30px;
    color: #42b983;
}

</style>