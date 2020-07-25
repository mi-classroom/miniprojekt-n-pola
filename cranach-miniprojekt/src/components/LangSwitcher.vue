<template>
  <nav class="dropwdown-menu">
    <div class="dropwdown-menu__header" @click="isOpen = !isOpen">
      <span>Deutsch</span>
      <i class="icon icon--m ">arrow_drop_down</i>
    </div>
    <ul v-show="isOpen" class="dropwdown-menu__list">
      <li class="dropwdown-menu__language">
        <router-link class="dropwdown-menu__link" to="/en">English</router-link>
      </li>
      <li class="dropwdown-menu__language">
        <router-link class="dropwdown-menu__link" to="/en">English</router-link>
      </li>
      <li class="dropwdown-menu__language">
        <router-link class="dropwdown-menu__link" to="/en">English</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Language Switcher',
  data() {
    return {
      isOpen: false,
    };
  }

};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.dropwdown-menu {
  transform: translate3d(0,0,0);
  &__header {
    border: $border-width solid $dark;
    display: flex;
    align-items: center;
    padding: $xxs $xs;
  }

  &__list {
    position: absolute;
    background: $white;
    border: $border-width solid $dark;
    border-top: 0;
    width: 100%;
  }

  &__language {
    padding: $xxs $xs;

    &:not(:last-child) {
      border-bottom: $border-width solid $dark;
    }
  }

  &__link {
    text-decoration: none;
    color: $darkest;
  }
}

</style>
