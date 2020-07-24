<template>
  <nav class="modal-nav">
    <i class="icon icon--m modal-nav__icon" @click="modalPrevImage">arrow_back</i>
    <i class="icon icon--m modal-nav__icon">favorite_border</i>
    <i class="icon icon--m modal-nav__icon" @click="modalNextImage">arrow_forward</i>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'modalNav',
  methods: {
    ...mapActions(['modalNextImage', 'modalPrevImage']),
  },
};
</script>

<style lang="scss">
@import '@/styles/_variables';
.modal-nav {
  position: absolute;
  right: $s;
  bottom: $s;
  color: $white;

  &__icon {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: $xs;
    }
  }
}
</style>
