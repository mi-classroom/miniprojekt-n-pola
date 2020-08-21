<template>
  <div class="modal" v-show="open" @click.self="closeModal">
    <article class="modal__content">
      <figure class="modal__details">
        <img
          class="modal__details__image"
          :src="painting.images.sizes.s.src"
          :alt="painting.titles[0].title"
        />
        <ModalNav />
        <figcaption class="modal__details__text">
          <h3 class="modal__details__text__heading">{{painting.titles[0].title}}</h3>
          <p class="modal__details__text__description">{{painting.description}}</p>
          <article class="modal__details__facts">
            <p>
              {{painting.locations[0].term}}
              <br />
              {{painting.owner}}
            </p>
            <p>
              {{painting.structuredDimension.height}}
              x
              {{painting.structuredDimension.width}} cm
            </p>
            <p class="modal__details__fact modal__details__fact--small">
              {{painting.inventoryNumber}}
              <br />
              {{painting.dating.dated}}
            </p>
          </article>
        </figcaption>
      </figure>
      <button class="modal__button modal__button--close" @click="closeModal">
        <i class="icon icon--s modal__button__icon">close</i>
      </button>
    </article>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ModalNav from '@/components/ModalNavigation.vue';

export default {
  computed: {
    ...mapState({
      currentImage: (state) => state.currentModalImage,
      open: (state) => state.modalOpen,
      // eslint-disable-next-line max-len
      paintings: (state) => state.paintings
    }),
    painting() {
      return this.paintings[this.currentImage.indexYear].items[this.currentImage.indexImage];
    }
  },
  methods: {
    ...mapActions(['closeModal']),
  },
  name: 'modal',
  components: {
    ModalNav
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables";

.modal {
  position: fixed;
  background: $darkest-50;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    max-width: $max-width-content;
    background: $darkest;
    border: $border-width solid $light;
    transform: translate3d(0, 0, 0);
  }

  &__details {
    display: grid;
    grid-template-columns: repeat($grid-count, 1fr);
    grid-gap: $gutter-grid;
    height: $modal-height;

    &__image {
      grid-column: span $grid-span-half;
      height: 100%;
      width: 100%;
      background: #000;
      object-fit: contain;
    }

    &__text {
      padding: $s 0;
      padding-right: $s;
      grid-column: span $grid-span-half;
      color: $white;
      display: flex;
      flex-flow: column;
      height: $modal-height;

      &__heading {
        margin-bottom: $s;
      }

      &__description {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 11;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }

    &__facts {
      margin-top: auto;
    }

    &__fact {
      &--small {
        margin-bottom: 0;
        font-size: $f-xs;
      }
    }
  }

  &__button {
    cursor: pointer;
    &--close {
      position: absolute;
      width: $s;
      height: $s;
      top: -$xs;
      right: -$xs;
      background: $light;
      border-radius: 100%;
    }
  }

  @media screen and (max-width: $vp-small) {
    align-items: flex-start;
    overflow-y: scroll;
    &__content {
      max-width: 100%;
      border: 0;
      min-height: calc(100% - #{$xxl});
      margin-bottom: $xxl;
    }

    &__details {
      display: block;
      height: 100%;

      &__image {
        height: 50vh;
      }

      &__text {
        padding: $s;
        height: auto;
      }
    }

    &__button {
      top: $xs;
      right: $xs;
    }
  }
}
</style>
