<template>
  <div>
    <h1>{{titulo}}</h1>
    <h1>{{ tit }}</h1> 
    <p>{{ numero }}<sup>2</sup>= {{ calculaCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup>= {{ calculaCuadrado }}</p>
    <p>{{ numero }}<sup>3</sup>= {{ obtenerCubo() }}</p>
    <p>{{ numero }}<sup>2</sup>= {{ calculaCuadrado }}</p>
    <p>{{ numero }}<sup>2</sup>= {{ calculaCubo }}</p>
    <div>
      <button v-on:click="incrementar()">+1</button>
      <button v-on:click="decrementar()">-1</button>
      <button v-show="mostrar">prueba</button>
    </div>
  </div>
</template>

<script>
export default {

  data() { //propiedades reactivas
    return {
      numero: this.inicio,
      titulo: 'Contador'
    }
  }, 
  methods:{
    obtenerCuadrado() {
      console.log('Entró a obtener el cuadrado');
      return this.numero * this.numero;
    },
    obtenerCubo() {
      console.log('Entró a obtener cubo');
      return this.numero * this.numero * this.numero;    
    },
    incrementar() {
      console.log(this.tit);
      this.numero ++;
    },
    decrementar() {
      this.numero --;
    }
  },
  computed: {
    calculaCuadrado() {
      console.log('Entró a propiedad computada');
      return this.numero * this.numero;
    },
    calculaCubo() {
      console.log('Entró a una propiedad computada');
      return this.numero * this.numero * this.numero;
    },
  },
  //props: ['tit', 'inicio', 'mostrar'], Declaracion básica
  props:{
    tit: String,
    inicio: {
      type: Number,
      default: 99,
      validator(value) {
        return value > 10;
      }
    },
    mostrar: Boolean
  },
  // props: pueden ser tipo string, boolean, array, objetct, date, funiction, BigInt
};
</script>

<style>

</style>