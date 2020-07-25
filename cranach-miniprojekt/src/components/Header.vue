<template>
  <header class="main-header">
    <div class="main-header__content">
      <h2>CDA_</h2>
      <nav>
        <router-link to="/de">Deutsch</router-link> |
        <router-link to="/en">English</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
