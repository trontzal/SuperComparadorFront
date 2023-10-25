<template>
    <div id="producto">
        <h5>Componente Producto</h5>
        <div v-if="productoEncontrado">
            <p>{{ productoEncontrado.display_name }}</p>
            <img src="mercadona.imgix.net/20190521/13/27213/vlc1/27213_00_02.jpg?fit=crop&h=206&w=206" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Producto',
    props: ["idCategoria", "idProducto"],
    data() {
        return {
            productoEncontrado: null,
            error: null
        };
    },
    watch: {
        idProducto: "buscarProducto"
    },
    methods: {
        buscarProducto() {
            if (this.idProducto) {
                axios.get('http://127.0.0.1:4000/productosEnCategoria/mercadona/' + this.idCategoria)
                    .then(response => {
                        const categorias = response.data.categories;
                        for (const categoria of categorias) {
                            for (const producto of categoria.products) {
                                if (producto.id == this.idProducto) {
                                    this.productoEncontrado = producto;
                                    console.log(this.productoEncontrado)
                                    break;
                                }
                            }
                        }
                    })
                    .catch(error => {
                        this.error = 'Error al obtener el producto: ' + error.message;
                    });
            }
        }
    },
    created() {
        this.buscarProducto();
    }
};
</script>
