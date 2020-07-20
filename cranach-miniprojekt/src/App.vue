<template>
  <div id="app">
    <Header />
    <router-view class="main-content"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
  @import '@/styles/main';

  .main-content {
    max-width: $max-width-content;
    margin: auto;
  }
</style>
