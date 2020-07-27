<template>
  <div class="year-separator" :class="{'year-separator--closed': !open}">
    <time class="year-separator__heading heading heading--h1">{{year}}</time>
    <div class="year-separator__counter">
      <span class="year-separator__line" />
      <div class="year-separator__content">
        <i class="icon icon--m year-separator__icon">photo</i>
        {{count}}
      </div>
    </div>
    <div class="year-separator__icon-wrap">
      <i class="icon icon--l year-separator__icon year-separator__icon--more"
      :class="{'year-separator__icon--open': open}">expand_more</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YearSeparator',
  props: {
    year: Number,
    count: Number,
    open: Boolean
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.year-separator {
  display: grid;
  grid-template-columns: repeat($grid-count, 1fr);
  grid-gap: $gutter-grid;
  margin-bottom: $m;
  cursor: pointer;

  &__heading {
    grid-column: span 2;
  }

  &__counter {
    grid-column: span 9;
    transform: translate3d(0,0,0);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__line {
    position: absolute;
    width: 100%;
    height: $border-width;
    background: $dark;
    z-index: -1;
  }

  &__content {
    background: $white;
    padding: 0 $xs;
    color: $dark;
    user-select: none;
  }

  &__icon {
    margin-right: $xs;
    color: $dark;
    transition: all $transition-fast ease;

    &--more {
      color: $darkest;
    }
    &--open {
      transform: rotateZ(180deg);
    }
  }

  @media screen and (max-width: $vp-small) {
    grid-template-columns: repeat($grid-count, 1fr);
    background: $darkest;
    margin-bottom: $grid-mobile-gutter;
    padding: 0 $s;
    display: flex;
    justify-content: space-between;

    &--closed {
      margin-bottom: 0;
    }

    &__line {
      display: none;
    }

    &__heading {
      color: $white;
      font-size: $f-l;
    }

    &__icon-wrap {
      display: none;
    }

    &__content {
      background: none;
    }

    &__icon {
      margin-right: $xxs;
    }
  }

}

.akkordeon__icon-wrap {
  display: flex;
  align-items: center;
}

</style>
