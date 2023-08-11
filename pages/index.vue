<template>
  <!-- <Tutorial/> -->
  <div>

    <button class="bg-gray-100" v-tooltip="'You have new messages.'">Click here</button>
    <pre>

      {{ $config }}
    </pre>
    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  asyncData({$config}) {
    console.log($config)
  },
  created(){
    console.log(this.$config.youtube_api_key)
  },
  mounted() {
    console.log(this.$toUpperCase("Jon Snow"));
    console.log(this.$dayjs().format());
  },
};
</script>
