<template>
  <main>
    <section v-for="paintings in paintings" :key="paintings.year">
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
