<template>
    <q-page class="q-pa-md">
        <h1>Prueba</h1>
        <categoria></categoria>
    </q-page>
</template>

<script>
import pruebaPinia from 'src/components/pruebaPinia.vue';
import categoria from 'src/components/subCategoria.vue'

export default {
    name: 'Index',
    components: {
        categoria
    }
}
</script>
<style></style>
