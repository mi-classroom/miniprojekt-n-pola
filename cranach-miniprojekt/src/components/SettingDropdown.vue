<template>
  <div class="configuration">
    <h4>{{ name }}</h4>
    <nav class="dropwdown-menu">
      <div class="dropwdown-menu__header" @click="isOpen = !isOpen">
        <span>{{ currentOption }}</span>
        <i class="icon icon--m">arrow_drop_down</i>
      </div>
      <ul v-show="isOpen" class="dropwdown-menu__list">
        <li
          v-for="option in filteredOption"
          class="dropwdown-menu__item"
          :key="option.index"
          @click="
            isOpen = !isOpen;
            setOption(option);
          "
        >
          <span>
            {{ option }}
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'settingDropdwon',
  props: {
    name: String,
    options: Array,
    start: String,
    storeRef: String,
    action: String
  },
  data() {
    return {
      isOpen: false,
      newOption: '',
      forceRecomputeCounter: 0
    };
  },
  computed: {
    currentOption() {
      if (this.currentOptionStore) return this.$store.state[this.currentOptionStore];
      if (this.newOption) return this.newOption;
      return this.start;
    },
    filteredOption() {
      // eslint-disable-next-line no-unused-expressions
      this.forceRecomputeCounter;
      const filtered = [];
      this.options.forEach((element) => {
        // eslint-disable-next-line eqeqeq
        if (element != this.currentOption) { filtered.push(element); }
      });
      return filtered;
    }
  },
  methods: {
    setOption(option) {
      if (this.action) { this.$store.dispatch(this.action, option); }
      this.newOption = option;
      // eslint-disable-next-line no-plusplus
      this.forceRecomputeCounter++;
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables";

.configuration {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $dark;
  padding: $s 0;
}

.dropwdown-menu {
  transform: translate3d(0, 0, 0);
  min-width: 40%;

  &__header {
    border: $border-width solid $dark;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  &__item {
    padding: $xxs $xs;
    cursor: pointer;

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
