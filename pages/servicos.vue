<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-lg font-bold">Serviços</h1>

      <p class="textCustom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut
        repudiandae maiores numquam eligendi similique officiis quos dolores
        laborum suscipit? Ipsam labore in unde tempore obcaecati ipsum, nemo
        voluptates cupiditate ab nobis facere! Fugit nam quidem id debitis cum
        et!
      </p>

      <nuxt-link class="bg-gray-300" to="/servicos/desenvolvimento-de-sites">
        desenvolvimento-de-sites
      </nuxt-link>
      <nuxt-link class="bg-gray-300" to="/servicos/curso-de-vue-js">
        curso-de-vue-js
      </nuxt-link>

      <pre>
          {{ $fetchState }}
        </pre
      >

      <div v-if="$fetchState.pending">
        <small>Carregando...</small>
      </div>

      <div v-else>
        <ul class="list-disc text-yellow-500">
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
  name: "ServicosChild",
  head() {
    return {
      title: this.title, // Reativo
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Minha descrição do serviço...",
        },
      ],
      bodyAttrs: {
        class: "bg-blue-400",
      },
    };
  },
  data() {
    return {
      title: "",
      services: [],
    };
  },
  async fetch() {
    const { data } = await this.$axios.get("/planets");
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
  },
  created() {
    this.getTitle();
  },
  methods: {
    getTitle() {
      setTimeout(() => {
        this.title = "Serviços!";
      }, 3000);
    },
  },
};
</script>
