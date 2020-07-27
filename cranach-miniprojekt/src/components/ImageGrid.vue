<template>
  <div ref="reel" class="image-grid">
    <figure v-for="(image, index) in images" class="image-grid__object" :key="image.objectID">
      <img
        class="image-grid__image"
        :alt="image.titles[0].title"
        :src="image.images.sizes.s.src"
        @error="removeImage($event, index)"
        @click="openModal(index)"
      />
    </figure>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ImageGrid',
  methods: {
    ...mapActions(['removeImageAction', 'showImageModal']),
    removeImage($event, index) {
      this.removeImageAction({ indexYear: this.indexYear, indexImage: index });
    },
    openModal(indexImage) {
      this.showImageModal({ indexYear: this.indexYear, indexImage });
    }
  },
  mounted() {
    this.$refs.reel.style.height = `${this.$refs.reel.scrollHeight}px`;
  },
  updated() {
    if (this.$refs.reel.style.height !== 0) { this.$refs.reel.style.height = 'auto'; this.$refs.reel.style.height = `${this.$refs.reel.scrollHeight}px`; }
  },
  props: {
    images: Array,
    indexYear: Number
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.image-grid {
  display: grid;
  grid-gap: $gutter-grid;
  grid-template-columns: repeat($grid-count, 1fr);
  overflow: hidden;
  transition: all $transition-fast ease;

  &__object {
    grid-column: span 2;
    transform: translate3d(0, 0, 0);
    cursor: pointer;

    &::before {
      content: '';
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
    user-select: none;
  }

  @media screen and (max-width: $vp-small) {
    grid-template-columns: repeat($grid-mobile-count, 1fr);
    grid-gap: $grid-mobile-gutter;

    &__object {
      grid-column: span 1;
    }
  }
}
</style>
