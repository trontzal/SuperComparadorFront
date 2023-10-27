<template>
    <div>
        <h3>Prueba pinia</h3>
        <p>{{ useDatosLLamadas.ejemplo }}</p>
    </div>
</template>

<script>
import { useDatosLLamadas } from 'src/stores/example-store.js';

export default {
    setup() {
        const datosLLamadas = useDatosLLamadas();

        return {
            useDatosLLamadas: datosLLamadas
        };
    }
}
</script>
