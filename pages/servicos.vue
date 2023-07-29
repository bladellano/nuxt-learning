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

        <nuxt-child />

      </div>

    </div>

</template>

<script>
  export default {
    name:'',
    data(){
      return {

      };
    }
  }
</script>

<style>

</style>
