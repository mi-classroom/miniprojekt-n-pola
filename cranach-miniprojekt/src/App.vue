<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      lang: 'de',
    };
  },
  beforeMount() {
    this.$store.dispatch('loadPaintings', `/data/json/cda-paintings-v2.${this.lang}.json`);
  },
};
</script>

<style lang="scss">
  @import '@/styles/main';
</style>
