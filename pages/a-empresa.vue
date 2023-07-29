<template>
  <div>
    <h1 class="text-lg font-bold">A Empresa</h1>
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
  name: "AEmpresa",
  // middleware(){
  //   console.log('> middleware empresa')
  // },
  middleware:'auth',
  data() {
    return {};
  },
};
</script>

<style>
</style>
