<template>
    <div id="categoriasYCategoria">
        <div id="categorias">
            <h5>Categorias Mercadona</h5>
            <div v-if="error">{{ error }}</div>
            <ul>
                <li v-for="categoria in categorias.results" :key="categoria.id">
                    <div class="categoriasPrincipales" @click="seleccionarCategoria(categoria.id)">{{ categoria.name }}</div>
                </li>
            </ul>
        </div>
        <categoria :idCategoria = "categoriaSeleccionada" ></categoria>
    </div>
</template>

<script>
import axios from 'axios';
import categoria from 'src/components/categoria.vue'

export default {
    name: 'Pruebas',
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
        }
    }
};
</script>

<style>

#categoriasYCategoria{
    display: grid;
    grid-template-columns: 1fr 2fr;
}

.categoriasPrincipales{
    cursor: pointer;
    margin-top: 0.3rem;
}

</style>