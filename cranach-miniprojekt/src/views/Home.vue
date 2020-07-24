<template>
  <main class="main-content">
    <Year
    v-for="(painting, index) in paintings"
    :key="painting.year"
    :painting="painting"
    :indexYear="index" />
  </main>
</template>

<script>
// @ is an alias to /src
import Year from '@/components/Year.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      paintings: (state) => state.paintings
    })
  },
  name: 'Home',
  components: {
    Year
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.main-content {
  max-width: $max-width-content;
  margin: $l auto;

  &__year {
    margin-bottom: $l;
  }
}
</style>
