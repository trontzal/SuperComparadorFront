import { defineStore } from 'pinia';

export const useDatosLLamadas = defineStore('datosLLamadas',{
  state: () => ({
    ejemplo: [
      { id: 1, nombre: 'Ejemplo 1' },
      { id: 2, nombre: 'Ejemplo 2' },
      { id: 3, nombre: 'Ejemplo 3' }
    ]
  })
})