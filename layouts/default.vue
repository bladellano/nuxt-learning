<template>
  <div>
    <div class="bg-gray-100">
      <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link :to="{ name: 'a-empresa' }">A Empresa</nuxt-link>
        <nuxt-link :to="{ name: 'servicos' }">Serviços</nuxt-link>
        <nuxt-link :to="{ name: 'produtos' }">Produtos</nuxt-link>
      </div>
    </div>

    <div>
      <div class="container mx-auto">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
</style>
