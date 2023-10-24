<template>
    <div>
        <h2>Categorias Mercadona</h2>
        <div v-if="error">{{ error }}</div>
        <ul>
            <li v-for="categoria in categorias.results" :key="categoria.id">
                {{ categoria.name }}
                {{ categoria.id }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            categorias: {
                results: []
            },
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
        }
    }
};
</script>
