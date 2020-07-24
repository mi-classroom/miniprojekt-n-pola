<template>
  <main class="main-content">
    <Year
    v-for="(painting, index) in paintings"
    :key="painting.year"
    :painting="painting"
    :indexYear="index" />
    <modal />
  </main>
</template>

<script>
import Year from '@/components/Year.vue';
import modal from '@/components/Modal.vue';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      paintings: (state) => state.paintings
    })
  },
  name: 'Home',
  components: {
    Year,
    modal
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
