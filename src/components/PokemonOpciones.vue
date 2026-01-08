<template>
    <div class="opciones-container">
        <ul>
            <li>Pokemon 1</li>
            <li>Pokemon 2</li>
            <li>Pokemon 3</li>
            <li>Pokemon 4</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    ul {
        list-style: none;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 1px solid;
        cursor: pointer;
        width: 250px;
        margin-top: 10px;
        padding: 10px;
        text-align: center;
    }
    .opciones-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>