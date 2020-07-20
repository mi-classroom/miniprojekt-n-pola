<template>
  <div class="image-grid">
    <figure v-for="image in images" :key="image.objectID">
      <img :src="image.images.sizes.m.src">
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

<style>
  @import '@/styles/_variables';

  .image

</style>
