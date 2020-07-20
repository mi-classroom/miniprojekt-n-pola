<template>
  <div class="image-grid">
    <figure v-for="image in images" class="image-grid__object"  :key="image.objectID">
      <img class="image-grid__image" :alt="image.titles[0].title" :src="image.images.sizes.m.src">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'YearSeparator',
  props: {
    images: Array,
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

  .image-grid {
    display: grid;
    grid-gap: $gutter-grid;
    grid-template-columns: repeat($grid-count, 1fr);

    &__object {
      grid-column: span 2;
      transform: translate3d(0,0,0);

      &::before {
        content: "";
        display: inline-block;
        width: 1px;
        height: 0;
        padding-bottom: 100%;
      }
    }

    &__image {
      position: absolute;
      object-fit: cover;
      height: 100%;
    }

  }

</style>
