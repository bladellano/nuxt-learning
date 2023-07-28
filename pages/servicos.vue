<template>

  <div>

    <div class="bg-gray-100">
      <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
        <nuxt-link :to="{name:'a-empresa'}">A Empresa</nuxt-link>
        <nuxt-link :to="{name:'servicos'}">Serviços</nuxt-link>
        <nuxt-link :to="{name:'produtos'}">Produtos</nuxt-link>
      </div>
    </div>

    <div>
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">Serviços</h1>

        <nuxt-link class="bg-gray-300" to="/servicos/desenvolvimento-de-sites">desenvolvimento-de-sites</nuxt-link>
        <nuxt-link class="bg-gray-300" to="/servicos/curso-de-vue-js">curso-de-vue-js</nuxt-link>

        <nuxt-child />

      </div>
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
