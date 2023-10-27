import { defineStore } from 'pinia';

export const useDatosLLamadas = defineStore('datosLLamadas',{
  state: () => ({
    categoriaSeleccionada: null, 
  }),
  actions: {
    setCategoria(idCategoria) {
      this.categoriaSeleccionada = idCategoria; 
    },
  },
});