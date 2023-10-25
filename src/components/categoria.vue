<template>
    <div id="categoriaYProducto">
        <div id="categoria">
            <div class="categoriaContenido">
                <h5>Categoria</h5>
                <div class="contenidoCategoria" v-if="categoria">
                    <div v-for="categoriaEnCategoria in categoria.categories">
                        <li>{{ categoriaEnCategoria.name }} {{ categoriaEnCategoria.id }}</li>
                        <ol>
                            <li v-for="productosEnCategoria in categoriaEnCategoria.products">
                                <div @click="seleccionarProducto(productosEnCategoria.id)">{{ productosEnCategoria.display_name }}{{ productosEnCategoria.id }}</div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <producto :idProducto="productoSeleccionado"></producto>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import producto from 'src/components/producto.vue'

export default {
    name: "categoria",
    props: ["idCategoria"],
    data(){
        return{
            error : null,
            categoria : null,
            productoSeleccionado: null
        }
    },
    components:{
        producto
    },
    watch: {
        idCategoria(idCategoria) {
            axios.get('http://127.0.0.1:4000/productosEnCategoria/mercadona/' + idCategoria)
            .then(response =>{
                this.categoria = response.data
            })
            .catch(error =>{
                this.error = 'Error al obtener la categoria ' + error.message;
            })
        },
    },
    methods:{
        seleccionarProducto(productoId){
            this.productoSeleccionado = productoId
            console.log(this.productoSeleccionado)
        }
    }
};
</script>

<style>

#categoriaYProducto{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

</style>
