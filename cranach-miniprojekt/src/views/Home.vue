<template>
  <main class="main-content">
    <section class="main-content__year" v-for="paintings in paintings" :key="paintings.year">
      <YearSeparator :year="paintings.year" :count ="paintings.items.length" />
      <ImageGrid :images="paintings.items" />
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import YearSeparator from '@/components/YearSeparator.vue';
import ImageGrid from '@/components/ImageGrid.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      paintings: (state) => state.paintings,
    }),
  },
  name: 'Home',
  components: {
    YearSeparator,
    ImageGrid,
  },
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
