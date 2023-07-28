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

        <nuxt-link to="/servicos/desenvolvimento-de-sites">desenvolvimento-de-sites</nuxt-link>
        <nuxt-link to="/servicos/curso-de-vue-js">curso-de-vue-js</nuxt-link>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo doloremque quaerat odio cupiditate, maxime aperiam voluptates deserunt delectus modi obcaecati quo tempora a, at eveniet! Eligendi omnis maiores magnam? Minus praesentium recusandae incidunt blanditiis, accusamus ab saepe ullam totam unde earum adipisci enim cum amet voluptas doloremque commodi fugit?</p>
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
