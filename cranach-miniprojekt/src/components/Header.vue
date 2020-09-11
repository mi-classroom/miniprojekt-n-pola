<template>
  <header class="main-header">
    <div class="main-header__content">
      <h2>CDA_</h2>
      <i
        v-if="!open"
        class="icon icon--m main-header__icon"
        @click="open = !open"
        >menu</i
      >
      <i v-else class="icon icon--m main-header__icon" @click="open = !open"
        >close</i
      >
    </div>
    <setting :open="this.open" />
  </header>
</template>

<script>
import setting from '@/components/Settings.vue';

export default {
  name: 'Header',
  components: {
    setting
  },
  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables";

.main-header {
  border-bottom: 1px solid $darkest;

  &__content {
    max-width: $max-width-content;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $s 0;
  }

  &__icon {
    cursor: pointer;
  }
}
</style>
