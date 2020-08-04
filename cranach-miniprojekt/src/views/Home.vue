<template>
  <main class="main-content">
    <Year
    v-for="(painting, index) in paintings"
    :key="painting.year"
    :painting="painting"
    :indexYear="index"
    @toggleAll="console.log('wtf')"
    ref="year" />
    <modal />
  </main>
</template>

<script>
import Year from '@/components/Year.vue';
import modal from '@/components/Modal.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      toggleState: false,
    };
  },
  computed: {
    ...mapState({
      paintings: (state) => state.paintings
    })
  },
  methods: {
    toggleAll() {
      if (this.toggleState) {
        this.$refs.year.forEach((element) => {
          element.openAccordion();
        });
        this.toggleState = !this.toggleState;
      } else {
        this.$refs.year.forEach((element) => {
          element.closeAccordion();
        });
        this.toggleState = !this.toggleState;
      }
    }
  },
  components: {
    Year,
    modal
  },
  beforeMount() {
    this.$store.dispatch('loadPaintings', `./data/json/cda-paintings-v2.${this.$route.params.lang}.json`);
  },
  watch: {
    $route() {
      this.$store.dispatch('loadPaintings', `./data/json/cda-paintings-v2.${this.$route.params.lang}.json`);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.main-content {
  max-width: $max-width-content;
  margin: $l auto;

  @media screen and (max-width: $vp-small) {
      margin: 0 auto $xxl;
    }
}
</style>
