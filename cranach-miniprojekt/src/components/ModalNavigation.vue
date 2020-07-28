<template>
  <nav class="modal-nav">
    <i class="icon icon--m modal-nav__icon" @click="modalPrevImage">arrow_back</i>
    <span class="modal-nav__like modal-nav__icon" @mouseover="hoverLike = true"
    @mouseleave="hoverLike = false">
      <i v-if="!hoverLike" class="icon icon--m modal-nav__icon">favorite_border</i>
      <i v-else class="icon icon--m modal-nav__icon modal-nav__icon--like">favorite</i>
    </span>
    <i class="icon icon--m modal-nav__icon" @click="modalNextImage">arrow_forward</i>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'modalNav',
  data() {
    return {
      hoverLike: false,
    };
  },
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
    &--like {
      color: $accent-bright;
    }
  }

  @media screen and (max-width: $vp-small) {
    position: inherit;
    padding: 0 $s;
    margin-top: $s;
    display: flex;
    justify-content: space-between;
  }
}
</style>
