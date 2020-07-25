<template>
  <header class="main-header">
    <div class="main-header__content">
      <h2>CDA_</h2>
      <langSwitcher />
    </div>
  </header>
</template>

<script>
import langSwitcher from './LangSwitcher.vue';

export default {
  name: 'Header',
  components: {
    langSwitcher
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.main-header {
  border-bottom: 1px solid $darkest;

  &__content {
    max-width: $max-width-content;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: $s 0;
  }
}
</style>
