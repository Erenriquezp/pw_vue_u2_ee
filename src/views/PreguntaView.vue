<template>
    <div class="view-container">
        <Pregunta />
    </div>
</template>

<script>
import Pregunta from '@/components/Pregunta.vue';
export default {
    components: {
        Pregunta,
    },
};
</script>

<style scoped>
.view-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>