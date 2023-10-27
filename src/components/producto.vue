<template>
    <div v-if="productoEspecifico">
        <div v-if="productoEspecifico.display_name">
            <div id="producto">
                <div class="contenidoProducto">
                    <p>{{ productoEspecifico.display_name }}</p>
                    <p></p>
                    <div class="imgProducto">
                        <img :src="productoEspecifico.thumbnail" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Producto',
    props: ["idProducto"],
    data() {
        return {
            productoEspecifico: null,
            error: null
        };
    },
    watch: {
        idProducto: "buscarProducto"
    },
    methods: {
        buscarProducto() {
            if (this.idProducto) {
            axios.get('http://127.0.0.1:4000/productosEspecificos/mercadona/' + this.idProducto)
                .then(response => {
                        this.productoEspecifico = response.data
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

<style>
/* no se me ocurre otra forma de sokucionarlo */
#producto {
    border: 1px solid black;
    height: 12rem;
    width: 12rem;
    margin: 0.5rem;
    overflow: hidden;
}

.contenidoProducto {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center; 
}

.imgProducto {
    width: 100%;
    height: 100%; 
    overflow: hidden;
}

.imgProducto > img {
    width: auto; 
    height: 100%; 
}


</style>
