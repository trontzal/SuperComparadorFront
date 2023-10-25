<template>
    <div id="producto">
        <h5>Producto</h5>
        <div v-if="productoEspecifico">
            <p>{{ productoEspecifico.display_name }}</p> 
            <p>{{ productoEspecifico.brand }}</p>
            <img :src="productoEspecifico.thumbnail" alt="">
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
                        console.log(this.productoEspecifico)
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
