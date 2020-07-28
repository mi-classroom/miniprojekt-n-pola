<template>
  <header class="main-header">
    <div class="main-header__content">
      <h2>CDA_</h2>
      <i class="icon icon--l year-separator__icon" @click="toggleAll">reorder</i>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderMobile',
  methods: {
    toggleAll() {
      this.$emit('toggleAll');
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

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
