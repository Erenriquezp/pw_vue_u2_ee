<template>
    <div>
        <img src="https://yesno.wtf/assets/yes/5-64c2804cc48057b94fd0b3eaf323d92c.gif" alt="No se puede cargar la imagen" srcset="">
        <div class="pregunta-container">
            <input type="text" placeholder="Hazme una pregunta" name="" id="">
            <p>Recuerda terminar con el signo de interrogación (?)</p>

            <h2>Seré millonario?</h2>
            <h1>YES, NO</h1>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'Pregunta',
};
</script>

<style> 

img {
    height: 100vh;
    width: 100vw;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
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