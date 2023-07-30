<template>

    <div>
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">Serviços</h1>

        <nuxt-link class="bg-gray-300" to="/servicos/desenvolvimento-de-sites">
          desenvolvimento-de-sites
        </nuxt-link>
        <nuxt-link class="bg-gray-300" to="/servicos/curso-de-vue-js">
          curso-de-vue-js
        </nuxt-link>

        <pre>
          {{ $fetchState }}
        </pre>

        <div v-if="$fetchState.pending">
          <small>Carregando...</small>
        </div>

        <div v-else>
          <ul class="list-disc text-purple-500">
          <li class="mb-2" v-for="(planet, index) in services" :key="index">
            {{ planet.name }}
          </li>
          </ul>
        </div>

        <nuxt-child />

      </div>

    </div>

</template>

<script>
  export default {
    name:'ServicosChild',
    data(){
      return {
        services: []
      };
    },
    async fetch(){

      const { data } =  await this.$axios.get('/planets');
      this.services = data.results;

      /*
      console.log(this);
      console.time('myTimer');

      await new Promise((resolve)=>{
        setTimeout(()=>{
          console.log('> Promise resolved!');
          console.timeEnd('myTimer');
          resolve();
        }, 3000)
      }); */

    }
  }
</script>

<style>

</style>
