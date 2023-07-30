<template>
  <!-- <Tutorial/> -->
  <div>

    <button class="bg-gray-100" v-tooltip="'You have ' + count + ' new messages.'">Click here</button>

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
  mounted() {
    console.log(this.$toUpperCase("Jon Snow"));
    console.log(this.$dayjs().format());
  },
};
</script>
