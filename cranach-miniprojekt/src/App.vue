<template>
  <div id="app">
    <Header v-if="!isMobile()" />
    <HeaderMobile v-else />
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import router from '@/router';
import Header from '@/components/Header.vue';
import HeaderMobile from '@/components/HeaderMobile.vue';
import isMobile from '@/mixins/isMobile';

export default {
  mixins: [isMobile],
  name: 'App',
  components: {
    Header,
    HeaderMobile
  },
  computed: {
    ...mapState({
      open: (state) => state.modalOpen
    }),
  },
  methods: {
    ...mapActions(['closeModal', 'modalPrevImage', 'modalNextImage', 'setLang'])
  },
  created() {
    if (!this.$route.params.lang || this.$route.params.lang === 'index.html') {
      router.push('/de');
      this.setLang({
        lang: 'de',
        link: '/de',
        label: 'Deutsch'
      });
    }
    window.addEventListener('keyup', (e) => {
      console.log(e.key);
      if (e.key === 'Escape') {
        this.closeModal();
      } else if (e.key === 'ArrowRight' && this.open) {
        this.modalNextImage();
      } else if (e.key === 'ArrowLeft' && this.open) {
        this.modalPrevImage();
      }
    });
  },
};
</script>

<style lang="scss">
  @import '@/styles/main';
</style>
