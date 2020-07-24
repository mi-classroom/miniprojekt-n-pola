<template>
  <div class="modal">
    <article class="modal__content">
      <figure class="modal__details">
        <img class="modal__details__image"
          src="http://lucascranach.org/imageserver/CH_KMB_179_FR281B/pyramid/DCH_KMB_179_FR281B_Detail-004-l.jpg"
        />
        <figcaption class="modal__details__text">
          <h3>Frau eines Rechtsgelehrten</h3>
          <p>
            "Brustbild nach links, ohne Hände, vor blauem Grund. Sie hat graublaue Augen und an den
            Schläfen sichtbares blondes Haar. Sie trägt ein moireseidenes rotes Kleid mit engen
            Ärmeln, geschnürtem Mieder und breiten gemusterten Goldborten, einen Brustlatz mit einer
            Darstellung der Jungfrau mit dem Einhorn, flankiert von zwei Personen (Jägern?), ein
            Schulterhemd mit Goldborten, einen goldenen Halsreif und Goldketten. Die Haube besteht
            aus aufgepolsterten dunkleren Zöpfen mit goldfarbenem perlenbesticktem Flechtrand und
            einem roten Bändchen.\n\n[Löcher, Cat. Nuremberg 1997, 160]"
          </p>
          <article class="modal__details__facts">
            <p>Nürnberg</p>
            <p>Germanisches Nationalmuseum, Nürnberg</p>
            <p class="modal__details__fact modal__details__fact--small">
              DE_GNMN_Gm614<br>1503,1507,1508
            </p>
          </article>
        </figcaption>
      </figure>
      <button class="modal__button modal__button--close">
          <i class="icon icon--s modal__button__icon">close</i>
      </button>
    </article>
  </div>
</template>

<script>
export default {
  name: 'modal'
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

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
    transform: translate3d(0,0,0);
  }

  &__details {
    display: grid;
    grid-template-columns: repeat($grid-count, 1fr);
    grid-gap: $gutter-grid;
    height: $modal-height;

    &__image {
      grid-column: span $grid-span-half;
      height: 100%;
      width:  100%;
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
    &--close {
      position: absolute;
      width: $s;
      height: $s;
      top: - $xs;
      right: - $xs;
      background: $light;
      border-radius: 100%;
    }
  }
}
</style>
