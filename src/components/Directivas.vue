<template>
    <div>
        <label for="id_nombre">Nombre</label>
        <input v-model="nombre" type="text" id="id_nombre">
        <p>{{ nombre }}</p>

        <label for="id_apellido">Apellido</label>
        <input type="text" v-model="apellido" name="" id="id_apellido">

        <button v-on:click="imprimirNombre()">Imprimir nombre</button>
        <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>
        <h1>{{ arreglo }}</h1>

        <ul>
           <!--  <li v-for="estudiante in arreglo" key="estudiante.nombre">
                {{ estudiante.nombre }} - {{ estudiante.apellido }}
            </li> -->
            <li 
            v-show="nombre !== null" 
            v-for="{nombre, apellido} in arreglo" 
            :key="nombre">
                {{ nombre }} - {{ apellido }}
            </li>
        </ul>
        <h2>Tabla</h2>
        <table>
            <thead>
                <tr>
                     <th>Nombre</th>
                    <th>Apellido</th>
                </tr>
            </thead>
            <tbody>
                <tr v-show="nombre !== null" 
            v-for="{nombre, apellido} in arreglo" 
            :key="nombre">
                    <td>{{ nombre }}</td>
                    <td>{{ apellido }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: null,
            apellido: null,
            //arreglo: [1,2,3,4],
            arreglo: [],

        };
    },
    methods: {
        imprimirNombre() {
            console.log(this.nombre);
        },
        agregarEstudiante() {
            const estu = {
                nombre: this.nombre,
                apellido: this.apellido
                
            };
            console.log('Se agrega estudiante');
            console.log(estu);
            this.arreglo.push(estu);
            this.limpiarformulario();
        },
        limpiarformulario() {
            this.nombre=null;
            this.apellido=null;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>