<template>
    <div id="categoriaYProducto">
        <div id="categoria">
            <div class="categoriaContenido">
                <h5>Subcategoria</h5>
                <div class="contenidoCategoria" v-if="categoria">
                    <div v-for="categoriaEnCategoria in categoria.categories">
                        <li @click="seleccionarCaterogia(categoriaEnCategoria)">{{ categoriaEnCategoria.name }}{{
                            categoriaEnCategoria.id }}</li>
                    </div>
                </div>
            </div>
        </div>
            <div id="componenteProductos">
                <div v-for="productoId in productosIDs" :key="productoId" >
                    <producto :idProducto="productoId"></producto>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
import producto from 'src/components/producto.vue'

export default {
    name: "categoria",
    props: ["idCategoria"],
    data() {
        return {
            error: null,
            categoria: null,
            productoSeleccionado: null,
            mostrarProductos: false,
            categoriaSeleccionada: null,
            productosIDs: []
        }
    },
    components: {
        producto
    },
    watch: {
        idCategoria(idCategoria) {
            axios.get('http://127.0.0.1:4000/productosEnCategoria/mercadona/' + idCategoria)
                .then(response => {
                    this.categoria = response.data;
                })
                .catch(error => {
                    this.error = 'Error al obtener la categoria ' + error.message;
                })
        },
    },
    methods: {
        seleccionarCaterogia(categoria) {
            this.categoriaSeleccionada = categoria;
            this.productosIDs = [];

            if (categoria.products) {
                categoria.products.forEach(producto => {
                    this.productosIDs.push(producto.id);
                });
            }
        }
    }
};
</script>

<style>
#categoriaYProducto {
    display: grid;
    grid-template-columns: 1fr 3fr;
}

#componenteProductos{
    display: flex;
    flex-wrap: wrap;
}

#componenteProductos > div{
    border: 1px solid black;
}
</style>
