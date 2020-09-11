<template>
  <header class="main-header">
    <div class="main-header__content">
      <h2>CDA_</h2>
      <div>
        <i class="icon icon--l year-separator__icon" @click="toggleAll"
          >reorder</i
        >
        <i
          v-if="!open"
          class="icon icon--m main-header__icon"
          @click="open = !open"
          >more_vert</i
        >
        <i v-else class="icon icon--m main-header__icon" @click="open = !open"
          >close</i
        >
      </div>
    </div>
    <setting :open="this.open" mobile="true" />
  </header>
</template>

<script>
import setting from '@/components/Settings.vue';

export default {
  name: 'HeaderMobile',
  components: {
    setting
  },
  methods: {
    toggleAll() {
      this.$emit('toggleAll');
    }
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
  position: fixed;
  bottom: 0;
  background: $white;
  width: 100%;
  z-index: 99;
  border-bottom: 0;

  &__content {
    max-width: $max-width-content;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $xs $s;
  }
}
</style>
