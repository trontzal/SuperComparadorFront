<template>
    <div id="categoriasYCategoria">
        <div id="categorias">
            <h5>Categorias</h5>
            <div class="contenidoCategorias">
                <div v-if="error">{{ error }}</div>
                <ul>
                    <li v-for="categoria in categorias.results" :key="categoria.id">
                        <div class="categoriasPrincipales" @click="seleccionarCategoria(categoria.id)">
                            {{ categoria.name }}{{ categoria.id }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <categoria :idCategoria = "categoriaSeleccionada" ></categoria> -->
    </div>
</template>

<script>
import axios from 'axios';
import categoria from 'src/components/categoria.vue'
import { useDatosLLamadas } from 'src/stores/example-store.js';

export default {
    name: 'Pruebas',
    setup() {
        const datosLLamadas = useDatosLLamadas();

        return {
            useDatosLLamadas: datosLLamadas
        };
    },
    components:{
        categoria
    },
    data() {
        return {
            categorias: {},
            categoriaSeleccionada: null,
            error: null
        };
    },
    created() {
        this.fetchCategorias();
    },
    methods: {
        fetchCategorias() {
            axios.get('http://127.0.0.1:4000/categorias/mercadona')
                .then(response => {
                    this.categorias = response.data;
                })
                .catch(error => {
                    this.error = 'Error al obtener las categorías: ' + error.message;
                });
        },
        seleccionarCategoria(idCategoria){
            this.categoriaSeleccionada = idCategoria
            this.useDatosLLamadas.setCategoria(idCategoria);
        }
    }
};
</script>

<style>

#categoriasYCategoria{
    display: grid;
    grid-template-columns: 1fr 3fr;
    max-height: 60%;
}

.categoriasPrincipales{
    cursor: pointer;
    margin-top: 0.3rem;
}

.contenidoCategorias{
    overflow: auto;
    max-height: 60%;
}

</style>