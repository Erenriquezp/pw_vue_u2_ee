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

        <hr />
        <label for="id_nombre_1">Nombre</label>
        <input v-model="nombre" type="text" id="id_nombre_1">
        <label for="id_apellido_1">Apellido</label>
        <input v-model="apellido" v-on:keypress.enter="agregarEstudiante1" type="text" id="id_apellido_1">

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
        agregarEstudiante1(event) {
            console.log('evento');
            if (event.charCode !== 13) {
                return;
            }
            const estu = {
                nombre: this.nombre,
                apellido: this.apellido
            };
            console.log('Presionaste enter');
            console.log('Se agregó estudiante 1');
            //console.log(event);
            console.log(estu);
            this.arreglo.push(estu);
            this.limpiarformulario();
            //console.log(event.target.value);
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