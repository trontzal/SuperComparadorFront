<template>
  <q-page class="q-pa-md" id="paginaIndex">
    <h4>Index</h4>
    <componentePruebas></componentePruebas>
  </q-page>
</template>

<script>
import componentePruebas from 'src/components/componentePruebas.vue';

export default {
  name: 'Index',
  components:{
    componentePruebas
  }
}
</script>
<style>
  #paginaIndex{
    
  }

</style>
