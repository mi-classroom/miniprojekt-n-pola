/* eslint-disable func-names */
<template>
  <section class="main-content__year">
    <YearSeparator :year="painting.year" :count="painting.items.length"
    @click.native="toggleAccordion" :open="open" />
    <ImageGrid ref="reel" :images="painting.items" :indexYear="indexYear" />
  </section>
</template>

<script>
import YearSeparator from '@/components/YearSeparator.vue';
import ImageGrid from '@/components/ImageGrid.vue';

export default {
  props: {
    painting: Object,
    indexYear: Number
  },
  data() {
    return {
      open: true,
    };
  },
  methods: {
    toggleAccordion() {
      if (this.open) {
        this.$refs.reel.$el.style.height = 0;
        this.open = !this.open;
      } else {
        this.$refs.reel.$el.style.height = `${this.$refs.reel.$el.scrollHeight}px`;
        this.open = !this.open;
      }
    },
    openAccordion() {
      this.$refs.reel.$el.style.height = `${this.$refs.reel.$el.scrollHeight}px`;
      this.open = true;
    },
    closeAccordion() {
      this.$refs.reel.$el.style.height = 0;
      this.open = false;
    },
  },
  name: 'YearBlock',
  components: {
    YearSeparator,
    ImageGrid
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.main-content {

  &__year {
    margin-bottom: $l;

    @media screen and (max-width: $vp-small) {
      margin-bottom: $grid-mobile-gutter;
    }
  }
}
</style>
