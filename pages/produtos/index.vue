<template>
  <div>

    <h1 class="text-lg font-bold">Produtos</h1>

    <nuxt-link to="/produtos/produto-a">Produto A</nuxt-link>
    <nuxt-link to="/produtos/produto-b">Produto B</nuxt-link>

    <ul>
      <li v-for="(vehicle, index) in vehicles" :key="index"
      class="border-b border-gray-400">
        {{ vehicle.name }}
      </li>
    </ul>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
      doloremque quaerat odio cupiditate, maxime aperiam voluptates deserunt
      delectus modi obcaecati quo tempora a, at eveniet! Eligendi omnis maiores
      magnam? Minus praesentium recusandae incidunt blanditiis, accusamus ab
      saepe ullam totam unde earum adipisci enim cum amet voluptas doloremque
      commodi fugit?
    </p>

  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {};
  },
  async asyncData({$axios}) {

    console.log(this); //undefined

    const vehicles = await $axios.get('/vehicles');
    console.log('vehicles', vehicles); ;

    /*
    console.time('myTimer');

    await new Promise((resolve)=>{
      setTimeout(()=>{
        console.log('> Promise resolved!');
        console.timeEnd('myTimer');
        resolve();
      }, 3000)
    }); */

    return {
      vehicles: vehicles.data.results
    } // Serão mesclados com data()
  },
  methods:{}
};
</script>

<style>
</style>
