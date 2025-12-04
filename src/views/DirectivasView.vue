<template>
    <div class="view-container">
        <h2>Prueba</h2>
        <Directivas/>
    </div>
</template>

<script>

import Directivas from '@/components/Directivas.vue';

export default {
    components: {
        Directivas,
    },
};

</script>

<style scoped>
.view-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    color: #42b983;
    font-size: 50px;
}
</style>