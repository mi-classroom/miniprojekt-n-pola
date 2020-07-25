<template>
  <nav class="dropwdown-menu">
    <div class="dropwdown-menu__header" @click="isOpen = !isOpen">
      <span>{{currentLang.label}}</span>
      <i class="icon icon--m ">arrow_drop_down</i>
    </div>
    <ul v-show="isOpen" class="dropwdown-menu__list">
      <li v-for="lang in filteredLangs" class="dropwdown-menu__language" :key="lang.lang">
        <router-link class="dropwdown-menu__link" :to="lang.link">
          <span @click.self="isOpen = !isOpen; setLang(lang)">
            {{lang.label}}
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Language Switcher',
  computed: {
    ...mapState({
      currentLang: (state) => state.currentLang,
    }),
    filteredLangs() {
      const filteredLangs = [];
      this.langs.forEach((element) => {
        // eslint-disable-next-line eqeqeq
        if (element.lang != this.currentLang.lang) { filteredLangs.push(element); }
      });
      return filteredLangs;
    }
  },
  methods: {
    ...mapActions(['setLang']),
  },
  data() {
    return {
      isOpen: false,
      langs: [
        {
          lang: 'de',
          link: '/de',
          label: 'Deutsch'
        },
        {
          lang: 'en',
          link: '/en',
          label: 'English'
        }
      ]
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
    cursor: pointer;
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
